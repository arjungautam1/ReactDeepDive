import React from "react"
function Joke(props)
{
    console.log(props)
    return(
        <div >

       

         <h1 style={{display:props.question?"block": "none"}}>Question:{props.question} </h1> 

        
      {/* <h1 style={{display: !props.joke.question && "none"}}> Question :{props.joke.question} </h1> */}



   

        {/* <h1 >Answer : {props.joke.answer}</h1> */}

        <h1 style={{color: !props.question && "#888888"}}>Answer: {props.answer}</h1>

        <hr />
        </div>
    )
}
export default Joke