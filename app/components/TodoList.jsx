import React from 'react';
import Todo from 'Todo';

const renderTodos = (todos) => {
  return todos.map((todo) => {
    return <Todo key={todo.id} {...todo} />
  });
};

const TodoList = ({ todos }) => (
  <div>
    {renderTodos(todos)}
  </div>
);

export default TodoList;
