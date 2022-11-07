import { HTMLAttributes } from "react";
import { LocalStyle } from "./style";

type Props = HTMLAttributes<HTMLElement> & {
  localSorteio: string,
  nomeMunicipioUFSorteios: string,
}

export function Local({localSorteio, nomeMunicipioUFSorteios}:Props) {
  return (
    <LocalStyle> 
      Sorteio realizado no {localSorteio} em {nomeMunicipioUFSorteios}
    </LocalStyle>
  )
}