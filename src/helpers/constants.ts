import {
  ValoresTasaType,
  TasaTypeTypes,
  TasasInfoType,
  ValoresCapitalizacionesTypes,
  questionsAndAnswersType,
} from "./types";

export const valoresTasa: ValoresTasaType = {
  TNA: 12,
  TEA: 12,
  TES: 6,
  TEC: 4,
  TET: 3,
  TEB: 2,
  TEM: 1,
};

export const tasaTypeInitialState: TasaTypeTypes = {
  recibida: "TNA",
  a_convertir: "TEA",
};

export const tasas: string[] = [
  "TNA",
  "TEA",
  "TES",
  "TEC",
  "TET",
  "TEB",
  "TEM",
];

export const tasasInfo: TasasInfoType = {
  TNA: {
    name: "Tasa Nominal Anual",
    info: "La tasa de interés nominal anual es un porcentaje utilizado para calcular los intereses en un año. Se aplica a préstamos, inversiones u otras transacciones financieras. No incluye la capitalización de intereses, que es cómo se acumulan y se añaden al monto principal en periodos más cortos, como mensual o trimestralmente.",
  },
  TEA: {
    name: "Tasa Efectiva Anual",
    info: "La tasa de interés efectiva anual refleja el impacto real de la capitalización de intereses durante un periodo de un año. Considera cómo los intereses se acumulan y se añaden al monto principal cada año.",
  },
  TES: {
    name: "Tasa Efectiva Semestral",
    info: "La tasa de interés efectiva semestral refleja el impacto real de la capitalización de intereses durante un periodo de esis meses. Considera cómo los intereses se acumulan y se añaden al monto principal cada semestre.",
  },
  TEC: {
    name: "Tasa Efectiva Cuatrimestral",
    info: "La tasa de interés efectiva cuatrimestral refleja el impacto real de la capitalización de intereses durante un periodo de cuatro meses. Considera cómo los intereses se acumulan y se añaden al monto principal cada cuatrimestre.",
  },
  TET: {
    name: "Tasa Efectiva Trimestral",
    info: "La tasa de interés efectiva trimestral refleja el impacto real de la capitalización de intereses durante un periodo de tres meses. Considera cómo los intereses se acumulan y se añaden al monto principal cada trimestre.",
  },
  TEB: {
    name: "Tasa Efectiva Bimestral",
    info: "La tasa de interés efectiva bimestral refleja el impacto real de la capitalización de intereses durante un periodo de dos meses. Considera cómo los intereses se acumulan y se añaden al monto principal cada bimestre.",
  },
  TEM: {
    name: "Tasa Efectiva Mensual",
    info: "La tasa de interés efectiva mensual refleja el impacto real de la capitalización de intereses durante un periodo de un mes. Considera cómo los intereses se acumulan y se añaden al monto principal cada mes.",
  },
};

export const capitalizaciones: string[] = [
  "Mensual",
  "Bimestral",
  "Trimestral",
  "Cuatrimestral",
  "Semestral",
  "Anual",
];

export const valoresCapitalizaciones: ValoresCapitalizacionesTypes = {
  Mensual: {
    n_capitalizaciones: 12,
    tasa: "TEM",
  },
  Bimestral: {
    n_capitalizaciones: 6,
    tasa: "TEB",
  },
  Trimestral: {
    n_capitalizaciones: 4,
    tasa: "TET",
  },
  Cuatrimestral: {
    n_capitalizaciones: 3,
    tasa: "TEC",
  },
  Semestral: {
    n_capitalizaciones: 2,
    tasa: "TES",
  },
  Anual: {
    n_capitalizaciones: 1,
    tasa: "TEA",
  },
};

export const questionsAndAnswers: questionsAndAnswersType[] = [
  {
    question: "Que es una Tasa Efectíva?",
    answer:
      "La tasa efectiva es el crecimiento real de tu dinero en el banco después de un tiempo. Por ejemplo, si tienes $100 y la tasa efectiva es del 10%, tendrás $110 al final del año. La tasa nominal es solo un número que te dicen en el banco, pero no incluye otros factores importantes, como la capitalización de los intereses.",
  },
  {
    question: "Que es una Capitalización?",
    answer:
      "Ejemplo con una capitalización mensual: Imaginá que tenes un plazo fijo de $100 que te genera un interés mensual de $5. Si capitalizamos los intereses, al siguiente mes no tendríamos $100 en el plazo fijo, sino $105. Por lo tanto, no recibiríamos $5, sino $5.25, y así sucesivamente. Entonces, la capitalización seria cada cuanto tiempo reinvertis el interés.",
  },
];
