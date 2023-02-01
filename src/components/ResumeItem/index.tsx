import * as S from "./styles"


interface ResumeItemsProps {
  title: string;
  value: number,
  color?: string
}

export function ResumeItem({ title, value, color }: ResumeItemsProps) {
  return (
    <S.Container>
      <S.Title>{title} </S.Title>
      <S.Value color={color}>{value}</S.Value>
    </S.Container>
  )
}