import { valoresTasa, valoresCapitalizaciones } from "./constants";

export const convertTasa = (
  tasa: number,
  tasaTypeRecibida: string,
  tasaTypeAConvertir: string,
  capitalización?: string
) => {
  if (tasaTypeRecibida === "TNA") {
    if (!capitalización) throw new Error("Falta capitalización");
    const tasaRecibida_capitalizacion: string =
      valoresCapitalizaciones[capitalización].tasa;
    return (
      ((1 +
        tasa /
          100 /
          valoresCapitalizaciones[capitalización].n_capitalizaciones) **
        (valoresTasa[tasaTypeAConvertir] /
          valoresTasa[tasaRecibida_capitalizacion]) -
        1) *
      100
    );
  }
  return (
    ((1 + tasa / 100) **
      (valoresTasa[tasaTypeAConvertir] / valoresTasa[tasaTypeRecibida]) -
      1) *
    100
  );
};
