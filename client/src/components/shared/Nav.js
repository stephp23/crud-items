import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
	return (
		<div>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/items">Items</NavLink>
				<NavLink to="/create-item">Create Item</NavLink>
			</nav>
		</div>
	);
};

export default Nav;
