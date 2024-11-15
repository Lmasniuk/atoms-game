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
    cellData: Cell;
    setBoardState: React.Dispatch<React.SetStateAction<Cell[][]>>;
}

export default function BoardCell({ cellData, setBoardState }: BoardCellProps) {
    const gameContext = useContext(GameStateContext);

    const setGameState = gameContext?.setGameState;

    const handleClick = () => {
        if (gameContext?.gameState?.winner !== undefined) {
            console.log("Game OVer");
            return;
        }
        console.log(`Adding to cell (${cellData.row}, ${cellData.column})`);
        if (
            cellData.numberOfAtoms !== 0 &&
            cellData.player !== gameContext?.gameState.playersTurn
        ) {
            console.log("Cant add atom to someone elses atoms!");
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
            // if(gameContext?.gameState.winner )
            // Check if there are no cells remaining for either play,
            // If one player has no cells, set winner to the player with remaining cells
            const totalAtoms = {
                player1: 0,
                player2: 0,
            };
            newBoardState.flat().forEach((cell) => {
                if (cell.player === 1) {
                    totalAtoms.player1 =
                        totalAtoms.player1 + cell.numberOfAtoms;
                } else if (cell.player === 2) {
                    totalAtoms.player2 =
                        totalAtoms.player2 + cell.numberOfAtoms;
                }
            });

            if (
                gameContext?.gameState &&
                gameContext?.gameState?.turnCount > 1
            ) {
                if (totalAtoms.player1 === 0) {
                    console.log("Player 1 loses");
                    setGameState &&
                        setGameState((prevGameState: GameState) => ({
                            ...prevGameState,
                            winner: 2,
                        }));
                } else if (totalAtoms.player2 === 0) {
                    console.log("Player 2 loses");
                    setGameState &&
                        setGameState((prevGameState: GameState) => ({
                            ...prevGameState,
                            winner: 1,
                        }));
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
                turnCount: prevState.turnCount + 1,
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
