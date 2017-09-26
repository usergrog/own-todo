import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";
import {connect} from 'react-redux'
import TodoItem from "../components/TodoItem";
import * as actionCreators from '../actions'
import {bindActionCreators} from "redux";


class FirebaseTodoListComp extends Component {
    componentWillMount() {
        console.log('userId', this.props.userId)
        if ((this.props.todos === undefined
                || this.props.todos.length === 0)
            && this.props.userId !== '') {
            // this.props.fetchTodos()
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.refs.newTodoTitle.value) {
            this.props.addTodo({text: this.refs.newTodoTitle.value, isFinished: false})
            this.refs.todosForm.reset()
        } else {
            this.props.showError('Please input title for todo')
        }
    }

    allowDrop = (event) => {
        event.preventDefault()
    }

    drop = (event, todoTarget) => {
        event.preventDefault()
        this.props.changePriority(todoTarget, this.daggedTodo)
    }

    dragStart = (event, todoSource) => {
        this.daggedTodo = todoSource
    }

    render() {
        return (
            <div>
                <form ref='todosForm' className='todosForm' onSubmit={this.handleSubmit}>
                    <div id='addTodoLine'>
                        <input id='todoTitle' type="text" ref='newTodoTitle'/>
                        <input id='addTodoButton' type="submit" value='ADD'/>
                    </div>
                    <div className='todosBox'>
                        {this.props.todos && this.props.todos.map(todo =>
                            <div className='todoItem' key={todo.id}
                                 onDrop={(event) => this.drop(event, todo)} onDragOver={this.allowDrop}
                                 draggable="true" onDragStart={(event) => this.dragStart(event, todo)}>
                                <i className="material-icons">swap_vert</i>
                                <TodoItem todo={todo}/>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos,
        selectedGroup: state.todoReducer.selectedGroup
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const FirebaseTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirebaseTodoListComp)

export default FirebaseTodoList