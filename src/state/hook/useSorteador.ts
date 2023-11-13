import { useListaDeParticipantes } from "./useListaDeParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecretoState } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";

export const useSorteador = () => {
  const participantes = useListaDeParticipantes();
  const setResultado = useSetRecoilState(resultadoAmigoSecretoState);

  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
};
