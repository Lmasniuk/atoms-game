import './BoardCell.scss'

import {Cell} from "../../types/Cell";

import { addAtom, popCell } from '../../utils/cellUtils';
import Board from '../Board/Board';

interface BoardCellProps {
    boardState: Cell[][],
    cellData: Cell,
    setBoardState: React.Dispatch<React.SetStateAction<Cell[][]>>;
}

export default function BoardCell({cellData, setBoardState}: BoardCellProps) {
    const handleClick = () => {

        console.log(`Adding to cell (${cellData.row}, ${cellData.column})`) 
        //  update the state
        setBoardState(prevBoardState => {
            // Create a copy of the board state
            const newBoardState = prevBoardState.map(row => row.map(cell => 
                cell === cellData ? addAtom( cell) : cell
            ));


            if(cellData.maxAtoms === newBoardState[cellData.row][cellData.column].numberOfAtoms){
                newBoardState[cellData.row][cellData.column].numberOfAtoms = 0;
                console.log("Popping cell")
                const cellsToAddTo = popCell(cellData);
                cellsToAddTo.forEach( cell => {
                    const cellToUpdate = newBoardState[cell.row][cell.column]
                    const updatedCell = addAtom(cellToUpdate);
                    newBoardState[cell.row][cell.column] = updatedCell;
                });
            }
            return newBoardState;
        });
    }

    return <div className="board-cell" onClick={handleClick}>{cellData.numberOfAtoms}</div>;
}
