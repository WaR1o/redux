import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/todo';
// -3. Создать файл ./constants/todo.js в который будут добавляться константы
// -2. Создать файл ./actions/todo.js в который будут добавляться actions
// -1. Создать общий редьюсер в ./reducers/index.js с помощью combinreReducers
// 0. Создать store с помощью редьюсера
// 1. Разбить на компоненты: AddTodo, TodoList, TodoItem, TodoFilter
// 2. Реализовать возможность добавить новое todo с список
// 3. Добавить возможность завершать todo по щелчку на нём
// 4. Добавить возможность показывать все/активные/завершенные задачи с помощью клика по соответсвующим кнопкам фильтра
// 5. Добавить возможность удалять todo
// 6. (extra) Добавить возможность fetch-ить данные с сервера с помощью middleware (не забыдь добавить соответсвующий middleware при создавнии store)
// 7. (extra) Синхронизовать добавление, удаление, toggle с json-server

const ToggleTodo = ({
    items
}) => {

}

const AddTodo = ({
    addTodo
}) => {
    let node = null;
    return (
        <div className="todo__add">
                <input type="text" ref={(el) => node = el}/><button onClick={() => 
                    {
                    let title = node.value;
                    addTodo(title);
                    node.value = '';}
                    }>Add</button>
        </div>
    );
}

const ItemToDo = ({
    item
}) => (
    <li className="todos__item">{item.title}</li>
)

const ListToDo = ({
    items
}) => {
    // console.log(items);
    return (
        <ul className="todo__list">
            {items.map((item, index) => {
                return <ItemToDo item={item} key={index}/>
            })}
        </ul>
    );
}

const mapStateToProps = (state) => ({
    items: state
});

const ListTodoContainer = connect(mapStateToProps, addTodo)(ListToDo);

const AddTodoContainer = connect(null, {addTodo})(AddTodo);

export const TodoApp = () => {
    return (
        <div className="todo">
            <AddTodoContainer />
            <ListTodoContainer/>
            <div className="todo__filter">
                <span>All</span>{' '}
                <span>Active</span>{' '}
                <span>Completed</span>
            </div>
        </div>
    );
};