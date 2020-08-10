import React, {useState} from "react"


function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>
                Increment!
            </button>


            <br/>
            <button onClick={decrement}>
                Decrement !
            </button>
            <br/>

            <h1>{answer}</h1>
            <button onClick={() => setAnswer("No")}>Answer</button>
        </div>
    )
}

export default App