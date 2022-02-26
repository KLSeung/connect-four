import React from "react";
import "./App.css";
import { ConnectFour } from "./components/ConnectFour/ConnectFour";
import { PlayerTurnHeader } from "./components/PlayerTurnHeader/PlayerTurnHeader";
import { GameProvider } from "./GameContext";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <PlayerTurnHeader />
        <ConnectFour />
      </div>
    </GameProvider>
  );
}

export default App;
