import { CellData } from "../types/CellData";

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

const createInitialCellState = (row: number, column: number): CellData => {
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

const addAtom = (cellData: CellData) => {
    const updatedCellData = {
        ...cellData,
        numberOfAtoms: cellData.numberOfAtoms + 1,
    };
    return updatedCellData;
};

export { isCornerCell, isEdgeCell, createInitialCellState, addAtom };
