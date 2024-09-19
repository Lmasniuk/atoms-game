import "./Board.scss";

import { NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from "../../gameConfig/gameConfig";

import { useState, useContext } from "react";
import { Cell } from "../../types/Cell";

import { createInitialCellState } from "../../utils/cellUtils";
import BoardRow from "../BoardRow/BoardRow";

import { GameStateContext } from "../../App";

import { GameState } from "../../types/GameState";
export default function Board() {
    const gameContext = useContext(GameStateContext);

    const { gameState, setGameState } = gameContext;
    const createInitialBoardState = (): Cell[][] => {
        const boardState: Cell[][] = [];

        for (let rowIndex = 0; rowIndex < NUMBER_OF_ROWS; rowIndex++) {
            const row: Cell[] = [];

            for (
                let columnIndex = 0;
                columnIndex < NUMBER_OF_COLUMNS;
                columnIndex++
            ) {
                const cell = createInitialCellState(rowIndex, columnIndex);
                row.push(cell);
            }
            boardState.push(row);
        }
        return boardState;
    };

    const initialBoardState: Cell[][] = createInitialBoardState();

    const [boardState, setBoardState] = useState(initialBoardState);

    const nextTurn = () => {
        setGameState((prevState: GameState) => ({
            ...prevState,
            playersTurn: prevState.playersTurn === 1 ? 2 : 1,
        }));
    };

    return (
        <>
            <h1> Playa: {gameState.playersTurn}</h1>
            <button onClick={nextTurn}>Click me</button>
            <div className="board">
                {boardState.map((boardRow, rowIndex) => {
                    return (
                        <BoardRow
                            boardRow={boardRow}
                            boardState={boardState}
                            setBoardState={setBoardState}
                            key={rowIndex}
                        />
                    );
                })}
            </div>
        </>
    );
}
