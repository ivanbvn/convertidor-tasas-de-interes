import React, { useState } from "react"
import { convertTasa, tasaTypeInitialState, tasaTypeTypes } from "../helpers";

export const useForm = () => {
  const [tasaType, setTasaType] = useState<tasaTypeTypes>(tasaTypeInitialState);
  const [tasa, setTasa] = useState<string>("");
  const [tasaConvertida, setTasaConvertida] = useState<number>(0);

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
          tasaType.a_convertir
        ).toFixed(2)
      )
    );
  };
  const handleCleanButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTasaConvertida(0);
    setTasa("");
    setTasaType(tasaTypeInitialState);
  };

  return {
    // Variables
    tasaType,
    tasa,
    tasaConvertida,
    // Metodos
    setTasa,
    handleCalculateButton,
    handleCleanButton,
    handleTasaSelected
  }
}