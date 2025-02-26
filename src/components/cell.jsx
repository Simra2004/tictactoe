import React from "react";
import "../App.css";

const Cell = ({ value, onClick }) => (
  <button className="cell" onClick={onClick}>{value}</button>
);

export default Cell;
