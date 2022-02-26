import { Typography, Button } from "@mui/material";
import React from "react";
import { useGameContext } from "../../GameContext";

export const PlayerTurnHeader = () => {
  const { currentPlayer, setCurrentGame, gameStatus, setGameStatus } =
    useGameContext();

  const makeNewGame = () => {
    setCurrentGame([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]);
    setGameStatus({
      isGameOver: false,
      gameWinner: null,
    });
  };

  return (
    <>
      <Typography variant="h3" component="div" gutterBottom>
        {gameStatus.gameWinner
          ? `Player ${gameStatus.gameWinner} wins!`
          : `Player ${currentPlayer}'s Turn`}
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
