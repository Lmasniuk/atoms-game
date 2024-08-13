import './BoardCell.scss'
import {CellData} from "../../types/CellData";


interface BoardCellProps {
    cellData: CellData
}

export default function BoardCell({cellData}: BoardCellProps) {
    return <div className="board-cell">{cellData.numberOfAtoms}</div>;
}
