import React, { useState } from 'react';
import Infos from './components/Infos/Infos';
import TodoList from './components/TodoList/TodoList';
import uniqid from 'uniqid';
import './App.css';

const App = () => {

  const [todoList, updateTodoList] = useState(
    [
      { title: "todo 1", done: false, id: uniqid() },
      { title: "todo 2", done: true, id: uniqid() },
      { title: "todo 3", done: false, id: uniqid() }
    ]
  );

  const [filter, updateFilter] = useState('all');

  const [edition, updateEdition] = useState({ edited: false, id: null });

  const pressEnter = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      updateTodoList(
        [
          { title: event.target.value, done: false, id: uniqid() },
          ...todoList
        ]
      );
      event.target.value = '';
    }
  }

  const onChecked = (e, _id) => {
    updateTodoList(
      todoList.map((todo) => {
        if (todo.id === _id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  const deleteTask = (e, _id) => {
    e.preventDefault();
    updateTodoList(todoList.filter(todo => todo.id !== _id));
  }

  const checkAll = (e) => {
    updateTodoList(
      todoList.map((todo) => {
        todo.done = e.target.checked;
        return todo;
      })
    );
  }

  const deleteAllCompleted = () => {
    console.log('All Completed Deleted');
    updateTodoList(todoList.filter(todo => todo.done !== true));
  }

  const displayAll = () => {
    console.log('All Displayed');
    updateFilter('all');
  }

  const onlyActive = () => {
    console.log('Only Active');
    updateFilter('active');
  }

  const onlyCompleted = () => {
    console.log("Only Completed");
    updateFilter("completed");
  }

  const editTask = (e, id) => {
    updateEdition({ edited: true, id: id });
  }

  const updateTitle = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      updateTodoList(todoList.map((todo) => {
        if (todo.id === edition.id) {
          todo.title = e.target.value.trim();
        }
        return todo;
      }));
      updateEdition({ edited: false, id: null });
    }
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
        <input id="toggle-all" className="toggle-all" type="checkbox" onClick={(e) => checkAll(e)} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          todoList={todoList}
          onChecked={onChecked}
          deleteTask={deleteTask}
          edition={edition}
          editTask={editTask}
          updateTitle={updateTitle}
          filter={filter}
          updateTodoList={updateTodoList}
        />
      </section>
      <Infos
        todoList={todoList}
        deleteAllCompleted={deleteAllCompleted}
        onlyActive={onlyActive}
        onlyCompleted={onlyCompleted}
        displayAll={displayAll}
      />
    </section>
  );
}

export default App;