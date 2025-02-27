import React from "react";
import Square from "./sqr";
import "./board.css";

const Board = ({ board, onClick }) => {
  return (
  // <div className="board-container">
    <div className="board">
      {board.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
