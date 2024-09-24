import { Dispatch, SetStateAction } from "react";

import { GameState } from "./GameState";

export interface GameStateContextType {
    gameState: GameState;
    setGameState: Dispatch<SetStateAction<GameState>>;
}
