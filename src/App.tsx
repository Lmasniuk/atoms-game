import { useState, createContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";

import { GameState } from "./types/GameState";
import { GameStateContextType } from "./types/GameStateContextType";

export const GameStateContext = createContext<GameStateContextType | undefined>(
    undefined
);
function App() {
    const [gameState, setGameState] = useState<GameState>({
        playersTurn: 1,
        turnCount: 0,
        winner: undefined,
    });

    return (
        <>
            <h1>Atoms The Game</h1>
            <GameStateContext.Provider value={{ gameState, setGameState }}>
                <h2>Player {gameState.playersTurn}'s Turn</h2>
                <h3>Turn #{gameState.turnCount}</h3>
                <Board />
                {gameState.winner ? (
                    <h1>Player {gameState.winner} Wins!</h1>
                ) : null}
            </GameStateContext.Provider>
        </>
    );
}

export default App;
