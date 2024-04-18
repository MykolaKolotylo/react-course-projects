import {useState} from 'react';

export default function Player({name, symbol, isActive, onPlayersChange}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const clickHandler = () => {
        setIsEditing((editing) => !editing );

        if (isEditing) {
            onPlayersChange(symbol, playerName);
        }
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? 'active': ''}>
            <span className="player">
                {isEditing
                    ? <input type="text" value={playerName} onChange={handleChange}/>
                    : <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
        </span>
            <button onClick={clickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
