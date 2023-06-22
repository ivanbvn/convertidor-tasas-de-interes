export interface ValoresTasaType {
  [key: string]: number;
}

export interface TasaTypeTypes {
  recibida: string;
  a_convertir: string;
}

export interface TasasInfoType {
  [key: string]: {
    name: string;
    info: string;
  };
}

export interface ValoresCapitalizacionesTypes {
  [key: string]: {
    n_capitalizaciones: number;
    tasa: string;
  };
}

export interface questionsAndAnswersType {
  question: string;
  answer: string;
}
