import React from "react"

function MainContents()
{
    const date=new Date()
    const hours=date.getHours()
    let timeOfDay
    if(hours<12)
    {
        timeOfDay="Good Morning "
    }
    else if(hours>=12 &&hours<17)
    {
        timeOfDay="Good AfterNoon "
    }
    else {
        timeOfDay="Good Night "
    }
    return(

        <main className="main">
       
       <h1>{timeOfDay} Budi .</h1>

        </main>

    )
}
export default MainContents