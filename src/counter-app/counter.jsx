import React from 'react';
import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = {
    type: INCREMENT
};

const decrement = {
    type: DECREMENT
}

const counter = (state = 0, action) => {
    switch (action.type){
        case DECREMENT: return --state;
        case INCREMENT: return ++state;
        default: return state;
    }
    
};

export const store = createStore(counter);
// store - the app data source
// reducers - pure functions
// actions - plan objects {type: string}

// 1. Создайте константы, которые будут использоваться в actions и reducers
// 2. Создайте actions - объект с одним обязательным полем type
// 3. Создайте reducer - чистая функция принимет на вход state, action и возвращает новый state
// 4. Создайте store с помощью createStore, используя reducer
// 5. Создайте компонент Counter, который получает store, через props, и затем dispatch-ит нужные действия при нажатии на кнопки

export const Counter = ({
    store
}) => (
    <div className="counter">
        <h1 className="counter__title">
            {store.getState()}
        </h1>
        <div className="counter__controls">
            <button onClick={() => store.dispatch(increment)}>
                +
            </button>
            <button onClick={() => store.dispatch(decrement)}>
                -
            </button>
        </div>
    </div>
);