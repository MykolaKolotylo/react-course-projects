import './TicTacToe.css';
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./utils/winning-combination.js";
import GameOver from "./components/GameOver.jsx";

const PLAYER_1_SYMBOL = "X";
const PLAYER_2_SYMBOL = "O";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
    let player = PLAYER_1_SYMBOL;

    if (gameTurns.length > 0 && gameTurns[0].player === PLAYER_1_SYMBOL) {
        player = PLAYER_2_SYMBOL;
    }

    return player;
}

export default function TicTacToe() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState({[PLAYER_1_SYMBOL]: 'Player 1', [PLAYER_2_SYMBOL]: 'Player 2'});
    const activePlayer = deriveActivePlayer(gameTurns);
    let gameBoard = [...initialGameBoard.map(initialArr => [...initialArr])];
    let winner;

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    for (const comb of WINNING_COMBINATIONS) {
        let firstSymbol = gameBoard[comb[0].row][comb[0].column];
        let secondSymbol = gameBoard[comb[1].row][comb[1].column];
        let thirdSymbol = gameBoard[comb[2].row][comb[2].column];

        if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
            winner = players[firstSymbol];
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    const handleActivePlayer = (rowIdx, colIdx) => {
        setGameTurns(prevTurns => [{
            square: {row: rowIdx, col: colIdx},
            player: deriveActivePlayer(gameTurns),
        }, ...prevTurns]);
    }

    const handleRestart = () => {
        setGameTurns([]);
    }

    const handlePlayers = (symbol, playerName) => {
        setPlayers((currPlayers) => {
            return {
                ...currPlayers,
                [symbol]: playerName,
            }
        })
    }

    return (
        <main className="tic-tac-toe-container">
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="Player 1" symbol={PLAYER_1_SYMBOL} isActive={activePlayer === PLAYER_1_SYMBOL}
                            onPlayersChange={handlePlayers}/>
                    <Player name="Player 2" symbol={PLAYER_2_SYMBOL} isActive={activePlayer === PLAYER_2_SYMBOL}
                            onPlayersChange={handlePlayers}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onHandleRestart={handleRestart}/>}
                <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard}/>
            </div>

            <Log turns={gameTurns}/>
        </main>
    )
}
