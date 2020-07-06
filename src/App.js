import React, { useState } from 'react';
import Infos from './components/Infos/Infos';
import TodoList from './components/TodoList/TodoList';
import uniqid from 'uniqid';
import './App.css';

const App = () => {

  const [todoList, updateTodoList] = useState([{ title: "todo 1", done: false, id: uniqid() }, { title: "todo 2", done: true, id: uniqid() }, { title: "todo 3", done: false, id: uniqid() }]);

  const pressEnter = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      updateTodoList([{ title: event.target.value, done: false, id: uniqid() }, ...todoList]);
      console.log(todoList);
    }
  }

  const onChecked = (e, _id) => {
    console.log(_id)
    e.preventDefault();
    updateTodoList(
      todoList.map((todo) => {
        if (todo.id === _id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  const deleteTodo = () => {
    console.log("deleted");
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todo list</h1>
        <input
          id='input-add'
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyPress={(event) => pressEnter(event)}
          autoFocus
        />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList todoList={todoList} onChecked={onChecked} />
      </section>
      <Infos />
    </section>
  );
}

export default App;