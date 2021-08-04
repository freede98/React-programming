import React, { Component } from "react";
import MemePageComponent from "./MemePageComponent"

class MemePage extends Component{
    constructor(props){
        super(props)
        this.state={
            topText:"we live in society",
            bottomText:"bottom text",
            //randomImg:"https://i.imgflip.com/1bij.jpg",
            randomImg:"https://i.imgflip.com/govs4.jpg",
            allMemes: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data 
                this.setState({allMemes : memes})}
            )
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    handleSubmit(event){
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemes.length)
        const randMeme = this.state.allMemes[randNum].url
        this.setState({randomImg : randMeme})
    }

    render(){
        return(
            <MemePageComponent
            data = {this.state}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            />
        )
    }
}

export default MemePage