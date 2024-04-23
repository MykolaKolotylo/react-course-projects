import {useRef, useState} from "react";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerRef = useRef(null);
    const dialogRef = useRef(null);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timerRef.current);
        dialogRef.current.showModal();
    }

    const handleStartTimer = () => {
        timerRef.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10)
        }, 10)
    }

    const handleStopTimer = () => {
        clearInterval(timerRef.current);
        dialogRef.current.showModal();
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <section className="challenge">
            <ResultModal ref={dialogRef} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
            <h2>{title}</h2>

            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running...' : 'Time inactive'}
            </p>
        </section>
    )
}
