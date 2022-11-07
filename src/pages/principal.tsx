import { useEffect, useState } from "react";
import { Title } from '../components/Title';
import { Acumulado } from "../components/Acumulado";
import { DadosConcurso } from "../components/DadosConcurso";
import { Local } from '../components/Local';
import { NumerosSorteados } from "../components/NumerosSorteados";
import { EstimativaProximoConcurso } from "../components/EstimativaProximoConcurso";
import SenaServices from "../services/sena";
import { Props } from "../types";

export default function Principal() {
  const[concurso,setConcurso] = useState({} as Props);
  
  useEffect(
    function(){
    (
      async function () {
        const numero = Math.floor(Math.random() * 2533);
        const concurso: Props = await SenaServices.get(numero);
        console.log(concurso);
        setConcurso(concurso); 
      }
    )()},
    []
  );

  return (
    <>
      <Title/>
      {concurso.acumulado && <Acumulado /> }
      <DadosConcurso numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
      <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteios={concurso.nomeMunicipioUFSorteio} />
      <NumerosSorteados listaDezenas={concurso.listaDezenas} />
      <EstimativaProximoConcurso valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso } dataProximoConcurso={concurso.dataProximoConcurso} />
    </>
  );
}
