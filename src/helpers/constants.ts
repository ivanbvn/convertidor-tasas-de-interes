import {
  ValoresTasaType,
  TasaTypeTypes,
  TasasInfoType,
  ValoresCapitalizacionesTypes,
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
    info: "La tasa de interés nominal anual se expresa como un porcentaje y se utiliza para calcular los intereses que se pagarán o se recibirán durante un año determinado. Se aplica sobre un préstamo, inversión o cualquier otro tipo de transacción financiera. Es importante tener en cuenta que la tasa de interés nominal anual no incluye el efecto de la capitalización de intereses, es decir, cómo los intereses se acumulan y se añaden al monto principal en periodos de tiempo más cortos, como mensualmente o trimestralmente.",
  },
  TEA: {
    name: "Tasa Efectiva Anual",
    info: "La tasa de interés efectiva anual es el porcentaje anual que refleja el impacto real de la capitalización de intereses y otros costos asociados. Se utiliza para calcular los intereses que se pagarán o se recibirán durante un año determinado en un préstamo, inversión u otra transacción financiera. A diferencia de la tasa de interés nominal anual, la tasa de interés efectiva toma en cuenta cómo los intereses se acumulan y se añaden al monto principal en periodos de tiempo más cortos, como mensualmente o trimestralmente. Es importante considerar la tasa de interés efectiva para evaluar correctamente los costos o ganancias reales de una transacción financiera.",
  },
  TES: {
    name: "Tasa Efectiva Semestral",
    info: "La tasa de interés efectiva semestral refleja el impacto real de la capitalización de intereses durante un periodo de seis meses. Considera cómo los intereses se acumulan y se añaden al monto principal cada semestre.",
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
    info: "La tasa de interés efectiva cuatrimestral refleja el impacto real de la capitalización de intereses durante un periodo de un mes. Considera cómo los intereses se acumulan y se añaden al monto principal cada mes.",
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
