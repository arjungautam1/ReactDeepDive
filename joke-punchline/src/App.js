import React from "react"
import Joke from "./components/Joke"
import JokeData from "./components/JokeData"
import jokeData from "./components/JokeData"

function App() {

  jokeData.map(fjoke=>{
    return (
      <Joke question={joke.question} 
      
    )
 
  })



  /* Higher order methods  */
//   const nums=[1,2,3,4,5]
//   const doubled=nums.map(function(num)
//   {
//     return num*2
//   })
  
// console.log(doubled)


  return (
    <div className="joke">


      <Joke
        joke={{ answer: "This doesn't have question." }}
      />

      <Joke

        joke={{ question: "What is Joke ?",
         answer: "You are Joke" }}
      />

      <Joke
        joke={{ question: "How are you ?",
         answer: "I am fine " }}
      />

    </div>
  )

}
export default App