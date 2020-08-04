/* Given a stateless functional component, add state to it
state should have a property called `isLoggedIn` which is a boolean
(true if logged in, false if not)
Then, give your best shot at rendering the word "in" if the user is logged in
or "out" if the user is logged out.
 */

// State : State object is where you store property values that belongs to the component . When the state object changes the component re-renders .
import React, { Component } from "react"

export default class App extends Component {

constructor()
{
  super()
  this.state={

     isLoggedIn:false
  
  }
}

render(){
let logInStatus
if(this.state.isLoggedIn===true)
{
 logInStatus="in"
}
else{
  logInStatus="out"
}
  return(
    <div>
        <h1>Yes it's logged {logInStatus}</h1>
    </div>
  )
}


}




