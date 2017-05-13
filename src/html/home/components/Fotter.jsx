import React from 'react'
import FilterLink from "../container/FilterLink"

const Footer = () => (
	<p>
		show:{" "}
		<FilterLink filter="SHOW_ALL">All</FilterLink>{", "}
		<FilterLink filter="SHOW_ACTIVE">Action</FilterLink>{", "}
		<FilterLink filter="SHOW_COMPLETED">Complected</FilterLink>
	</p>
)

export default Footer;