import React from 'react';
import Todo from 'Todo';

const renderTodos = (todos, onToggle) => {
  if (todos.length === 0) {
    return <p className="container__message">Nothing To Do</p>
  }

  return todos.map((todo) => {
    return <Todo key={todo.id} onToggle={onToggle} {...todo} />
  });
};

const TodoList = ({ todos, onToggle }) => (
  <div>
    {renderTodos(todos, onToggle)}
  </div>
);

export default TodoList;
