import React, {useState, useEffect} from 'react'

const Timer = () => {

    const [ time,  setTime ] = useState(0)

    const [startTimer, setStartTimer] = useState(false)

    const [ timerId, setTimerId ] = useState (0)

    useEffect(() =>  {   

        let intervalId = null

        if(startTimer){
            intervalId = setInterval(() =>{
                setTime (prev => prev +1);
            }, 1000);
            setTimerId(intervalId)
        }else{
            clearInterval(timerId)
        }
        //eslint-disable-next-line
    }, [startTimer])

    const resetear = () =>{
        setTime(0)
    }

  return (
    <div>
        <div>Segundos:{time}</div>
        <button onClick={() => setStartTimer (true)}>▶</button>
        <button onClick={() => setStartTimer (false)}>⏹</button>
        <button onClick={resetear}>↩</button>
    </div>
  )
}

export default Timer