import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
      localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        id: 23,
        text: 'test',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      const actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bar localStorage data', () => {
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage', () => {
      const todos = [{
        id: 23,
        text: 'test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    const todos = [{
      id: 1,
      text: '1',
      completed: true
    }, {
      id: 2,
      text: '2',
      completed: false
    }, {
      id: 3,
      text: '3',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      const actualTodos = TodoAPI.filterTodos(todos, true, '');

      expect(actualTodos.length).toBe(3);
    });

    it('should return non completed items if showCompleted is false', () => {
      const actualTodos = TodoAPI.filterTodos(todos, false, '');

      expect(actualTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      const actualTodos = TodoAPI.filterTodos(todos, true, '');

      expect(actualTodos[0].id).toBe(2);
    });

    it('should return all todos if search text empty', () => {
      const actualTodos = TodoAPI.filterTodos(todos, true, '');

      expect(actualTodos.length).toBe(3);
    });

    it('should find todos by search text', () => {
      const actualTodos = TodoAPI.filterTodos(todos, true, '2');

      expect(actualTodos.length).toBe(1);
    });
  });
});
