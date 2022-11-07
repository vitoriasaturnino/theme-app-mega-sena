import { HTMLAttributes } from "react";
import { DEFAULT_MAX_VERSION } from "tls";
import { NumerosSorteadosStyle } from "./style";

type Props = HTMLAttributes<HTMLElement> & {
  listaDezenas: string [];
}

export function NumerosSorteados({listaDezenas}:Props) {
  return (
    <NumerosSorteadosStyle>
      {listaDezenas?.map(dezena => (
        <div className="size-x circle"> {dezena} </div>
      ))}
    </NumerosSorteadosStyle>
  )
}