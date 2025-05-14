import type { DrawSet } from "../types/index.ts"
import DrawsToDisplay from "./DrawsToDisplay"

type DrawSetTableProps = {
  draws: DrawSet[]
}

export default function DrawSetTable({ draws }: DrawSetTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Drawn Numbers</th>
        </tr>
      </thead>
      <tbody>
        {draws.map((drawSet, index) => (
          <tr key={index}>
            <td>{drawSet.date}</td>
            <td><DrawsToDisplay draws={drawSet.draws} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
