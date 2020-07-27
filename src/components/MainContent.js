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

    // React Inline styles
    const styles={
        color:"Green",
        backgroundColor:"cyan",
        fontSize:"50px"
            
    }

    return(

        <main className="main">
       
       <h1 style={styles}>{timeOfDay} Budi .</h1>
        
        </main>

    )
}
export default MainContents