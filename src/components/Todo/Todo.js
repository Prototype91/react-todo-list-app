import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <li className={props.todo.done ? "completed" : "" }>
            <div className="view">
                <input className="toggle" type="checkbox" readOnly onClick={(e) => props.onChecked(e, props.todo.id)} />
                <label>{props.todo.title}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" readOnly />
        </li>
    )
}

export default Todo;
