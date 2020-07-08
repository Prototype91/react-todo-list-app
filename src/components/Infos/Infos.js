import React from 'react';
import './Infos.css';

const Infos = (props) => {

    let filter = props.filter;

    let count = props.todoList.reduce((accumulator, currentValue) => {
        if (currentValue.done === false) {
            return (accumulator + 1);
        } else {
            return accumulator;
        }
    }, 0);

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{count}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className={filter === 'all' ? 'selected' : ""} href="#/" onClick={() => props.displayAll()}>All</a>
                </li>
                <li>
                    <a className={filter === 'active' ? 'selected' : ""} href="#/active" onClick={() => props.onlyActive()}>Active</a>
                </li>
                <li>
                    <a className={filter === 'completed' ? 'selected' : ""} href="#/completed" onClick={() => props.onlyCompleted()}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={() => props.deleteAllCompleted()}>Clear completed</button>
        </footer>
    )
}

export default Infos;