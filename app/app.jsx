import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'TodoApp';
import * as actions from 'actions';
import { configure } from 'configureStore';

const store = configure();
store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('test'));
store.dispatch(actions.setSearchText('search'));
store.dispatch(actions.toggleShowCompleted());

import 'style!css!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

import 'style!css!sass!applicationStyles';

ReactDOM.render(
  <TodoApp />,
  document.querySelector('#app')
);
