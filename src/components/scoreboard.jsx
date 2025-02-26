import React from "react";
import "../App.css";
import "./scoreboard.css"

const ScoreBoard = ({ scores }) => (
  <div className="scoreboard">
    <div className="score playerX">X: {scores.X}</div>
    <div className="score draw">Draw: {scores.draw}</div>
    <div className="score playerO">O: {scores.O}</div>
  </div>
);

export default ScoreBoard;
