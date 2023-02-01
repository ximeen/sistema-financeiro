import * as S from "./styles"
import { CaretLeft, CaretRight } from "phosphor-react"

import { formateCurrentMonth } from "../../services/dateFilter"
import { ResumeItem } from "../ResumeItem"

interface currentMonthProps {
  currentMonth: string,
  onMonthChange: (newMonth: string) => void,
  income: number,
  expenses: number,
}

export function InfoArea({ currentMonth, onMonthChange, income, expenses }: currentMonthProps) {

  function hanlePreviousMonth() {
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

        <S.MonthArrow onClick={hanlePreviousMonth}>
          <CaretLeft size={24} />
        </S.MonthArrow>

        <S.MonthTitle>{formateCurrentMonth(currentMonth)}</S.MonthTitle>

        <S.MonthArrow onClick={handleNextMonth}>
          <CaretRight size={24} />
        </S.MonthArrow>

      </S.MonthArea>

      <S.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expenses} />
        <ResumeItem
          title="Balanço"
          value={income - expenses}
          color={(income - expenses) < 0 ? "#dc2626" : "#4ade80"} />

      </S.ResumeArea>
    </S.Container>
  )
}