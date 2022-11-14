import 'styled-components';

// arquivo para definição dos tipos do TS
declare module 'styled-components' {
  export interface DefaultTheme {
    // formato de um thema criado
    title: string;

    colors: {
      background: string,
      text: string,
      bold: string,
      backgroundCirculo: string,
      colorDezena: string,
      colorEstimativa: string,
    }
  }
}