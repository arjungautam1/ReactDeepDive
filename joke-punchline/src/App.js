import React from "react"
import Joke from "./components/Joke"
function App() {
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