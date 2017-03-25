import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    const text = 'text';
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    const $el = $(ReactDOM.findDOMNode(todoSearch));

    TestUtils.Simulate.change($el.find('input[type=search]')[0], { target: { value: text } });

    expect(spy).toHaveBeenCalledWith(text, false);
  });

  it('should call onSearch with prope checked value', () => {
    const checked = true;
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    const $el = $(ReactDOM.findDOMNode(todoSearch));

    TestUtils.Simulate.change($el.find('input[type=checkbox]')[0], { target: { checked: checked } });

    expect(spy).toHaveBeenCalledWith('', checked);
  });
});
