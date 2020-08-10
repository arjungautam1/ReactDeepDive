import React, {useEffect, useState} from "react";
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(1)
    const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
         const intervalId=  setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000)
        //Used instead of componentDidMount
        return ()=>{
             clearInterval(intervalId)
        }
        }, [])

    //Used as componentDidUpdate
    useEffect(() => {
        setColor(randomcolor())
    }, [count])
    return (
        <div>
            <h1 style={{color: color}}> {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>

    )
}

export default App