import {RECEIVED_TODOS} from "../actions/todoActions.jsx";
import {ADD_TODO} from "../actions/todoActions.jsx";

export const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_TODOS:
            console.log('in reducer', action.todos)
            return {todos: action.todos}
        case ADD_TODO:
            console.log('in reducer', action.todos)
            return {todos: action.todos}
        default:
            return state
    }
}

