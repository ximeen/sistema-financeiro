import { useState, useEffect } from "react"

import * as S from "./App.styles"
import { Header } from "./components/Header"
import { ItemType } from "./types/ItemTypes"
import { CategoryType } from "./types/CategorieTypes"
import { categories } from "./data/categories"
import { items } from "./data/items"
import { getCurrentMounth, filterListByMonth } from "./services/dateFilter"
import { InfoArea } from "./components/infoArea"
import { TableArea } from "./components/TableArea"
import { InputArea } from "./components/inputArea"

function App() {

  const [listItems, setListItems] = useState(items)
  const [filteredListItems, setFilteredListItems] = useState<ItemType[]>([])
  const [currentMounth, setCurrentMounth] = useState(getCurrentMounth())
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)

  useEffect(() => {
    setFilteredListItems(filterListByMonth(listItems, currentMounth))
  }, [listItems, currentMounth])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (let i in filteredListItems) {
      if (categories[filteredListItems[i].category].expense) {
        expenseCount += filteredListItems[i].price
      } else {
        incomeCount += filteredListItems[i].price
      }
    }
    setExpenses(expenseCount);
    setIncome(incomeCount);

  }, [filteredListItems])

  function handleMonthChange(newMonth: string) {
    setCurrentMounth(newMonth)
  }

  function handleAddItem(item: ItemType) {
    let newList = [...listItems]
    newList.push(item)

    setListItems(newList)
  }

  return (
    <S.Container>
      <Header />
      <S.ContentMain>
        <InfoArea
          currentMonth={currentMounth}
          onMonthChange={handleMonthChange}
          income={income}
          expenses={expenses}
        />
        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredListItems} />
      </S.ContentMain>
    </S.Container>
  )
}

export default App
