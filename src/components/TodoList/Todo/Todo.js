import React from 'react';
import './Todo.css';

const Todo = (props) => {
    let classes = [];
    // check if todo done
    if (props.todo.done === true) {
        if (props.edition.edited && props.todo.id === props.edition.id) {
            classes.push('editing');
        }
        // add class completed
        classes.push('completed')
    } else if (props.edition.edited && props.todo.id === props.edition.id) {
        classes.push('editing');
    }

    return (
        <li className={classes.join(' ')}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    readOnly
                    onClick={() => props.onChecked(props.todo.id)}
                    checked={props.todo.done ? true : false}
                />
                <label onDoubleClick={() => props.editTask(props.todo.id)}>{props.todo.title}</label>
                <button className="destroy" onClick={(e) => props.deleteTask(e, props.todo.id)}></button>
            </div>
            <input className="edit" defaultValue={props.todo.title} onKeyDown={(e) => props.updateTitle(e)} />
        </li>
    )
}

export default Todo;
