import { ItemType } from "../types/ItemTypes";

export function getCurrentMounth() {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export function filterListByMonth(list: ItemType[], date: string): ItemType[] {
  let newList: ItemType[] = [];
  let [year, month] = date.split("-");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
}

function addZeroToDate(number: number): string {
  if (number < 10) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
}
export function formatDate(date: Date): string {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}
