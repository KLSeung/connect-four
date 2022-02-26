import { Box } from "@mui/material";
import React from "react";
import { useGameContext } from "../../GameContext";
import { GameRow } from "../GameRow/GameRow";
import { ConnectFourTable } from "./styles";

export const ConnectFour = () => {
  const { currentGame } = useGameContext();

  return (
    <Box
      sx={{
        marginTop: "2rem",
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
