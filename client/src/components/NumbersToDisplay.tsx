import type { Draw } from "../types/index.ts";

type NumbersToDisplayProps = {
  draw: Draw
}

export default function NumbersToDisplay({draw}: NumbersToDisplayProps) {
  return (
    <>
      <span className="number" key={`${draw[0]}-${0}`}>{draw[0]}</span>
      <span className="number" key={`${draw[1]}-${1}`}>{draw[1]}</span>
      <span className="number" key={`${draw[2]}-${2}`}>{draw[2]}</span>
      <span className="number" key={`${draw[3]}-${3}`}>{draw[3]}</span>
      <span className="number" key={`${draw[4]}-${4}`}>{draw[4]}</span>
    </>
  );
}
