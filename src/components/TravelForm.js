import React from "react";
import TravelFormComponent from "./TravelFormComponent"

class TravelForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          age: 0,
          gender : '',
          isVegetarian: false,
          isKosher: false,
          isLactoseFree: false,
          location: ""
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});  
    }
    handleSubmit(event) {
        let diet = "";
        diet += this.state.isVegetarian ? "Vegetarian, " : "";
        diet += this.state.isKosher ? "Kosher, " : "";
        diet += this.state.isLactoseFree ? "Lactose Free, " : "";

      alert('A name was submitted: ' + this.state.firstName + " " + this.state.lastName + "\nAge: "+ this.state.age + "\nGender: " + this.state.gender 
      + "\nLocation: "+ this.state.location + "\nDiet: " + diet
      );
      event.preventDefault();
    }
    render(){
        return(
            <TravelFormComponent
                data = {this.state}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            />
        )
    }
    /*render() {
      return (
        <form onSubmit={this.handleSubmit}>        
            <label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name"/>        
            </label>
            <br/>
            <label>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name"/>        
            </label>
            <br/>
            <label>
                <input type="number" name="age" onChange={this.handleChange} placeholder="Age"/>   
            </label>
            <br/>
            <label>
                <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} /> 
                Male       
            </label>
            <br/>
            <label>
                <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} />   
                Female    
            </label>
            <br/>
            <label>
                <input type="radio" name="gender" value="other" checked={this.state.gender === "other"} onChange={this.handleChange} />   
                Other     
            </label>
            <br/>
            <br/>
            <label>
                <input type="checkbox" name="isVegetarian" checked={this.state.isVegetarian } onChange={this.handleChange} />   
                Are you vegetarian?    
            </label>
            <br/>
            <label>
                <input type="checkbox" name="isKosher" checked={this.state.isKosher } onChange={this.handleChange} />   
                Do you prefer kosher?    
            </label>
            <br/>
            <label>
                <input type="checkbox" name="isLactoseFree" checked={this.state.isLactoseFree } onChange={this.handleChange} />   
                Are you lactose intolerant?    
            </label>
            <br/>
            <select
                value={this.state.location} 
                onChange={this.handleChange}
                name="location"
            >
                <option>---Please choose your destination</option>
                <option value="Sahara Desert">Sahara Desert</option>
                <option value="Gobi Desert">Gobi Desert</option>
                <option value="Antarctica">Antarctica</option>
            </select>
            <label>Location?</label>
            <br/>
            <input type="submit" value="Submit" />
            <br/>
        </form>
      );
    }*/
  }

export default TravelForm