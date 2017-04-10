import expect from 'expect';
import df from 'deep-freeze-strict';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test'
      };
      const res = searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      const res = showCompletedReducer(df(false), df(action));
      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'test'
      };
      const res = todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      const todos = [{
        id: '123',
        text: 'text',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      const action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      const res = todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(null);
    });
  });
});
