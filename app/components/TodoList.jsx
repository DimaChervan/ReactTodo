import React from 'react';
import Todo from 'Todo';

const renderTodos = (todos, onToggle) => {
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
