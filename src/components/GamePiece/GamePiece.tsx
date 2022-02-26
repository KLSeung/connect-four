import React, { useEffect, useState } from "react";
import { GamePieceContainer, GamePieceCircle } from "./styles";

interface IGamePiece {
  currentGamePiece: number;
  colIndex: number;
}

export const GamePiece = ({ currentGamePiece, colIndex }: IGamePiece) => {
  const [pieceColor, setPieceColor] = useState<string>("white");

  useEffect(() => {
    if (currentGamePiece === 1) {
      setPieceColor("blue");
    } else if (currentGamePiece === 2) {
      setPieceColor("red");
    }
  }, [currentGamePiece]);

  return (
    <td>
      <GamePieceContainer>
        <GamePieceCircle pieceColor={pieceColor} />
      </GamePieceContainer>
    </td>
  );
};
