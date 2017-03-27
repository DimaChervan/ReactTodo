import $ from 'jQuery';

module.exports = {
  setTodos (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos () {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
        todos = JSON.parse(stringTodos);
    } catch (e) {
      todos = [];
    }

    return todos || [];
  },
  filterTodos (todos, showCompleted, searchText) {
    let filteredTodos = todos.filter(todo => {
      return (!todo.completed || showCompleted) && !!~todo.text.toLowerCase().indexOf(searchText);
    });

    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
/*export const setTodos = (todos) => {
  if ($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
};

export const getTodos = () => {
  const stringTodos = localStorage.getItem('todos');
  let todos = [];

  try {
      todos = JSON.parse(stringTodos);
  } catch (e) {
    todos = [];
  }

  return todos;
};*/
