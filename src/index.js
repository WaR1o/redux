import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './todo-app/store';
import {Provider} from 'react-redux';

// Counter 
// import {Counter, store} from './counter-app/counter';

// const render = () => {
//     ReactDOM.render(<Counter store={store}/>, document.getElementById('root'));
// };

// render();
// store.subscribe(render);

// Todo
import {TodoApp} from './todo-app/todo-app';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,  document.getElementById('root'));