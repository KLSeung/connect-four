import { Typography, Button } from "@mui/material";
import React from "react";
import { useGameContext } from "../../GameContext";
import { PlayerTurnHeaderContainer } from "./styles";

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
    <PlayerTurnHeaderContainer>
      <Typography variant="h3" component="div" gutterBottom>
        {gameStatus.gameWinner
          ? gameStatus.gameWinner === 3
            ? `It's a Tie!`
            : `Player ${gameStatus.gameWinner} wins!`
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
    </PlayerTurnHeaderContainer>
  );
};
