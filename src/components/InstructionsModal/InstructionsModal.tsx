import Modal from "react-modal";
import "./InstructionsModal.scss";

export default function InstructionsModal({
    modalIsOpen,
    closeModal,
}: {
    modalIsOpen: boolean;
    closeModal: () => void;
}) {
    return (
        <Modal
            className="instructions-modal"
            isOpen={modalIsOpen}
            contentLabel="Example Modal"
            overlayClassName="instructions-modal__overlay"
        >
            <h1>Gameplay</h1>
            <p>
                Each player in turn places an atom in a cell on the board. They
                can either place it in an empty cell, or any cell with their own
                colour atoms in it. If the placed atom causes the cell to be
                overloaded, the cell will explode with the atoms moving out into
                all orthogonally adjacent cells, turning any existing atoms in
                those cells into the player's colour. Chain reactions can occur
                after the initial explosion, which can cause sweeping changes
                across the board.{" "}
            </p>
            <p>
                The maximum number of atoms a cell can hold before becoming
                overloaded is:
            </p>
            <ul>
                <li>Corners: 1</li>
                <li>Sides: 2</li>
                <li>Others: 3</li>
            </ul>
            <p>Once a player's last atom has been wiped</p>
            <h2>Source Code</h2>
            <p>
                The implementation of this project can be found here:{" "}
                <a href="https://github.com/Lmasniuk/atoms-game">Github</a>
            </p>
            <h2>Inspiration</h2>
            <p>
                This project is inspired by{" "}
                <a href="https://atoms.xiven.com"></a>Thomas Pike's
                implementation of the Atoms game, which is a re-implementation
                of Tom Kuhn's "Atoms".
            </p>

            <button className="close-button" onClick={closeModal}>
                X
            </button>
        </Modal>
    );
}
