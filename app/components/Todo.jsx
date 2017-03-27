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

const Todo = ({ id, text, completed, onToggle, createdAt, completedAt }) => (
  <div onClick={() => onToggle(id)}>
    <p><input type="checkbox" defaultChecked={completed} /> {text}</p>
    <p>{renderDate(createdAt, completedAt)}</p>
  </div>
);

export default Todo;
