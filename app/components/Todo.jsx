import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

const renderDate = (createdAt, completedAt) => {
  let message = 'Created ';
  let timestamp = createdAt;

  if (completedAt) {
    message = 'Completed ';
    timestamp = completedAt;
  }

  return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
};

const getCls = (completed) => {
  return 'todo' + (completed ? ' todo-completed' : '');
};

export const Todo = ({ id, text, completed, createdAt, completedAt, dispatch }) => (
  <div className={getCls(completed)} onClick={() => dispatch(actions.toggleTodo(id))}>
    <div>
      <input type="checkbox" defaultChecked={completed} />
    </div>
    <div>
      <p>{text}</p>
      <p className="todo__subtext">{renderDate(createdAt, completedAt)}</p>
    </div>
  </div>
);

export default connect()(Todo);
