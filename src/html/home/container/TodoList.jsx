import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions/'
import Todo from "../components/Todo"


let TodoList = (props) => {

	return (
		<div>
			{props.todos.map(todo => {
				return <Todo key={"key-" + todo.id} {...todo} onClick={()=>props.onTodoClick(todo.id)} />
			})}
		</div>
	)
}

const getVisibleTodos = (todos, filter) => {
	switch(filter){
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed)
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick(id) {
			dispatch(toggleTodo(id))
		}
	}
}

export default TodoList = connect(
		mapStateToProps,
		mapDispatchToProps
	)(TodoList)