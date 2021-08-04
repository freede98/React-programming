import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class TodoList extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        //console.log("changed",id)
        this.setState(
            prevState => {
                const todosUpdated = this.state.todos.map(todo =>{
                    if(todo.id === id){
                        todo.checked = !todo.checked
                    }
                    return todo
                }
                )
                return {
                    todos : todosUpdated
                }
            }
        )
    }

    render(){
        const todoList = this.state.todos.map(item =>
            <TodoItem key={item.id} item={item} 
            handleChange={this.handleChange}
            />
        )

        return(
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoList