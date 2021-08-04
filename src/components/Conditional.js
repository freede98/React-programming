import React from 'react'

class Conditional extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading : true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading : false
            })
        }
        ,1500)
    }

    render(){
        return(
            <div>
                {this.state.isLoading ? 
                <h1>Loading...</h1> :
                <h1>Here is something</h1>
                }
            </div>
        )
    }
}

export default Conditional