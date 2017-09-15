import {RECEIVED_TODOS} from "../actions/todoActions";
import {ADD_TODO} from "../actions/todoActions";

export const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_TODOS:
            return {todos: action.todos}
        case ADD_TODO:
            return {todos: action.todos}
        default:
            return state
    }
}

