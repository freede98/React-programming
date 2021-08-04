import React from "react";

//class TravelFormComponent extends React.Component {
function TravelFormComponent(props){
    /* constructor(props) {
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
    } */
  
    //render() {
      return (
        <form onSubmit={props.handleSubmit}>        
            <label>
                <input type="text" 
                name="firstName" 
                value={props.data.firstName} 
                onChange={props.handleChange} 
                placeholder="First Name"/>        
            </label>
            <br/>
            <label>
                <input type="text" 
                name="lastName" 
                value={props.data.lastName} 
                onChange={props.handleChange} 
                placeholder="Last Name"/>        
            </label>
            <br/>
            <label>
                <input type="number" 
                name="age" 
                onChange={props.handleChange} 
                placeholder="Age"/>   
            </label>
            <br/>
            <label>
                <input type="radio" 
                name="gender" 
                value="male" 
                checked={props.data.gender === "male"} 
                onChange={props.handleChange} /> 
                Male       
            </label>
            <br/>
            <label>
                <input type="radio" 
                name="gender" 
                value="female" 
                checked={props.data.gender === "female"} 
                onChange={props.handleChange} />   
                Female    
            </label>
            <br/>
            <label>
                <input type="radio" 
                name="gender" 
                value="other" 
                checked={props.data.gender === "other"} 
                onChange={props.handleChange} />   
                Other     
            </label>
            <br/>
            <br/>
            <label>
                <input type="checkbox" 
                name="isVegetarian" 
                checked={props.data.isVegetarian } 
                onChange={props.handleChange} />   
                Are you vegetarian?    
            </label>
            <br/>
            <label>
                <input type="checkbox" 
                name="isKosher" 
                checked={props.data.isKosher } 
                onChange={props.handleChange} />   
                Do you prefer kosher?    
            </label>
            <br/>
            <label>
                <input type="checkbox" 
                name="isLactoseFree" 
                checked={props.data.isLactoseFree } 
                onChange={props.handleChange} />   
                Are you lactose intolerant?    
            </label>
            <br/>
            <select 
                value={props.data.location} 
                onChange={props.handleChange}
                name="location">

                <option>---Please choose your destination---</option>
                <option value="Sahara Desert">Sahara Desert</option>
                <option value="Gobi Desert">Gobi Desert</option>
                <option value="Antarctica">Antarctica</option>
            </select>
            <br/>
            <input type="submit" value="Submit" />
            <br/>
        </form>
      );
    //}
  }

export default TravelFormComponent