import * as S from "./styles"
import { ItemType } from "../../types/ItemTypes"
import { categories } from "../../data/categories"
import { useState } from "react";

import useDebounce from "../../hooks/useDebounce";

interface inputAreaProps {
  onAdd: (item: ItemType) => void;
}

export function InputArea({ onAdd }: inputAreaProps) {
  const [data, setData] = useState("")
  const [category, setCategory] = useState("food")
  const [titleItem, setTitleItem] = useState("")
  const [valueItem, setValueItem] = useState(0)

  let categoryKeys: string[] = Object.keys(categories);
  let debounceTitle = useDebounce(titleItem)

  function formateDataForCreateANewItem(data: string) {
    let [year, month, day] = data.split('-')
    let dateFormatted = new Date(parseInt(year), parseInt(month), parseInt(day))
    dateFormatted.setMonth(dateFormatted.getMonth() - 1)
    return dateFormatted
  }


  function handleCreateANewItem() {

    if (titleItem === "") {
      alert("Por favor preencha um titulo")
    } if (data === "") {
      alert("Por favor preencha uma data")
    } else {
      onAdd({
        date: formateDataForCreateANewItem(data),
        category: category,
        price: valueItem,
        title: debounceTitle
      })
      clearFields()
    }
  }
  function clearFields() {
    setData("")
    setCategory("food");
    setValueItem(0)
    setTitleItem("")
  }

  return (
    <S.Container>
      <S.InputLabel>
        <S.InputTitle>Data</S.InputTitle>
        <S.Input value={data} type="date" onChange={event => setData(event.target.value)} />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>Categoria</S.InputTitle>
        <S.Select value={category} onChange={event => setCategory(event.target.value)}>

          {categoryKeys.map((key, index) =>
            <option
              value={key}
              key={index}
            >
              {categories[key].title}
            </option>
          )}

        </S.Select>
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle
        >Título</S.InputTitle>
        <S.Input type="text"
          value={titleItem}
          onChange={event => setTitleItem(event.target.value)} />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>Valor</S.InputTitle>
        <S.Input type="number"
          value={valueItem}
          onChange={event => setValueItem(parseFloat(event.target.value))} />
      </S.InputLabel>
      <S.InputLabel>
        <S.InputTitle>&nbsp;</S.InputTitle>
        <S.Button onClick={handleCreateANewItem}>Adicionar</S.Button>
      </S.InputLabel>
    </S.Container>
  )
}