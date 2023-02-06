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
    title: "Salario",
    color: "#22c55e",
    expense: false,
  },
  transport: {
    title: "CNH",
    color: "#6366f1",
    expense: true,
  },
  investiment: {
    title: "Investimentos",
    color: "#f59e0b",
    expense: true,
  },
  aposta: {
    title: "Apostas",
    color: "#dc2626",
    expense: true,
  },
  credit_card: {
    title: "Cartão de credito",
    color: "#4338ca",
    expense: true,
  },
  external_work: {
    title: "externo",
    color: "#60a5fa",
    expense: false,
  },
};
