import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions/'

let GetData = ({dispatch, children, len}) => {


	function handle(e) {
		dispatch(fetchData(len))
	};

	return (
		<button onClick={handle}>{children}</button>
	)
}

const getDataLength = (state) => {
	return {
		len: state.todos.length
	}
}

export default GetData = connect(getDataLength)(GetData)