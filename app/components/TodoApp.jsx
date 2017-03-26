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
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }, {
          id: uuid(),
          text: 'Add several todos'
        }, {
          id: uuid(),
          text: 'Render todo id'
        }
      ]
  }

  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text
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

  render () {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
