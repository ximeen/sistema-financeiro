import * as S from "./styles"
import { CaretLeft, CaretRight } from "phosphor-react"
import { formateCurrentMonth } from "../../services/dateFilter"

interface currentMonthProps {
  currentMonth: string,
  onMonthChange: (newMonth: string) => void
}

export function InfoArea({ currentMonth, onMonthChange }: currentMonthProps) {

  function hadlePreviouMonth() {
    let [year, month] = currentMonth.split("-")
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)

  }

  function handleNextMonth() {
    let [year, month] = currentMonth.split("-")
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <S.Container>
      <S.MonthArea>

        <S.MonthArrow onClick={hadlePreviouMonth}>
          <CaretLeft size={24} />
        </S.MonthArrow>

        <S.MonthTitle>{formateCurrentMonth(currentMonth)}</S.MonthTitle>

        <S.MonthArrow onClick={handleNextMonth}>
          <CaretRight size={24} />
        </S.MonthArrow>

      </S.MonthArea>

      <S.ResumeArea></S.ResumeArea>
    </S.Container>
  )
}