import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call on onAddTodo prop with valid data', () => {
    const text = 'text';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    TestUtils.Simulate.change($el.find('input')[0], { target: { value: text } });
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(text);
  });

  it('should not call on onAddTodo prop with invalid data', () => {
    const text = '';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    TestUtils.Simulate.change($el.find('input')[0], { target: { value: text } });
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
