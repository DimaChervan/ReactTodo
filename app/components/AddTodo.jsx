import React from 'react';

class AddTodo extends React.Component {
  state = {
      text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const text = this.state.text;

    if (text.length > 0) {
      this.setState({
        text: ''
      });
      this.props.onAddTodo(text);
    } else {

    }
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
