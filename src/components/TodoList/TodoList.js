import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = (props) => {
    let filter = props.filter;
    let filteredArray = [];

    if (filter === 'all') {
        filteredArray = props.todoList;
    } else if (filter === 'completed') {
        filteredArray = props.todoList.filter(todo => todo.done === true);
    } else if (filter === 'active') {
        filteredArray = props.todoList.filter(todo => todo.done === false);
    }

    return (
        <ul className="todo-list">
            {filteredArray.map((todo) => (
                <Todo
                    todo={todo}
                    onChecked={props.onChecked}
                    key={todo.id}
                    deleteTask={props.deleteTask}
                    doubleClickEvent={props.doubleClickEvent}
                    edition={props.edition}
                    editTask={props.editTask}
                    updateTitle={props.updateTitle}
                />
            ))}
        </ul>
    )
}

export default TodoList;