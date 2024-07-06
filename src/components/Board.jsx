import Square from "./Square";
import { calculateWinner } from "../utils/winner";

export default function Board({ squres, xIsNext, onPlay }) {
  const handleClick = (idx) => {
    if (squres[idx] || calculateWinner(squres)) {
      return;
    }
    const nextSequare = squres.slice();
    if (xIsNext) {
      nextSequare[idx] = "X";
    } else {
      nextSequare[idx] = "O";
    }
    onPlay(nextSequare);
  };

  const winner = calculateWinner(squres);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squres[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squres[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squres[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squres[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squres[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squres[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squres[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squres[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squres[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
