var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Fuck shit up'
        },
        {
          id: uuid(),
          text: 'Finish these lessons'
        }
      ]
    };
  },
  handleAddTodo: function(todo) {
    // This was my original solution without spread. spread is much cleaner
    // this.setState({
    //   todos: this.state.todos.concat([{id: this.state.todos.length + 1, text: todo}])
    // });
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todo
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={todos} />
            <AddTodo handleAddTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
