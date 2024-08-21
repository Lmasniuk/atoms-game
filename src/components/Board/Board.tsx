import './Board.scss'

import {NUMBER_OF_ROWS , NUMBER_OF_COLUMNS } from '../../gameConfig/gameConfig';

import BoardCell from "../BoardCell/BoardCell";
import { useState } from 'react';
import { CellData } from "../../types/CellData";

import {createInitialCellState } from '../../utils/cellUtils';

export default function Board() {

    const initialBoardState: CellData[][] = 
    Array.from(
        { length: NUMBER_OF_COLUMNS }, 
        (_,columnIndex) => Array.from(
            { length: NUMBER_OF_ROWS }, 
            (_,rowIndex)=>createInitialCellState(rowIndex,columnIndex)
        )
    );

    const [boardState,setBoardState] = useState(initialBoardState)
    
    return (
        <div className="board">
            {
            boardState.map(
                (boardRow, rowIndex)=>(
                    <div key={rowIndex} className="board-row">
                    {
                        boardRow.map((boardCell,cellIndex)=>{
                            return <BoardCell setBoardState={setBoardState} key={cellIndex}  cellData={boardCell}/>
                        })
                    }
                    </div>
                )
            )}
        </div>
    );
}