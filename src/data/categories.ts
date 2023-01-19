import { CategoryType } from "./../types/CategorieTypes";

export const categories: CategoryType = {
  food: {
    title: "Alimentação",
    color: "#f43f5e",
    expense: true,
  },
  home: {
    title: "Reforma",
    color: "#0284c7",
    expense: true,
  },
  salary: {
    title: "Salario CLT",
    color: "#22c55e",
    expense: false,
  },
  transport: {
    title: "CNH",
    color: "#6366f1",
    expense: true,
  },
};
