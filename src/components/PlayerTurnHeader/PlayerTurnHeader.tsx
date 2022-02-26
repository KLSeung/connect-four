import { Typography, Button } from "@mui/material";
import React from "react";
import { useGameContext } from "../../GameContext";

export const PlayerTurnHeader = () => {
  const { currentPlayer, setCurrentGame, currentGame } = useGameContext();

  const makeNewGame = () => {
    setCurrentGame([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]);
  };

  return (
    <>
      <Typography variant="h2" component="div" gutterBottom>
        Player {currentPlayer}'s Turn
      </Typography>
      <Button
        onClick={() => {
          makeNewGame();
        }}
        variant="contained"
      >
        Reset Game
      </Button>
    </>
  );
};
