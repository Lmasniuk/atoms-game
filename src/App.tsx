import { useState, createContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";

import { GameState } from "./types/GameState";
import { GameStateContextType } from "./types/GameStateContextType";
import InstructionsModal from "./components/InstructionsModal/InstructionsModal";

export const GameStateContext = createContext<GameStateContextType | undefined>(
    undefined
);
function App() {
    const [gameState, setGameState] = useState<GameState>({
        playersTurn: 1,
        turnCount: 0,
        winner: undefined,
    });

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <h1>Atoms</h1>
            <GameStateContext.Provider value={{ gameState, setGameState }}>
                <h2>
                    {gameState.winner
                        ? `Player ${gameState.winner} Wins!!!`
                        : `Player ${gameState.playersTurn}'s Turn`}
                </h2>
                <h3>Turn #{gameState.turnCount}</h3>
                <Board />
            </GameStateContext.Provider>
            <button onClick={openModal}>Instructions</button>
            <InstructionsModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </>
    );
}

export default App;
