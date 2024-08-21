import './BoardCell.scss'

import {CellData} from "../../types/CellData";

import { addAtom, popCell } from '../../utils/cellUtils';

interface BoardCellProps {
    boardState: CellData[][],
    cellData: CellData,
    setBoardState: React.Dispatch<React.SetStateAction<CellData[][]>>;
}

export default function BoardCell({boardState, cellData, setBoardState}: BoardCellProps) {
    const handleClick = () => {


        //Add an atom to the cell
        //  update the state
        setBoardState(prevBoardState => {
            // Create a copy of the board state
            const newBoardState = prevBoardState.map(row => row.map(cell => 
                cell === cellData ? addAtom( cell) : cell
            ));
            return newBoardState;
        });

        //Check if the cell is full
        //   if it is full, pop the cell
        if(cellData.numberOfAtoms === cellData.maxAtoms){
            console.log("Popping cell")
            
        }



        
    }

    return <div className="board-cell" onClick={handleClick}>{cellData.numberOfAtoms}</div>;
}
