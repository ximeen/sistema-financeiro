import * as S from "./styles"
import { ItemType } from "../../types/ItemTypes"
import { TableItem } from "../TableItem"

interface Props {
  list: ItemType[]
}

export function TableArea({ list }: Props) {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeadColum width={100}>Data</S.TableHeadColum>
          <S.TableHeadColum width={130}>Categoria</S.TableHeadColum>
          <S.TableHeadColum>Título</S.TableHeadColum>
          <S.TableHeadColum width={150}>Valor</S.TableHeadColum>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </S.Table>
  )
}