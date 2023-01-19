import { ItemType } from "../types/ItemTypes";

export const getCurrentMounth = () => {
  let now = new Date();
  return `${now.getFullYear}-${now.getMonth() + 1}`;
};

export const filterListByMounth = (
  list: ItemType[],
  date: string
): ItemType[] => {
  let newList: ItemType[] = [];
  let [year, mounth] = date.split("-");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(mounth)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};
