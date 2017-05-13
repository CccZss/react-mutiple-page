import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/'


let AddTodo = (props) => {

	let input;

	function submit(e) {
		e.preventDefault()
		let val = input.value.trim();
		if(!val){
			return
		}else{
			props.dispatch(addTodo(val))
			input.value=""
		}
	};

	return (
		<div>
			<form onSubmit={submit}>
				<input ref={ node => {input=node} }/>
				<button>AddTodo</button>
			</form>
		</div>
	)
}

export default AddTodo = connect()(AddTodo)