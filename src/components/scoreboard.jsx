import React from "react";
import "../App.css";
import "./scoreboard.css"

const ScoreBoard = ({ scores }) => (
  <div className="scoreboard">
    {scores.X!=0 && <div className="score-playerX">X: {scores.X}</div>  } 
    {scores.draw!=0 && <div className="score-draw">Draw: {scores.draw}</div>}
    {scores.Y!=0 && <div className="score-playerO">Y: {scores.Y}</div>}
  </div>
);
export default ScoreBoard;
