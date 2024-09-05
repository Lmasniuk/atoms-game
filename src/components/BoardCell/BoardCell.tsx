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

        //Add an atom to the cell
        //  update the state
        setBoardState(prevBoardState => {
            // Create a copy of the board state
            const newBoardState = prevBoardState.map(row => row.map(cell => 
                cell === cellData ? addAtom( cell) : cell
            ));
            if(cellData.maxAtoms === newBoardState[cellData.row][cellData.column].numberOfAtoms){
                console.log("Popping cell")
                
            }
            return newBoardState;
        });


        
    }

    return <div className="board-cell" onClick={handleClick}>{cellData.numberOfAtoms}</div>;
}
