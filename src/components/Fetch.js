import React from 'react'

class Fetch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading : false,
            planet : {},
            count : 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(
            prevState => {
                return{
                    count : (prevState.count+1)
                }
            }
        )
        this.setState(
            {loading : true}
        )
        fetch(`https://swapi.dev/api/planets/${this.state.count}/`)
            .then(response => response.json())
            .then(data =>
                {this.setState({loading : false, planet : data})}
            )
    }

    componentDidMount(){
        this.setState(
            {loading : true}
        )
        /*fetch(`https://swapi.dev/api/planets/${this.state.count}/`)
            .then(response => response.json())
            .then(data =>
                {this.setState({loading : false, planet : data})}
            )*/
    }

    render(){
        const name = this.state.loading ? "Loading..." : this.state.planet.name
        const terrain = this.state.loading ? "" : "Terrain: "+this.state.planet.terrain
        const gravity = this.state.loading ? "" : "Gravity: "+this.state.planet.gravity
        const population = this.state.loading ? "" : "Population: "+this.state.planet.population
        return(
            <div>
              <button onClick={this.handleClick}>Get new planet</button>
              <br/>
              <h1>{name}</h1> 
              <p>{terrain}</p>
              <p>{gravity}</p>
              <p>{population}</p>
            </div>
        )
    }
}

export default Fetch