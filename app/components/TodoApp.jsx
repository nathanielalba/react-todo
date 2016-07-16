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
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Fuck shit up',
          completed: true
        },
        {
          id: uuid(),
          text: 'Finish these lessons',
          completed: false
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
          text: todo,
          completed: false
        }
      ]
    })
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
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
            <TodoList todos={todos} onToggle={this.handleToggle} />
            <AddTodo handleAddTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
