import * as S from "./styles"
import { ItemType } from "../../types/ItemTypes"
import { formatDate } from "../../services/dateFilter"
import { categories } from "../../data/categories"

interface PropsItem {
  item: ItemType
}

export function TableItem({ item }: PropsItem) {
  return (

    <S.TableLine>
      <S.TableColum>{formatDate(item.date)}</S.TableColum>
      <S.TableColum>
        <S.Category color={categories[item.category].color}>{categories[item.category].title}</S.Category>
      </S.TableColum>
      <S.TableColum>{item.title}</S.TableColum>
      <S.TableColum>
        <S.Value color={categories[item.category].expense ? '#dc2626' : '#4ade80'}>
          R$ {item.price}
        </S.Value>
      </S.TableColum>
    </S.TableLine>
  )
}