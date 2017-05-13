import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

import AddTodo from './container/AddTodo'
import TodoList from './container/TodoList'
import Fotter from './components/Fotter'
import GetData from './container/GetData'

class App extends React.Component {
  	render() {
    	return (
			<div> 
				<h2>todoList</h2>
				<AddTodo />
				<TodoList />
				<Fotter />
				<GetData>获取数据</GetData>
			</div>
		)
	}
}

export default App