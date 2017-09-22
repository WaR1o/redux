import {ADD_TODO} from '../const/todo';

export const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [...state, {
                id: state.length + 1,
                title: action.title,
                done: false
            }];
        default: return state;
    }
    
}