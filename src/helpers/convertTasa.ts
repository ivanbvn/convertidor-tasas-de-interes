import { valoresTasa } from "./initialStates"

export const convertTasa = (tasa: number, tasaTypeRecibida: string, tasaTypeAConvertir: string) => {
  if (tasaTypeRecibida === "TNA") {
    return ((1 + (tasa / 100 / 12)) ** (valoresTasa[tasaTypeAConvertir] / valoresTasa["TEM"]) - 1) * 100
  }
  return ((1 + (tasa / 100)) ** (valoresTasa[tasaTypeAConvertir] / valoresTasa[tasaTypeRecibida]) - 1) * 100
}
