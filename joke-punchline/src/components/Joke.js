import React from "react"
function Joke(props)
{
    console.log(props)
    return(
        <div className="joke-qus">

       

         <h1 style={{display:props.joke.question?"block": "none"}}>Question:{props.joke.question} </h1> 

        
      {/* <h1 style={{display: !props.joke.question && "none"}}> Question :{props.joke.question} </h1> */}



   

        {/* <h1 >Answer : {props.joke.answer}</h1> */}

        <h1 style={{color: !props.joke.question && "#888888"}}>Answer: {props.joke.answer}</h1>

        <hr />
        </div>
    )
}
export default Joke