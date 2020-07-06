import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';


const TodoList = (props) => {
    return (
        <ul className="todo-list">
            {props.todoList.map((todo) => (
            <Todo todo={todo} onChecked={props.onChecked} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList;