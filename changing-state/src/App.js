import React, {Component} from "react";

class App extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    //If i want to change the count just to one
    /*e react
       handleClick(){
           this.setState({count:1})
       }
    */

    handleClick(){
        this.setState(prevState =>{
            return{
                count:prevState.count+1
            }
        })
    }



    render() {
        return (
            <div>


                <h1> {this.state.count}</h1>
                <br/>
                <button onClick={this.handleClick}>Click</button>

            </div>
        )
    }

}

export default App
