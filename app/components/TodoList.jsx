import React from 'react';
import { connect } from 'react-redux';
import Todo from 'Todo';

const renderTodos = (todos) => {
  if (todos.length === 0) {
    return <p className="container__message">Nothing To Do</p>
  }

  return todos.map((todo) => {
    return <Todo key={todo.id} {...todo} />
  });
};

export const TodoList = ({ todos }) => (
  <div>
    {renderTodos(todos)}
  </div>
);

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
