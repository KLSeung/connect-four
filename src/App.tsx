import React from "react";
import "./App.css";
import { ConnectFour } from "./components/ConnectFour/ConnectFour";
import { PlayerTurnHeader } from "./components/PlayerTurnHeader/PlayerTurnHeader";
import { GameProvider } from "./GameContext";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <PlayerTurnHeader />
        <ConnectFour />
      </GameProvider>
    </div>
  );
}

export default App;
