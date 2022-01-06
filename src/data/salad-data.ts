export type Salads = {
  id: string;
  title: string;
  extraTitle?: string;
  ingredients: string;
  smallSize: string;
  smallPrice: string;
  bigSize?: string;
  bigPrice?: string;
};

export const salads: Salads[] = [
  {
    id: "01",
    title: "Caesar Salad",
    extraTitle: "/ Kuřecí maso",
    ingredients: "Římský salát, kuřecí prsa, parmazán, krutony, Caesar dresink",
    smallSize: "200",
    smallPrice: "105",
    bigSize: "300",
    bigPrice: "135",
  },
  {
    id: "02",
    title: "Cobb Salad",
    ingredients:
      "Ledový salát, kuřecí prsa, slanina, vejce, avokádo, cherry rajčata, modrý sýr, Cobb dresink",
    smallSize: "250",
    smallPrice: "115",
    bigSize: "350",
    bigPrice: "145",
  },
  {
    id: "03",
    title: "Chicken Avocado",
    ingredients:
      "Mix zelených listů, kuřecí prsa, avokádo, cherry rajčata, červená cibule, cizrna, Medovo - Hořčičný dresink",
    smallSize: "200",
    smallPrice: "110",
    bigSize: "300",
    bigPrice: "140",
  },
  {
    id: "04",
    title: "Couscous Salad",
    ingredients:
      "Couscous, kuřecí prsa, balkánský sýr, cherry rajčata, paprika,olivy, okurka, kukuřice, červená cibule, rukola, olivový olej",
    smallSize: "300",
    smallPrice: "105",
    bigSize: "400",
    bigPrice: "135",
  },
  {
    id: "05",
    title: "Pasta Salad",
    ingredients:
      "Těstoviny, kuřecí prsa, balkánský sýr, cherry rajčata, paprika, olivy, okurka, kukuřice, červená cibule, rukola, Ranch dresink",
    smallSize: "300",
    smallPrice: "105",
    bigSize: "400",
    bigPrice: "135",
  },
  {
    id: "06",
    title: "Tuna Salad",
    ingredients:
      "Ledový salát, tuňákové kousky, vařené vejce, sušená rajčata, olivy, cherry rajčata, červená cibule, krutony, olivový olej a červený vinný ocet",
    smallSize: "250",
    smallPrice: "118",
    bigSize: "350",
    bigPrice: "148",
  },
  {
    id: "07",
    title: "Smoked Salmon",
    ingredients:
      "Mix zelených listových salátů, uzený losos, cherry rajčata, červená cibule, okurky, krutony a jogurtový dresink s koprem",
    smallSize: "200",
    smallPrice: "118",
    bigSize: "300",
    bigPrice: "148",
  },
  {
    id: "08",
    title: "špenátový salát",
    ingredients:
      "Baby ŠpenÁt, cherry rajČata, suŠená rajČata, parmazán, vejce, slanina nebo oŘechy, bazalkovÉ pesto",
    smallSize: "200",
    smallPrice: "105",
    bigSize: "300",
    bigPrice: "135",
  },
  {
    id: "09",
    title: "Cherry Caprese",
    ingredients: "Cherry rajčata, mozzarella, rukola, bazalkové pesto",
    smallSize: "200",
    smallPrice: "95",
  },
  {
    id: "10",
    title: "Goat cheese",
    extraTitle: " & BEETROOT",
    ingredients:
      "Rukola, kozí sýr, červená řepa, vlašské ořechy, sušená rajčata a Medovo - Hořčičný dresink",
    smallSize: "200",
    smallPrice: "105",
    bigSize: "300",
    bigPrice: "135",
  },
  {
    id: "11",
    title: "Mozzarella pasta",
    ingredients:
      "Těstoviny, cherry rajčata, cherry mozzarella, olivy, sušená rajčata, rukola, bazalkové pesto",
    smallSize: "250",
    smallPrice: "105",
    bigSize: "350",
    bigPrice: "135",
  },
  {
    id: "12",
    title: "Avocado",
    extraTitle: " / Sunflower seeds",
    ingredients:
      "Mix zelených listů, vejce, avokádo, cherry rajčata, červená cibule, kukuřice, slunečnicová semínka, Cobb dresink",
    smallSize: "200",
    smallPrice: "105",
    bigSize: "300",
    bigPrice: "135",
  },
  {
    id: "13",
    title: "Mediterranean",
    ingredients:
      "Ledový salát, balkánský sýr, cherry rajčata, okurky, olivy, paprika, červená cibule, olivový olej a vinný ocet",
    smallSize: "200",
    smallPrice: "100",
    bigSize: "300",
    bigPrice: "130",
  },
];
