import {ADD_TODO} from '../const/todo';

export const addTodo = (title) => ({
    type: ADD_TODO,
    title
});

// export const toggleTodo = (done) => ({
//     type: TOGGLE,
//     !done
// })