import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
} from "react";

interface IGameContext {
  currentGame: Array<Array<number>>;
  gameStatus: boolean;
  currentPlayer: number;
  setCurrentGame: React.Dispatch<React.SetStateAction<number[][]>>;
  setGameStatus: React.Dispatch<SetStateAction<boolean>>;
  setCurrentPlayer: React.Dispatch<SetStateAction<number>>;
}

export const players = {
  player1: 1,
  player2: 2,
};

export const GameContext = createContext<IGameContext>({} as IGameContext);

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({
  children,
}: {
  children: React.PropsWithChildren<unknown>;
}) => {
  const [currentGame, setCurrentGame] = useState<Array<Array<number>>>([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const [gameStatus, setGameStatus] = useState<boolean>(true);
  const [currentPlayer, setCurrentPlayer] = useState<number>(players.player1);

  return (
    <GameContext.Provider
      value={{
        currentGame,
        setCurrentGame,
        gameStatus,
        setGameStatus,
        currentPlayer,
        setCurrentPlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
