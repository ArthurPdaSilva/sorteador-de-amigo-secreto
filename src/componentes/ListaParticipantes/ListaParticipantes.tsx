import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

const ListaParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();
  return (
    <ul>
      {participantes.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
