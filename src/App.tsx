import { useState, createContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";

import { GameState } from "./types/GameState";

export const GameStateContext = createContext<GameState | undefined>(undefined);
function App() {
    const [gameState, setGameState] = useState<GameState>({ playersTurn: 1 });

    return (
        <>
            <h1>Atoms The Game</h1>
            <GameStateContext.Provider value={gameState}>
                <h2>Player {gameState.playersTurn}'s Turn</h2>
                <Board />
            </GameStateContext.Provider>
        </>
    );
}

export default App;
