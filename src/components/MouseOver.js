import React from 'react'

/* function Enter(){
    return(
    console.log("Enter"))
}
function Leave(){
    console.log("Leave")
} */

class MouseOver extends React.Component{
    Enter(){
        return(
        console.log("Enter"))
    }
    Leave(){
        console.log("Leave")
    }

    render(){
        return(
            <div>
                {/* <img src="http://www.fillmurray.com/200/100" onMouseEnter={()=>console.log("Enter")} onMouseLeave={()=>console.log("Leave")}/> */}
                <img src="http://www.fillmurray.com/200/100" onMouseEnter={this.Enter} onMouseLeave={this.Leave}/>
                <br/>
                <br/>
                <button>Click Me</button>
            </div>
        )
    }
}

export default MouseOver