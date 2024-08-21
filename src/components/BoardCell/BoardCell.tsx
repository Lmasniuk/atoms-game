import './BoardCell.scss'
import {CellData} from "../../types/CellData";

import { addAtom } from '../../utils/cellUtils';


interface BoardCellProps {
    cellData: CellData,
    setBoardState: React.Dispatch<React.SetStateAction<CellData[][]>>;
}

export default function BoardCell({cellData, setBoardState}: BoardCellProps) {
    const handleClick = () => {
        setBoardState(prevBoardState => {
            // Create a copy of the board state
            const newBoardState = prevBoardState.map(row => row.map(cell => 
                cell === cellData ? addAtom(cell) : cell
            ));
            return newBoardState;
        });
    }

    return <div className="board-cell" onClick={handleClick}>{cellData.numberOfAtoms}</div>;
}
