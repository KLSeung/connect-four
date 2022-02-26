import React, { useEffect, useState } from "react";
import { useGameContext, players } from "../../GameContext";
import { GamePieceContainer, GamePieceCircle } from "./styles";

interface IGamePiece {
  currentGamePiece: number;
  colIndex: number;
}

export const GamePiece = ({ currentGamePiece, colIndex }: IGamePiece) => {
  const [pieceColor, setPieceColor] = useState<string>("white");

  const { currentGame, setCurrentGame, currentPlayer, setCurrentPlayer } =
    useGameContext();

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

  useEffect(() => {
    if (currentGamePiece === 1) {
      setPieceColor("blue");
    } else if (currentGamePiece === 2) {
      setPieceColor("red");
    }
  }, [currentGamePiece]);

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
