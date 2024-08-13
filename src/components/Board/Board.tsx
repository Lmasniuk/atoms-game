import './Board.scss'

import BoardCell from "../BoardCell/BoardCell";
import { useState } from 'react';
import {CellData} from "../../types/CellData";

export default function Board() {


    const initialCellState: CellData = {
        color: "",
        numberOfAtoms: 0
    }
    // const initialBoardState: CellData[][] = Array.from({ length: 6 }, () => Array(10).fill(initialCellState));
    const initialBoardState: CellData[] = Array.from({ length: 10 }, () => initialCellState);

    const [boardState,setBoardState] = useState(initialBoardState)
    return (
        <div className="board">
            {
            boardState.map(
                (boardCell)=>
                    {
                    return <BoardCell cellData={boardCell}/>
                }
            )}
        </div>
    );
}
