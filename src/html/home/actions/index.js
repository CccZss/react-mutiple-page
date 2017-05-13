import axios from 'axios';

function receiveDatas (id) {
    return new Promise((resolve, reject) => {
      	axios({
            method: 'GET',
	        url: '/getData',
	        baseURL: 'http://localhost:8081',
	        params: {
	        	id: id
	        },
	        headers:{
	            'Content-Type':'application/x-www-form-urlencoded'
	        },
      	}).then(function(res){
			resolve(res.data)
		}).catch(function(err){
			reject(err)
		})
    })
}

let nextTodoId = 0

export const addTodo = (text) => {
	return {
		type: "ADD_TODO",
		id: nextTodoId++,
		text
	}
}

export const setVisibility = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILITER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: "TOGGLE_TODO",
		id
	}
}

export const fetchData = (id) => {
	return function(dispatch, getState){
		receiveDatas(id).then( ( data ) => {
			dispatch({
				type: 'RECEIVE_DATAS',
				data
			})
		});
	}
}