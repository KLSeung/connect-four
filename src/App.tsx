import React from "react";
import "./App.css";
import { ConnectFour } from "./components/ConnectFour/ConnectFour";
import { GameProvider } from "./GameContext";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <ConnectFour></ConnectFour>
      </GameProvider>
    </div>
  );
}

export default App;
