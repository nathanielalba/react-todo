var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var { dispatch } = this.props;
    var myTodo = this.refs.todo.value;

    if(myTodo.length > 0) {
      this.refs.todo.value = '';
      dispatch(actions.addTodo(myTodo));
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

export default connect()(AddTodo);
