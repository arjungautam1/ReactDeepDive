// https://scrimba.com/g/greacthooks
// Uncaught Invariant Violation: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      color: ""
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
        color: randomcolor()
      }
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //     if(prevState.count !== this.state.count) {
  //         const newColor = randomcolor()
  //         this.setState({color: newColor})
  //     }
  // }

  render() {
    return (
        <div>
          <h1 style={{color: this.state.color}}>{this.state.count}</h1>
          <button onClick={this.increment}>
            Increment!
          </button>
        </div>
    )
  }
}

export default App
