import { connect } from "react-redux";
import React from "react";
import { toggleTodo } from "../../duckStore/todoReducer";
import Todo from "./Todo";

const Todos = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: []
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
