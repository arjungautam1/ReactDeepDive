import React, {Component} from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: "Arjun",
      age: 20
    }

  }

  render() {
    return (

      <div>
        <h1>My name is{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>

    )
  }

}

export default App
