import React from 'react';


let Todo = ({completed, text, onClick}) => {
	let styleObj = {
		textDecoration: 'line-through'
	}
	return (
		<li 
			onClick={onClick}
			style={completed?styleObj:null}>{text}
		</li>
	)
}

export default Todo