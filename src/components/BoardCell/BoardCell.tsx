import "./BoardCell.scss";

import { useContext } from "react";

import SingleAtom from "../Atoms/SingleAtom";
import DoubleAtoms from "../Atoms/DoubleAtoms";
import TripleAtoms from "../Atoms/TripleAtoms";
import QuadrupleAtoms from "../Atoms/QuadrupleAtoms";

import { GameStateContext } from "../../App";

import { GameState } from "../../types/GameState";

import { Cell } from "../../types/Cell";

import { addAtom, popCell } from "../../utils/cellUtils";

interface BoardCellProps {
    boardState: Cell[][];
    cellData: Cell;
    setBoardState: React.Dispatch<React.SetStateAction<Cell[][]>>;
}

export default function BoardCell({ cellData, setBoardState }: BoardCellProps) {
    const gameContext = useContext(GameStateContext);

    const setGameState = gameContext?.setGameState;

    const handleClick = () => {
        console.log(`Adding to cell (${cellData.row}, ${cellData.column})`);
        if (
            cellData.numberOfAtoms !== 0 &&
            cellData.player !== gameContext?.gameState.playersTurn
        ) {
            console.log(cellData.numberOfAtoms !== 0);
            console.log(cellData.player !== gameContext?.gameState.playersTurn);
            return;
        }
        nextTurn();
        //  update the state
        setBoardState((prevBoardState) => {
            // Create a copy of the board state
            const newBoardState = prevBoardState.map((row) =>
                row.map((cell) =>
                    cell === cellData
                        ? addAtom(cell, gameContext?.gameState.playersTurn ?? 1)
                        : cell
                )
            );

            if (
                cellData.maxAtoms ===
                newBoardState[cellData.row][cellData.column].numberOfAtoms
            ) {
                newBoardState[cellData.row][cellData.column].numberOfAtoms = 0;
                console.log(
                    `Popping cell: (${cellData.row}, ${cellData.column})`
                );
                const cellsToAddTo = popCell(cellData);

                while (cellsToAddTo.length > 0) {
                    const cellCoordinates = cellsToAddTo.pop();
                    if (cellCoordinates) {
                        const cellToUpdate =
                            newBoardState[cellCoordinates.row][
                                cellCoordinates.column
                            ];
                        const updatedCell = addAtom(
                            cellToUpdate,
                            gameContext?.gameState.playersTurn ?? 1
                        );

                        if (
                            updatedCell.maxAtoms === updatedCell.numberOfAtoms
                        ) {
                            console.log(
                                `Need to pop: (${updatedCell.row}, ${updatedCell.column})`
                            );
                            updatedCell.numberOfAtoms = 0;
                            const moreCellsToPop = popCell(updatedCell);
                            moreCellsToPop.forEach((moreCell) =>
                                cellsToAddTo.push(moreCell)
                            );
                        }
                        newBoardState[cellCoordinates.row][
                            cellCoordinates.column
                        ] = updatedCell;
                    }
                }
            }

            return newBoardState;
        });
    };

    const nextTurn = () => {
        if (setGameState) {
            setGameState((prevState: GameState) => ({
                ...prevState,
                playersTurn: prevState.playersTurn === 1 ? 2 : 1,
            }));
        } else {
            console.error("setGameState is undefined");
        }
    };

    const renderAtomComponent = () => {
        switch (cellData.numberOfAtoms) {
            case 0:
                return <></>;
            case 1:
                return <SingleAtom player={cellData.player} />;
            case 2:
                return <DoubleAtoms player={cellData.player} />;
            case 3:
                return <TripleAtoms player={cellData.player} />;
            case 4:
                return <QuadrupleAtoms player={cellData.player} />;
            default:
                return <></>;
        }
    };

    return (
        <div className="board-cell" onClick={handleClick}>
            {renderAtomComponent()}
        </div>
    );
}
