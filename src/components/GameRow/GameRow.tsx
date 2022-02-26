import React from "react";
import { GamePiece } from "../GamePiece/GamePiece";

interface IGameRow {
  currentGameRow: Array<number>;
}

export const GameRow = ({ currentGameRow }: IGameRow) => {
  return (
    <tr>
      {currentGameRow.map((currentGamePiece, i) => (
        <GamePiece
          key={i}
          currentGamePiece={currentGamePiece}
          index={i}
        ></GamePiece>
      ))}
    </tr>
  );
};
