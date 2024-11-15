import BoardCell from "../BoardCell/BoardCell";
import { Cell } from "../../types/Cell";

interface BoardRowProps {
    boardRow: Cell[];
    boardState: Cell[][];
    setBoardState: React.Dispatch<React.SetStateAction<Cell[][]>>;
}

export default function BoardRow({ boardRow, setBoardState }: BoardRowProps) {
    return (
        <>
            {boardRow.map((boardCell, cellIndex) => {
                return (
                    <BoardCell
                        setBoardState={setBoardState}
                        key={cellIndex}
                        cellData={boardCell}
                    />
                );
            })}
        </>
    );
}
