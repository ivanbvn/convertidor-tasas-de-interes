import React, { useState } from "react";
import {
  convertTasa,
  resetSelect,
  tasaTypeInitialState,
  TasaTypeTypes,
} from "../helpers";

export const useTasas = () => {
  const [tasaType, setTasaType] = useState<TasaTypeTypes>(tasaTypeInitialState);
  const [tasa, setTasa] = useState<string>("");
  const [tasaConvertida, setTasaConvertida] = useState<number>(0);
  const [capitalizacion, setCapitalizacion] = useState<string>("");

  const handleTasaSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTasaType({
      ...tasaType,
      [event.target.name]: event.target.value,
    });
  };
  const handleCalculateButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setTasaConvertida(
      parseFloat(
        convertTasa(
          Number(tasa),
          tasaType.recibida,
          tasaType.a_convertir,
          capitalizacion
        ).toFixed(2)
      )
    );
  };
  const handleCleanButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTasaConvertida(0);
    setTasa("");
    setTasaType(tasaTypeInitialState);
    setCapitalizacion("");
    resetSelect();
  };
  const handleCapitalizationSelected = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCapitalizacion(event.target.value);
  };

  return {
    // Variables
    tasaType,
    tasa,
    tasaConvertida,
    capitalizacion,
    // Metodos
    setTasa,
    handleCalculateButton,
    handleCleanButton,
    handleTasaSelected,
    handleCapitalizationSelected,
  };
};
