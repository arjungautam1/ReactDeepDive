import React ,{useState,useEffect} from "react"
import randomcolor from "randomcolor"

function App()
{
    const [counter,setCounter]=useState(0)
    const [color,setColor]=useState("")
    function incrementer()
    {
        setCounter(prevState => prevState+1)
    }
    //Used instead of componentDidUpdate
    useEffect(()=>{
        setColor(randomcolor())
    },[counter])
    return(
        <div>
            <h1 style={{color:color}} >{counter} </h1>

            <button onClick={incrementer}> Increment</button>
        </div>

    )
}
export default App
