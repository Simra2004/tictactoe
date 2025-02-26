import React from "react";
import Cell from "./cell";
import "../App.css";

const TicTacToeGrid = ({ board, handleClick }) => (
  <div className="grid-container">
    {board.map((cell, index) => (
      <Cell key={index} value={cell} onClick={() => handleClick(index)} />
    ))}
  </div>
);

export default TicTacToeGrid;
