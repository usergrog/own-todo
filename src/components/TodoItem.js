import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as actionCreators from '../actions'

class TodoItemComp extends Component {

    handleToggle = (e) => {
        e.preventDefault()
        this.props.toggleTodo(this.props.todo)
    }

    handleRemove = (e) => {
        e.preventDefault()
        this.props.removeTodo(this.props.todo)
    }

    render() {
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


const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const TodoItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItemComp)

export default TodoItem