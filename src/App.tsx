import { useState, useEffect } from "react"

import * as S from "./App.styles"
import { Header } from "./components/Header"
import { ItemType } from "./types/ItemTypes"
import { CategoryType } from "./types/CategorieTypes"
import { categories } from "./data/categories"
import { items } from "./data/items"
import { getCurrentMounth, filterListByMounth } from "./services/dateFilter"

function App() {

  const [listItems, setListItems] = useState(items)
  const [filteredListItems, setFilteredListItems] = useState<ItemType[]>([])
  const [currentMounth, setCurrentMounth] = useState(getCurrentMounth())

  useEffect(() => {
    setFilteredListItems(filterListByMounth(listItems, currentMounth))
  }, [listItems, currentMounth])
  return (
    <S.Container>
      <Header />
      <S.ContentMain>Content Main</S.ContentMain>
    </S.Container>
  )
}

export default App
