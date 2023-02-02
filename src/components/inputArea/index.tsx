import { ItemType } from "../../types/ItemTypes"
import * as S from "./styles"

interface inputAreaProps {
  onAdd: (item: ItemType) => void;
}

export function InputArea({ onAdd }: inputAreaProps) {
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
      <button onClick={handleCreateANewItem}>Adicionar</button>
    </S.Container>
  )
}