import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";

export class TodoItem extends Component {

    handleToggle = (e) => {
        e.preventDefault()
        console.log('toggle')
        this.props.toggleTodo(this.props.todo)
    }

    handleRemove = (e) => {
        e.preventDefault()
        console.log('remove')
        this.props.removeTodo(this.props.todo)
    }

    render() {
        console.log('todo111', this.props.todo)
        console.log('state of finish', this.props.todo.isFinished)
        return (
            <div className='todoItemContainer'>
                <div className='todoItem'>
                    <div className='todoItemCheckBox'><input onChange={this.handleToggle} type="checkbox" checked={this.props.todo.isFinished}/></div>
                    <div className='todoItemTitle'>{this.props.todo.text}</div>
                    <div className='todoItemDelete'><button onClick={this.handleRemove}>&times;</button></div>
                </div>
            </div>
        )
    }
}

