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
                console.log(`Popping cell: (${cellData.row}, ${cellData.column})`)
                const cellsToAddTo = popCell(cellData);


                while(cellsToAddTo.length > 0){
                    const cellCoordinates = cellsToAddTo.pop();
                    if(cellCoordinates){
                        const cellToUpdate = newBoardState[cellCoordinates.row][cellCoordinates.column]
                        const updatedCell = addAtom(cellToUpdate);
                        
                        if(updatedCell.maxAtoms === updatedCell.numberOfAtoms){
                            console.log(`Need to pop: (${updatedCell.row}, ${updatedCell.column})`)
                            updatedCell.numberOfAtoms = 0;
                            const moreCellsToPop = popCell(updatedCell);
                            moreCellsToPop.forEach(moreCell => cellsToAddTo.push(moreCell));
                        }
                        newBoardState[cellCoordinates.row][cellCoordinates.column] = updatedCell;
                    }
                }
                // cellsToAddTo.forEach( cell => {
                //     const cellToUpdate = newBoardState[cell.row][cell.column]
                //     const updatedCell = addAtom(cellToUpdate);
                //     newBoardState[cell.row][cell.column] = updatedCell;
                //     if(updatedCell.maxAtoms === updatedCell.numberOfAtoms){
                //         console.log(`Need to pop: (${updatedCell.row}, ${updatedCell.column})`)
                //         cellsToAddTo.concat(popCell(updatedCell));
                //     }
                // });
            }
            return newBoardState;
        });
    }

    return <div className="board-cell" onClick={handleClick}>{cellData.numberOfAtoms}</div>;
}
