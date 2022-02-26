import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
} from "react";

export const players = {
  player1: 1,
  player2: 2,
};

export type GameBoard = Array<Array<number>>;

interface IGameStatus {
  isGameOver: boolean;
  gameWinner: number | null;
}

interface IGameContext {
  currentGame: GameBoard;
  gameStatus: IGameStatus;
  currentPlayer: number;
  setCurrentGame: React.Dispatch<React.SetStateAction<GameBoard>>;
  setGameStatus: React.Dispatch<SetStateAction<IGameStatus>>;
  setCurrentPlayer: React.Dispatch<SetStateAction<number>>;
}

export const GameContext = createContext<IGameContext>({} as IGameContext);

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({
  children,
}: {
  children: React.PropsWithChildren<unknown>;
}) => {
  const [currentGame, setCurrentGame] = useState<GameBoard>([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const [gameStatus, setGameStatus] = useState<IGameStatus>({
    isGameOver: false,
    gameWinner: null,
  });
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
