import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import SenaServices from "../services/sena";
import { Props } from "../types";

import { Title } from "../components/Title";
import { Acumulado } from "../components/Acumulado";
import { DadosConcurso } from "../components/DadosConcurso";
import { Local } from "../components/Local";
import { NumerosSorteados } from "../components/NumerosSorteados";
import { EstimativaProximoConcurso } from "../components/EstimativaProximoConcurso";

import ligth from "../styles/themes/ligth";
import dark from "../styles/themes/dark";
import { WrapperStyle } from "./styles";

export default function Principal() {
  const [theme, setTheme] = useState(ligth);

  const [concurso, setConcurso] = useState({} as Props);

  useEffect(function () {
    (async function () {
      const numero = Math.floor(Math.random() * 2533);
      const concurso: Props = await SenaServices.get(numero);
      console.log(concurso);
      setConcurso(concurso);
      setTheme(parseInt(concurso.listaDezenas[0]) % 2 === 0 ? ligth : dark);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <WrapperStyle>
        <Title />
        {concurso.acumulado && <Acumulado />}
        <DadosConcurso
          numero={concurso.numero}
          dataApuracao={concurso.dataApuracao}
        />
        <Local
          localSorteio={concurso.localSorteio}
          nomeMunicipioUFSorteios={concurso.nomeMunicipioUFSorteio}
        />
        <NumerosSorteados listaDezenas={concurso.listaDezenas} />
        <EstimativaProximoConcurso
          valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}
          dataProximoConcurso={concurso.dataProximoConcurso}
        />
      </WrapperStyle>
    </ThemeProvider>
  );
}
