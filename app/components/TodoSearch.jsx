import React from 'react';

class TodoSearch extends React.Component {
  state = {
    searchText: '',
    showCompleted: false
  }

  handleSearch = (event) => {
    const searchText = event.target.value;
    this.setState({
      searchText
    });

    this.props.onSearch(searchText, this.state.showCompleted);
  }

  handleCompleted = (event) => {
    const showCompleted = event.target.checked
    this.setState({
      showCompleted
    });

    this.props.onSearch(this.state.searchText, showCompleted);
  }

  render () {
    return (
      <div>
        <div>
          <input
            type="search"
            value={this.state.searchText}
            onChange={this.handleSearch}
            placeholder="Search todos" />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.showCompleted}
              onChange={this.handleCompleted} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default TodoSearch;
