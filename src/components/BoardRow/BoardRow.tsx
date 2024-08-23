import BoardCell from "../BoardCell/BoardCell";
import { Cell } from "../../types/Cell";


interface BoardRowProps {
    boardRow: Cell[],
    boardState: Cell[][],
    setBoardState: React.Dispatch<React.SetStateAction<Cell[][]>>;
}

export default function BoardRow({ boardRow, boardState, setBoardState } :  BoardRowProps) {
    return (
        <div className="board-row">
            {boardRow.map((boardCell, cellIndex) => {
                return (
                    <BoardCell
                        boardState={boardState}
                        setBoardState={setBoardState}
                        key={cellIndex}
                        cellData={boardCell}
                    />
                );
            })}
        </div>
    );
}
