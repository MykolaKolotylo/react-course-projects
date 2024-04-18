import './TicTacToe.css';
import Player from "./components/Player.jsx";

export default function TicTacToe() {
    return (
        <main className="tic-tac-toe-container">
            <div id="game-container">
                <ol id="players">
                    <Player name="Player 1" symbol="X"/>
                    <Player name="Player 2" symbol="O"/>
                </ol>
            </div>
        </main>
    )
}
