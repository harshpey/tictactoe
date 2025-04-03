import React, { useState } from "react";

const GameBoard = ({ onSelectPlayer, activePlayerSymbol }) => {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerBoard) => [...innerBoard]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectPlayer();
  }

 

  return (
    <div id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <button
              key={colIndex}
              onClick={() => handleSquare(rowIndex, colIndex)}
            >
              {playerSymbol}
            </button>
          ))}
        </ol>
      ))}
    </div>
  );
};

export default GameBoard;
