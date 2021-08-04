import React from 'react'

class TodoItem extends React.Component{
    render(){
        const compstyle={
            fontStyle : "italic",
            textDecoration : "line-through"
        }

        return(
            <div>
                <input 
                    type="checkbox" 
                    checked={this.props.item.checked} 
                    onChange={(event)=> this.props.handleChange(this.props.item.id)}
                />
                <h3 style = {this.props.item.checked ? compstyle : null}>Name: {this.props.item.name}</h3>
                <hr/>
            </div>
        )
    }
}

export default TodoItem