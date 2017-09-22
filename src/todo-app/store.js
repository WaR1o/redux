import {createStore} from 'redux';
import {todos} from './reducers/todo';

// fake data
export const fake = [
    {"id": 1, "title": "Learn JS", "done": false},
    {"id": 2, "title": "Watch TV", "done": true},
    {"id": 3, "title": "Build house", "done": true}
];

export const store = createStore(todos, fake);