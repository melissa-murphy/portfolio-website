import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<nav>
				<NavLink to="/contact">Contact Me</NavLink>
				<NavLink to="/resume">Resume</NavLink>
				<NavLink to="/">Home</NavLink>
                {/* ternary for home button here */}
			</nav>
		</>
	);
};

export default Nav;
