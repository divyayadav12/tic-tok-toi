 import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // "X" or "O"
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (state[index] !== null || winner) return;

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";

    const result = checkWinner(copyState);
    if (result) {
      setWinner(result);
    } else if (copyState.every(cell => cell !== null)) {
      // No winner AND all cells are filled → Draw
      setWinner("draw");
    }

    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>

      {winner === "draw" ? (
        <div className="draw-banner">
          <h2>😅 Game Drawn!</h2>
          <button onClick={handleReset}>Play Again</button>
        </div>
      ) : winner ? (
        <div className="winner-banner">
          <h2>🎉 Player {winner} Wins!</h2>
          <button onClick={handleReset}>Play Again</button>
        </div>
      ) : (
        <>
          <h3>Current Turn: <span className="turn">{isXTurn ? "X" : "O"}</span></h3>
          <div className="board-grid">
            {state.map((value, index) => (
              <Square key={index} value={value} onClick={() => handleClick(index)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
