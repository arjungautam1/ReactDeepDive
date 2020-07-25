import React from "react"
import ReactDOM from "react-dom"

// Using functional components 

function MyInfo(){
  return(
  <div>
    <h1>My name is Arjun Gautam.</h1>
    <p>I am a passionate full stack developer .</p>
    <h1>Expertise :</h1>
    <ul>
      <li>Spring Boot </li>
      <li>React </li>
      <li>MySql</li>
    </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />
  ,
  document.getElementById("root")
)