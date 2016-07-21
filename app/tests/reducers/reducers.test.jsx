var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('reducers', () => {
  it('should exist', () => {
    expect(reducers).toExist();
  });

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Hello'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Shit'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].todo).toEqual(action.todo);
    });

    it('should toggle a todo', () => {
      var todos = [{
        id: 1,
        text: 'Hello there',
        completed: false,
        createdAt: 'now',
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };


      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
    });
  });
});
