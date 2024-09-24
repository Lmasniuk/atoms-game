import { useState, createContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";

import { GameState } from "./types/GameState";
import { GameStateContextType } from "./types/GameStateContextType";

export const GameStateContext = createContext<GameStateContextType | undefined>(
    undefined
);
function App() {
    const [gameState, setGameState] = useState<GameState>({ playersTurn: 1 });

    return (
        <>
            <h1>Atoms The Game</h1>
            <GameStateContext.Provider value={{ gameState, setGameState }}>
                <h2>Player {gameState.playersTurn}'s Turn</h2>
                <Board />
            </GameStateContext.Provider>
        </>
    );
}

export default App;
