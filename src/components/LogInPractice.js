import React from 'react'

class LogInPractice extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(
            prevState => {
                return{
                    isLoggedIn : (!prevState.isLoggedIn)
                }
            }
        )
    }

    render(){
        /*let wordDisplay
        let wordButton
        if (this.state.isLoggedIn){
            wordDisplay = "in"
            wordButton = "LOG OUT"
        }
        else {
            wordDisplay = "out"
            wordButton = "LOG IN"
        }*/
        let wordDisplay = this.state.isLoggedIn ? "in" : "out"
        let wordButton = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        return(
            <div>
                <h3>You are currently logged {wordDisplay}</h3>
                <button onClick={this.handleClick}>{wordButton}</button>
            </div>
        )
    }
}

export default LogInPractice