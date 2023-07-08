import {useState, useEffect} from 'react';
import './CountdownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <div className="card">
                <span className='number'>
                    {remainingTime.days}
                    <div className="line"></div>
                </span>
                <span className='title' >days</span>
            </div>

            <div className="card">
                <span className="two-numbers number">
                    {remainingTime.hours}
                    <div className="line"></div>
                </span>
                <span className='title' >hours</span>
            </div>

            <div className="card">
                <span className="two-numbers number">
                    {remainingTime.minutes}
                    <div className="line"></div>
                </span>
                <span className='title' >minutes</span>
            </div>

            <div className="card">
                <span className="two-numbers number">
                    {remainingTime.seconds}
                    <div className="line"></div>
                </span>
                <span className='title' >seconds</span>
            </div>

        </div>
    );
}

export default CountdownTimer;