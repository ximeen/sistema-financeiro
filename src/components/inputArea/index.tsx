import * as S from "./styles"
import { ItemType } from "../../types/ItemTypes"
import { categories } from "../../data/categories"
import { items } from "../../data/items";

interface inputAreaProps {
  onAdd: (item: ItemType) => void;
  list: ItemType[]

}

export function InputArea({ onAdd, list }: inputAreaProps) {
  function handleCreateANewItem() {
    let newItem: ItemType = {
      date: new Date(),
      category: "food",
      price: 100,
      title: "lanche"
    }

    onAdd(newItem)
  }

  return (
    <S.Container>
      <S.InputLabel>
        <S.InputTitle>Data</S.InputTitle>
        <S.Input type="date" />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>Sategoria</S.InputTitle>
        <S.Select>
          <>
            {list.map((item, index) =>
              <option value="" key={index}>
                {categories[item.category].title}
              </option>
            )}
          </>
        </S.Select>
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>Título</S.InputTitle>
        <S.Input type="text" />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>Valor</S.InputTitle>
        <S.Input type="number" />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>&nbsp;</S.InputTitle>
        <S.Button>Adicionar</S.Button>
      </S.InputLabel>
    </S.Container>
  )
}