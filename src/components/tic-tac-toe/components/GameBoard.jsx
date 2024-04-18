import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({activePlayer, onSelectSquare}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIdx, colIdx) => {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
            newGameBoard[rowIdx][colIdx] = activePlayer;
            return newGameBoard
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIdx) => (
                <li key={rowIdx}>{
                    <ol>
                        {row.map((col, colIdx) => <li key={colIdx}>
                            <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>{col}</button>
                        </li>)}
                    </ol>
                }</li>
            ))}
        </ol>
    )
}
