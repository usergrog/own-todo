import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";

export class TodoItem extends Component {

    handleToggle = (e) => {
        e.preventDefault()
        console.log('toggle')
        this.props.toggleTodo(this.props.todo)
    }

    render() {
        console.log('todo111', this.props.todo)
        console.log('state of finish', this.props.todo.isFinished)
        return (

            <li>
                <input onChange={this.handleToggle} type="checkbox" checked={this.props.todo.isFinished}/>
                <span>{this.props.todo.text}</span>
            </li>
        )
    }
}

