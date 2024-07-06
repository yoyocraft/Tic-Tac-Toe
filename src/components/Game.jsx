import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
      desc = `Go to move #${move}`;
    } else {
      desc = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  function handlePlay(nextSequare) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSequare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squres={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
