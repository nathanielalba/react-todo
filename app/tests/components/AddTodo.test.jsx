var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should add an item to the todo list', () => {
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    todo.refs.todo.value = 'Check mail';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Check mail');
  });

  it('should not call onAddTodo prop when invalid input', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todoText);
  });
});
