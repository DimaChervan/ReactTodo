import expect from 'expect';
import df from 'deep-freeze-strict';
import { searchTextReducer, showCompletedReducer } from 'reducers';

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

    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      const res = showCompletedReducer(df(false), df(action));
      expect(res).toBe(true);
    });
  });
});
