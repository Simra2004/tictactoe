import React, { useState } from "react";
import ScoreBoard from "./scoreboard";
import TicTacToeGrid from "./grid";
import "../App.css";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
    updateScores(newBoard);
  };

  const updateScores = (newBoard) => {
    const winner = checkWinner(newBoard);
    if (winner) {
      setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
      setTimeout(resetBoard, 1000);
    } else if (newBoard.every(cell => cell !== null)) {
      setScores((prev) => ({ ...prev, draw: prev.draw + 1 }));
      setTimeout(resetBoard, 1000);
    }
  };

  const resetBoard = () => setBoard(Array(9).fill(null));

  return (
    <div className="game-board">
      <h1 className="title">tic. tac. toe.</h1>
      <ScoreBoard scores={scores} />
      <TicTacToeGrid board={board} handleClick={handleClick} />
    </div>
  );
};

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default GameBoard;
