
const visibilityFilter = (state="SHOW_ALL", action) => {
	switch (action.type){
		case "SET_VISIBILITY_FILITER": {
			return action.filter
		}
		default: {
			return state
		}
	}
}

export default visibilityFilter