import type { Draw, Draws } from "../types/index.ts";
import NumbersToDisplay from "./NumbersToDisplay.tsx";

type DrawsToDisplayProps = {
  draws: Draws
}

export default function DrawsToDisplay({draws}: DrawsToDisplayProps) {
  return (
    <>
      {draws.map((draw: Draw, index: number) => (
        <div className="numbers-container" key={`${draw.join(',')}-${index}`}><NumbersToDisplay draw={draw} /></div>
      ))}
    </>
  );
}
