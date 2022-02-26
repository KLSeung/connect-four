import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GameRow } from "../GameRow/GameRow";
import { ConnectFourTable } from "./styles";

export const ConnectFour = () => {
  const players = {
    player1: "player1",
    player2: "player2",
  };
  const [currentGame, setCurrentGame] = useState<Array<Array<number>>>([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const [gameStatus, setGameStatus] = useState<boolean>();
  const [currentPlayer, setCurrentPlayer] = useState<string>();

  useEffect(() => {
    setCurrentPlayer(players.player1);
  }, [players.player1]);

  return (
    <Box
      sx={{
        marginTop: "8rem",
      }}
    >
      <ConnectFourTable cellPadding={0}>
        <tbody>
          {currentGame.map((currentGameRow, i) => (
            <GameRow key={i} currentGameRow={currentGameRow}></GameRow>
          ))}
        </tbody>
      </ConnectFourTable>
    </Box>
  );
};
