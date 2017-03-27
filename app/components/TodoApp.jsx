import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {
  state = {
    showCompleted: false,
    searchText: '',
      todos: TodoAPI.getTodos()
  }

  componentDidUpdate () {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false
        }
      ]
    });
  }

  handleSearch = (searchText, showCompleted) => {
    this.setState({
      searchText: searchText.toLowerCase(),
      showCompleted
    });
  }

  handleToggle = (id) => {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render () {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
