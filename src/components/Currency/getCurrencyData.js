import React, { useState, useEffect } from 'react';

const GetCurrencyDataWithLocalStorege = () => {
    const [seconds, setSeconds] = useState(60);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 100, seconds - 1);
        } else {
            setTimerActive(false);
        }
    }, [seconds, timerActive]);

    return (
        <div>
            {seconds ? (
                <React.Fragment>
                    <button onClick={() => setTimerActive(!timerActive)}>
                        {timerActive ? 'stop' : 'start'}
                    </button>
                    <div>{seconds}</div>
                </React.Fragment>
            ) : (
                <button onClick={() => setSeconds(60)}>ещё раз</button>
            )}
        </div>
    );
};

export default GetCurrencyDataWithLocalStorege;
