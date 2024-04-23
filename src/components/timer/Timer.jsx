import './Timer.css';
import Player from "./componnets/Player/Player.jsx";
import TimerChallenge from "./componnets/TimerChallenge/TimerChallenge.jsx";

export default function Timer() {
    return (
        <>
            <Player/>
            <div id="challenges">
                <TimerChallenge title="Easy" targetTime={1}/>
                <TimerChallenge title="Not easy" targetTime={5}/>
                <TimerChallenge title="Getting tough" targetTime={10}/>
                <TimerChallenge title="Pros only" targetTime={15}/>
            </div>
        </>
    )
}
