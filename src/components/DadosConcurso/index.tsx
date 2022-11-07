import { HTMLAttributes } from "react";
import { DadosConcursoStyle } from "./style";

type Props = HTMLAttributes<HTMLElement> & {
  numero: number;
  dataApuracao: string;
}

export function DadosConcurso({ numero, dataApuracao}:Props) {
  return (
    <DadosConcursoStyle>
      Concurso {numero} ({dataApuracao})
    </DadosConcursoStyle>
  );
}