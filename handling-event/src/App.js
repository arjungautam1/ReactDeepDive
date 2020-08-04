import React from "react"

function Change()
{
    console.log("I just clicked on the click me button .")

}

export default function App(){
    return (
        <div>

            <img alt="Not loaded"  onMouseOver={() => console.log("You just scrolloed")}
                src="https://www.fillmurray.com//500/600"/>
            <br/>



            <br />
            <button onClick={Change}>Click me </button>


        </div>
    )
}
