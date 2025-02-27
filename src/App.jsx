import React, { useState } from "react";
import Board from "./components/board";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import GameBoard from  './components/gameboard';
import './App.css';
import ScoreBoard from "./components/scoreboard";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, Y: 0, draw: 0 });

  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "Y";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  return (
    <div className="app">
      <h1 className="title">tic. tac. toe.</h1>
      <ScoreBoard scores={scores} />
      <Board board={board} onClick={handleClick} />
    </div>
  );
};



export default App
