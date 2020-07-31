import React from "react"

import Joke from "./components/Joke"
import jokeData from "./components/JokeData"

function App() {

  const jokeComponents=jokeData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer}    />)

  return(
  <div>
    {jokeComponents}
  </div>
)

  }
export default App