import './TicTacToe.css';
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";

const PLAYER_1_SYMBOL = "X";
const PLAYER_2_SYMBOL = "O";

const deriveActivePlayer = (gameTurns) => {
    let player = PLAYER_1_SYMBOL;

    if (gameTurns.length > 0 && gameTurns[0].player === PLAYER_1_SYMBOL) {
        player = PLAYER_2_SYMBOL;
    }

    return player;
}

export default function TicTacToe() {
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    const handleActivePlayer = (rowIdx, colIdx) => {
        setGameTurns(prevTurns => [{
            square: {row: rowIdx, col: colIdx},
            player: deriveActivePlayer(gameTurns),
        }, ...prevTurns]);
    }
    return (
        <main className="tic-tac-toe-container">
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="Player 1" symbol={PLAYER_1_SYMBOL} isActive={activePlayer === PLAYER_1_SYMBOL}/>
                    <Player name="Player 2" symbol={PLAYER_2_SYMBOL} isActive={activePlayer === PLAYER_2_SYMBOL}/>
                </ol>
                <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns}/>
            </div>

            <Log turns={gameTurns}/>
        </main>
    )
}
