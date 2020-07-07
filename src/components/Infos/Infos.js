import React, { useState } from 'react';
import './Infos.css';

const Infos = (props) => {

    let count = props.todoList.reduce(function (accumulator, currentValue) {
        if (currentValue.done === false) {
            return (accumulator + 1)
        } else {
            return accumulator
        }
    }, 0);

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{count}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className="selected" href="#/" onClick={() => props.displayAll()}>All</a>
                </li>
                <li>
                    <a href="#/active" onClick={() => props.onlyActive()}>Active</a>
                </li>
                <li>
                    <a href="#/completed" onClick={() => props.onlyCompleted()}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={() => props.deleteAllCompleted()}>Clear completed</button>
        </footer>
    )
}

export default Infos;