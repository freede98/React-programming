import React from 'react'

class LoggedIn extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
    }

    render(){
        let wordDisplay
        if (this.state.isLoggedIn)
            wordDisplay = "in"
        else 
            wordDisplay = "out"
        return(
            <div>
                {/* <h3 style={{display: this.state.isLoggedIn ? "block" : "none"}}>You are currently logged in</h3>
                <h3 style={{display: this.state.isLoggedIn ? "none": "block" }}>You are currently logged out</h3> */}
                <h3>You are currently logged {wordDisplay}</h3>
            </div>
        )
    }
}

export default LoggedIn