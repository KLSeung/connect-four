import React from "react";
import { useGameContext, players, GameBoard } from "../../GameContext";
import { GamePieceContainer, GamePieceCircle } from "./styles";

interface IGamePiece {
  currentGamePiece: number;
  colIndex: number;
}

export const GamePiece = ({ currentGamePiece, colIndex }: IGamePiece) => {
  const {
    currentGame,
    setCurrentGame,
    currentPlayer,
    setCurrentPlayer,
    setGameStatus,
    gameStatus,
  } = useGameContext();

  let pieceColor = "white";

  if (currentGamePiece === 1) {
    pieceColor = "blue";
  } else if (currentGamePiece === 2) {
    pieceColor = "red";
  }

  const checkLine = (
    cellA: number,
    cellB: number,
    cellC: number,
    cellD: number
  ) => {
    return cellA !== 0 && cellA === cellB && cellB === cellC && cellC === cellD
      ? true
      : false;
  };

  const checkGameOver = (gameBoard: GameBoard) => {
    // check column
    for (let row = 0; row < gameBoard.length; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          checkLine(
            gameBoard[row][col],
            gameBoard[row][col + 1],
            gameBoard[row][col + 2],
            gameBoard[row][col + 3]
          )
        ) {
          return gameBoard[row][col];
        }
      }
    }

    // check row
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < gameBoard[row].length; col++) {
        if (
          checkLine(
            gameBoard[row][col],
            gameBoard[row + 1][col],
            gameBoard[row + 2][col],
            gameBoard[row + 3][col]
          )
        ) {
          return gameBoard[row][col];
        }
      }
    }

    // check diagonal right
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          checkLine(
            gameBoard[row][col],
            gameBoard[row + 1][col + 1],
            gameBoard[row + 2][col + 2],
            gameBoard[row + 3][col + 3]
          )
        ) {
          return gameBoard[row][col];
        }
      }
    }

    // check diagonal left
    for (let row = 0; row < 3; row++) {
      for (let col = gameBoard[row].length - 1; col >= 3; col--) {
        if (
          checkLine(
            gameBoard[row][col],
            gameBoard[row + 1][col - 1],
            gameBoard[row + 2][col - 2],
            gameBoard[row + 3][col - 3]
          )
        ) {
          return gameBoard[row][col];
        }
      }
    }
  };

  const handlePlayerTurn = (col: number, gameBoard: GameBoard) => {
    const newGameBoard = gameBoard;
    for (let row = currentGame.length - 1; row >= 0; row--) {
      if (!gameBoard[row][col]) {
        newGameBoard[row][col] = currentPlayer;
        if (currentPlayer === players.player1)
          setCurrentPlayer(players.player2);
        else setCurrentPlayer(players.player1);
        break;
      }
    }
    setCurrentGame(newGameBoard);
    const winner = checkGameOver(gameBoard);

    if (winner) {
      if (winner === 1) {
        setGameStatus({
          isGameOver: true,
          gameWinner: players.player1,
        });
      } else {
        setGameStatus({
          isGameOver: true,
          gameWinner: players.player2,
        });
      }
    }
  };

  return (
    <td>
      <GamePieceContainer
        onClick={() => {
          if (!gameStatus.isGameOver) {
            handlePlayerTurn(colIndex, currentGame);
          }
        }}
      >
        <GamePieceCircle pieceColor={pieceColor} />
      </GamePieceContainer>
    </td>
  );
};
