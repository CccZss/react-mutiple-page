import React from "react"
import { connect } from "react-redux"
import {setVisibility} from "../actions/"

let FilterLonk = ({active, onClick, children}) => {

	if(active){
		return <span> {children} </span>
	}else{
		return (
			<a
				href="#"
				onClick={
					e => {
						e.preventDefault();
						onClick()
					}
				}>
			{children}
			</a>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibility(ownProps.filter))
		}
	}
}

export default FilterLonk = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterLonk)
