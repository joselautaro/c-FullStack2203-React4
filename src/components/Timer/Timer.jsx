import React, { useState, useEffect } from 'react'
import './timer.scss'

const Timer = () => {

    const [time, setTime] = useState(0)

    const [startTimer, setStartTimer] = useState(false)

    const [timerId, setTimerId] = useState(0)

    useEffect(() => {

        let intervalId = null

        if (startTimer) {
            intervalId = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
            setTimerId(intervalId)
        } else {
            clearInterval(timerId)
        }
        //eslint-disable-next-line
    }, [startTimer])

    const resetear = () => {
        setTime(0)
    }

    return (
        <div className='div-container'>
            <div>Segundos:{time}</div>
            <button className="button" onClick={() => setStartTimer(true)}>▶</button>
            <button className="button" onClick={() => setStartTimer(false)}>⏹</button>
            <button className="button" onClick={resetear}>↩</button>
        </div>
    )
}

export default Timer