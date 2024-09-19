import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";

import { GameState } from "./types/GameState";

function App() {
    const [gameState, setGameState] = useState<GameState>({ playersTurn: 1 });

    return (
        <>
            <h1>Atoms The Game</h1>
            <h2>Player {gameState.playersTurn}'s Turn</h2>
            <Board gameState={gameState} setGameState={setGameState} />
        </>
    );
}

export default App;
