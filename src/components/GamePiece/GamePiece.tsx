import React, { useEffect, useState } from "react";
import { useGameContext, players } from "../../GameContext";
import { GamePieceContainer, GamePieceCircle } from "./styles";

interface IGamePiece {
  currentGamePiece: number;
  colIndex: number;
}

export const GamePiece = ({ currentGamePiece, colIndex }: IGamePiece) => {
  const { currentGame, setCurrentGame, currentPlayer, setCurrentPlayer } =
    useGameContext();

  let pieceColor = "white";

  if (currentGamePiece === 1) {
    pieceColor = "blue";
  } else if (currentGamePiece === 2) {
    pieceColor = "red";
  }

  const handlePlayerTurn = (col: number, gameBoard: Array<Array<number>>) => {
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
  };

  return (
    <td>
      <GamePieceContainer
        onClick={() => {
          handlePlayerTurn(colIndex, currentGame);
        }}
      >
        <GamePieceCircle pieceColor={pieceColor} />
      </GamePieceContainer>
    </td>
  );
};
