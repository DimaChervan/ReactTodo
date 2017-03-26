import React from 'react';

const Todo = ({ id, text, completed, onToggle }) => (
  <div onClick={() => onToggle(id)}>
    <input type="checkbox" defaultChecked={completed} />
    {text}
  </div>
);

export default Todo;
