import React from 'react'

class Count extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count : 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(
            prevState => {
                return{
                    count : (prevState.count*2)
                }
            }
        )
    }

    render(){
        return(
            <div>
                <img src="http://www.fillmurray.com/200/100" onMouseEnter={this.Enter} onMouseLeave={this.Leave}/>
                <br/>
                <br/>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default Count