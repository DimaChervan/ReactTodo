import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {
  state = {
    showCompleted: false,
    searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Add several todos'
        }, {
          id: 4,
          text: 'Render todo id'
        }

      ]
  }

  handleAddTodo = (text) => {
    /*this.setState({
      todos: [text, ...this.state.todos]
    });*/
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
