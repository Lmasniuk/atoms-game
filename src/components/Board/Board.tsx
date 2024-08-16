import './Board.scss'

import BoardCell from "../BoardCell/BoardCell";
import { useState } from 'react';
import {CellData} from "../../types/CellData";

export default function Board() {

    const numberOfRows = 6;
    const numberOfColumns = 10;

    const isCornerCell = (row:number , column: number): boolean =>{
        if(row === 0 || row === numberOfRows-1){
            if((column === 0 )|| (column === numberOfColumns-1)){
                return true;
            }else {
                return false;
            }
        } else {
            return false;
        }
    }

    const isEdgeCell = (row:number , column: number): boolean =>{
        if(row === 0 || row === numberOfRows-1){
            if((column !== 0 )|| (column !== numberOfColumns-1)){
                return true;
            }else {
                return false;
            }
        } else if((column === 0 )|| (column === numberOfColumns-1)) {
            if((row !== 0 )|| (row !== numberOfRows-1)){
                return true;
            }else {
                return false;
            }
        } else {
            return false;
        }
    }

    const createInitialCellState = (row: number, column: number): CellData => {
        let maxAtoms = 4;
        if(isCornerCell(row, column)){
            maxAtoms = 2;
        }else if(isEdgeCell(row,column)){
            maxAtoms = 3;
        }

        return {
            player: 0,
            numberOfAtoms: 0,
            row: row,
            column: column,
            maxAtoms: maxAtoms
        }
    }

    const initialBoardState: CellData[][] = 
    Array.from(
        { length: numberOfColumns }, 
        (_,columnIndex) => Array.from(
            { length: numberOfRows }, 
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