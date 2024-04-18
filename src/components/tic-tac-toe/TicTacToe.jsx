import './TicTacToe.css';
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

const PLAYER_1_SYMBOL = "X";
const PLAYER_2_SYMBOL = "O";

export default function TicTacToe() {
    const [activePlayer, setActivePlayer] = useState(PLAYER_1_SYMBOL);

    const handleActivePlayer = () => {
        setActivePlayer(curActivePlayer => curActivePlayer === PLAYER_1_SYMBOL ? PLAYER_2_SYMBOL : PLAYER_1_SYMBOL);
    }
    return (
        <main className="tic-tac-toe-container">
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="Player 1" symbol={PLAYER_1_SYMBOL} isActive={activePlayer === PLAYER_1_SYMBOL}/>
                    <Player name="Player 2" symbol={PLAYER_2_SYMBOL} isActive={activePlayer === PLAYER_2_SYMBOL}/>
                </ol>
                <GameBoard onSelectSquare={handleActivePlayer} activePlayer={activePlayer} />
            </div>
        </main>
    )
}
