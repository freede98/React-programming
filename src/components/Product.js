import React from 'react'

/*function Product(props){
    console.log(props)
    return(
        <div>
            <h3>Name: {props.product.name}</h3>
            <p>Price: {props.product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
            <hr/>
        </div>
    )
}*/

class Product extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h3>Name: {this.props.product.name}</h3>
                <p>Price: {this.props.product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
                <hr/>
            </div>
        )
    }
}

export default Product