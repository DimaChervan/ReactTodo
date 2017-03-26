import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

class TodoApp extends React.Component {
  state = {
    showCompleted: false,
    searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }, {
          id: uuid(),
          text: 'Add several todos',
          completed: true
        }, {
          id: uuid(),
          text: 'Render todo id',
          completed: false
        }
      ]
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
    console.log(text);
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
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
