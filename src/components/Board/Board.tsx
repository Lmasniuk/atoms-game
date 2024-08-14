import './Board.scss'

import BoardCell from "../BoardCell/BoardCell";
import { useState } from 'react';
import {CellData} from "../../types/CellData";

export default function Board() {


    const initialCellState: CellData = {
        color: "",
        numberOfAtoms: 0
    }
    const initialBoardState: CellData[][] = Array.from({ length: 10 }, () => Array(6).fill(initialCellState));

    const [boardState,setBoardState] = useState(initialBoardState)
    return (
        <div className="board">
            {
            boardState.map(
                (boardRow, rowIndex)=>(
                    <div key={rowIndex} className="board-row">
                        {
                            boardRow.map((boardCell,cellIndex)=>{
                                return <BoardCell key={cellIndex}  cellData={boardCell}/>
                            })
                    }


                    </div>

                )
            )}
        </div>
    );
}
