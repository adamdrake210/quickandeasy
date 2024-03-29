import { ProduceType } from "./salad-data";

export type Tortila = {
  id: string;
  title: string;
  titleIcon?: ProduceType;
  ingredients: string;
  size: string;
  price: string;
  icon?: ProduceType;
};

export const tortily: Tortila[] = [
  {
    id: "14",
    title: "CHICKEN CAESAR WRAP",
    ingredients: "Římský salát, kuřecí prsa, parmazán, krutony, Caesar dresink",
    size: "300",
    price: "155",
    icon: "chicken",
  },
  {
    id: "15",
    title: "CHICKEN RANCH CLUB WRAP",
    ingredients:
      "Ledový salát, kuřecí prsa, slanina, gouda, nakládané cibulky, nakládané okurky, rajčata, Ranch dresink",
    size: "320",
    price: "155",
    icon: "chicken",
  },
  {
    id: "16",
    title: "COBB WRAP",
    ingredients:
      "Ledový salát, kuřecí prsa, slanina, vejce, avokádo, rajčata, modrý sýr, Cobb dresink",
    size: "320",
    price: "155",
    icon: "chicken",
  },
  {
    id: "17",
    title: "CHICKEN SALSA WRAP",
    ingredients:
      "Ledový salát, kuřecí prsa, domácí rajčatová salsa, kukuřice, gouda",
    size: "300",
    price: "155",
    icon: "chicken",
  },
  {
    id: "18",
    title: "SPICY QUESADILLA",
    titleIcon: "pepper",
    ingredients:
      "Kuřecí prsa, jalapenos, rajčata, sušená rajčata, červená cibule, gouda",
    size: "300",
    price: "155",
    icon: "chicken",
  },
  {
    id: "19",
    title: "BURGER WRAP",
    ingredients:
      "Ledový salát, burger z mletého hovězího masa, gouda, rajčata, červená cibule, Barbeque dresink",
    size: "320",
    price: "155",
    icon: "beef",
  },
  {
    id: "20",
    title: "MEXICAN WRAP",
    titleIcon: "pepper",
    ingredients:
      "Ledový salát, Chilli con carne /mleté hovězí maso, červené fazole, drcená rajčata, oregano, chilli/ zakysaná smetana, kukuřice, gouda",
    size: "320",
    price: "155",
    icon: "beef",
  },
  {
    id: "21",
    title: "TUNA WRAP",
    ingredients:
      "Ledový salát, tuňákové kousky, vařené vejce, sušená rajčata, olivy, rajčata, červená cibule, krutony, Cobb dresink",
    size: "320",
    price: "164",
    icon: "fish",
  },
  {
    id: "22",
    title: "SMOKED SALMON WRAP",
    ingredients:
      "Mix zelených listových salátů, uzený losos, rajčata, červená cibule, okurky, krutony a jogurtový dresink s koprem",
    size: "320",
    price: "164",
    icon: "fish",
  },
  {
    id: "23",
    title: "MOZZARELLA WRAP",
    ingredients:
      "Mix zelených listů, cherry mozzarella, rajčata, sušená rajčata, bazalkové pesto",
    size: "300",
    price: "155",
    icon: "vegetarian",
  },
  {
    id: "24",
    title: "VEGETARIAN WRAP",
    ingredients:
      "ledový salát, gouda, balkánský sýr, kukuřice, olivy, rajčata, paprika, okurky, červená cibule , olivový olej",
    size: "300",
    price: "155",
    icon: "vegetarian",
  },
  {
    id: "25",
    title: "VEGAN WRAP",
    ingredients:
      "Ledový salát, Toffu, kukuřice, olivy, rajčata, paprika, okurky, červená cibule, olivový olej",
    size: "300",
    price: "155",
    icon: "vegan",
  },
  {
    id: "26",
    title: "ŠPENÁTOVÝ WRAP",
    ingredients:
      "Baby špenát, vařené vejce, slanina, rajče, gouda, parmazán, niva , bazalkové pesto",
    size: "300",
    price: "155",
  },
];
