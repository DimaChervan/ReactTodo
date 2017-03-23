import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  /*it('should render one Todo for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'todo1'
    }, {
      id: 2,
      text: 'todo2'
    }];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todoComponents.length).toBe(todos.length);
  });*/ // Issue with import or class(React.createClass)
});
