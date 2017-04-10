import expect from 'expect';
import  {
  setSearchText,
  addTodo,
  toggleShowCompleted,
  toggleTodo
} from 'actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'test'
    };
    const res = setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'test'
    };
    const res = addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const res = toggleShowCompleted(action);
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    const res = toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
