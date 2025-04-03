const GameBoard = ({ onSelectPlayer, gameBoard }) => {
  return (
    <div id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <button
              key={colIndex}
              onClick={() => onSelectPlayer(rowIndex, colIndex)}
              disabled={gameBoard[rowIndex][colIndex] ? true : false}
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
