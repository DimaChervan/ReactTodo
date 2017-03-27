import React from 'react';
import moment from 'moment';

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

const Todo = ({ id, text, completed, onToggle, createdAt, completedAt }) => (
  <div className={getCls(completed)} onClick={() => onToggle(id)}>
    <div>
      <input type="checkbox" defaultChecked={completed} />
    </div>
    <div>
      <p>{text}</p>
      <p className="todo__subtext">{renderDate(createdAt, completedAt)}</p>
    </div>
  </div>
);

export default Todo;
