import { HTMLAttributes } from "react";
import { EstimativaProximoConcursoStyle } from "./style";

type Props = HTMLAttributes<HTMLElement> & {
  valorEstimadoProximoConcurso: number;
  dataProximoConcurso: string;
}

export function EstimativaProximoConcurso({valorEstimadoProximoConcurso, dataProximoConcurso}:Props) {
  return (
    <EstimativaProximoConcursoStyle>
      Estimativa de prêmio do próximo concurso <h2>R$ {valorEstimadoProximoConcurso} </h2> {dataProximoConcurso}
    </EstimativaProximoConcursoStyle>
  )
}