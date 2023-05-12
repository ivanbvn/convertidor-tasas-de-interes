import { ValoresTasaType, tasaTypeTypes } from "./types";

export const valoresTasa: ValoresTasaType = {
  TNA: 12,
  TEA: 12,
  TES: 6,
  TEC: 4,
  TET: 3,
  TEB: 2,
  TEM: 1
}

export const tasaTypeInitialState: tasaTypeTypes = {
  recibida: "TNA",
  a_convertir: "TEA",
};

export const tasas: Array<string> = ["TNA", "TEA", "TES", "TEC", "TET", "TEB", "TEM"];