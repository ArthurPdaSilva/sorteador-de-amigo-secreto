import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

jest.mock("../../state/hook/useListaDeParticipantes", () => {
  return { useListaDeParticipantes: jest.fn() };
});

const mockNavigate = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => {
  return { useNavigate: () => mockNavigate };
});

jest.mock("../../state/hook/useSorteador", () => {
  return { useSorteador: () => mockSorteio };
});

describe("Onde não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("A brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).toBeDisabled();
  });
});

describe("Onde existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([
      "Ana",
      "Bia",
      "Carol",
    ]);
  });

  test("A brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
  });

  test("A brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
    fireEvent.click(botao);
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockSorteio).toHaveBeenCalled();
  });
});
