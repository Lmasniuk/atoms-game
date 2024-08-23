import { Cell } from "../types/Cell";
import { CellCoordinates } from "../types/CellCoordinates";

import { NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from "../gameConfig/gameConfig";

const isCornerCell = (row: number, column: number): boolean => {
    if (row === 0 || row === NUMBER_OF_ROWS - 1) {
        if (column === 0 || column === NUMBER_OF_COLUMNS - 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const isEdgeCell = (row: number, column: number): boolean => {
    if (row === 0 || row === NUMBER_OF_ROWS - 1) {
        if (column !== 0 || column !== NUMBER_OF_COLUMNS - 1) {
            return true;
        } else {
            return false;
        }
    } else if (column === 0 || column === NUMBER_OF_COLUMNS - 1) {
        if (row !== 0 || row !== NUMBER_OF_ROWS - 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const createInitialCellState = (row: number, column: number): Cell => {
    let maxAtoms = 4;
    if (isCornerCell(row, column)) {
        maxAtoms = 2;
    } else if (isEdgeCell(row, column)) {
        maxAtoms = 3;
    }

    return {
        player: 0,
        numberOfAtoms: 0,
        row: row,
        column: column,
        maxAtoms: maxAtoms,
    };
};

const addAtom = (cell: Cell) => {
    const updatedCellData: Cell = {
        ...cell,
        numberOfAtoms: cell.numberOfAtoms + 1,
    };

    console.log("Added atom to cell: ", updatedCellData);
    return updatedCellData;
};

const popCell = (cellCoords: CellCoordinates) => {
    if (cellCoords.row - 1 >= 0) {
        const cellToAddToCoordinates: CellCoordinates = {
            row: cellCoords.row - 1,
            column: cellCoords.column,
        };
        // addAtom(boardState, cellToAddToCoordinates);
    }
    if (cellCoords.row + 1 < NUMBER_OF_ROWS - 1) {
        const cellToAddToCoordinates: CellCoordinates = {
            row: cellCoords.row + 1,
            column: cellCoords.column,
        };
        // addAtom(boardState, cellToAddToCoordinates);
    }
    if (cellCoords.column - 1 >= 0) {
        const cellToAddToCoordinates: CellCoordinates = {
            row: cellCoords.row,
            column: cellCoords.column - 1,
        };
        // addAtom(boardState, cellToAddToCoordinates);
    }
    if (cellCoords.column + 1 < NUMBER_OF_COLUMNS - 1) {
        const cellToAddToCoordinates: CellCoordinates = {
            row: cellCoords.row,
            column: cellCoords.column + 1,
        };
        // addAtom(boardState, cellToAddToCoordinates);
    }
};
export { isCornerCell, isEdgeCell, createInitialCellState, addAtom, popCell };
