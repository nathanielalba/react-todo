export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  };
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo
  };
};

// toggleTodo(id) TOGGLE_TODO
export var toggleTodo = (todoId) => {
  return {
    type: 'TOGGLE_TODO',
    id: todoId
  };
};
