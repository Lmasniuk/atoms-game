import './Board.scss'

import {NUMBER_OF_ROWS , NUMBER_OF_COLUMNS } from '../../gameConfig/gameConfig';

import BoardCell from "../BoardCell/BoardCell";
import { useState } from 'react';
import { CellData } from "../../types/CellData";

import {createInitialCellState } from '../../utils/cellUtils';

export default function Board() {
    
    const createInitialBoardState  = (): CellData[][] =>{
        const boardState: CellData[][] = [];

        for(let columnIndex =0; columnIndex < NUMBER_OF_COLUMNS; columnIndex++){
            const column: CellData[] = [];

            for(let rowIndex =0; rowIndex < NUMBER_OF_ROWS; rowIndex++){
                const cell = createInitialCellState(rowIndex,columnIndex);
                column.push(cell);
            }
            boardState.push(column);
        }

        return boardState;
    }

    const initialBoardState: CellData[][] = createInitialBoardState()
    
    const [boardState,setBoardState] = useState(initialBoardState)

    return (
        <div className="board">
            {
            boardState.map(
                (boardRow, rowIndex)=>(
                    <div key={rowIndex} className="board-row">
                    {
                        boardRow.map((boardCell,cellIndex)=>{
                            return <BoardCell boardState={boardState} setBoardState={setBoardState} key={cellIndex}  cellData={boardCell}/>
                        })
                    }
                    </div>
                )
            )}
        </div>
    );
}