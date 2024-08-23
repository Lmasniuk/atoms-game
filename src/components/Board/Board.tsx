import './Board.scss'

import {NUMBER_OF_ROWS , NUMBER_OF_COLUMNS } from '../../gameConfig/gameConfig';

import { useState } from 'react';
import { Cell } from "../../types/Cell";

import {createInitialCellState } from '../../utils/cellUtils';
import BoardRow from '../BoardRow/BoardRow';

export default function Board() {
    
    const createInitialBoardState  = (): Cell[][] =>{
        const boardState: Cell[][] = [];

        for(let columnIndex =0; columnIndex < NUMBER_OF_COLUMNS; columnIndex++){
            const column: Cell[] = [];

            for(let rowIndex =0; rowIndex < NUMBER_OF_ROWS; rowIndex++){
                const cell = createInitialCellState(rowIndex,columnIndex);
                column.push(cell);
            }
            boardState.push(column);
        }

        return boardState;
    }

    const initialBoardState: Cell[][] = createInitialBoardState()
    
    const [boardState,setBoardState] = useState(initialBoardState)

    return (
        <div className="board">
            {
            boardState.map(
                (boardRow, rowIndex)=>(
                    <BoardRow  boardRow={boardRow}  boardState={boardState} setBoardState={setBoardState} key={rowIndex}/>
                )
            )}
        </div>
    );
}