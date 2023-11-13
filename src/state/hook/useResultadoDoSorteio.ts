import { useRecoilValue } from "recoil";
import { resultadoAmigoSecretoState } from "../atom";

export const useResultadoDoSorteio = () => {
  return useRecoilValue(resultadoAmigoSecretoState);
};
