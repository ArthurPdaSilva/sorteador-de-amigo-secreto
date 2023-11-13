import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
  key: "listaParticipantesState",
  default: [],
});

export const resultadoAmigoSecretoState = atom<Map<string, string>>({
  key: "resultadoAmigoSecretoState",
  default: new Map<string, string>(),
});

export const erroState = atom<string>({
  key: "erroState",
  default: "",
});
