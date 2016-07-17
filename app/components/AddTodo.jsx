var React = require('react');

var AddTodo = React.createClass({
  propTypes: {
    handleAddTodo: React.PropTypes.func.isRequired
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var addTodo = this.refs.todo.value;

    if(addTodo.length > 0) {
      this.refs.todo.value = '';
      this.props.handleAddTodo(addTodo);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todo" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
