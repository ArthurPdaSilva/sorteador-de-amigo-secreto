import { realizarSorteio } from "./realizarSorteio";

describe("Dado um sorteio de amigo secreto", () => {
  test("Cada participante não sorteie o próprio nome", () => {
    // TODO
    const participantes = ["A", "B", "C", "D", "E"];
    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
