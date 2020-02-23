import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Nav = () => {
	return (
		<>
			<nav>
				<Button>
					<NavLink className="navlink button" to="/contact">
						Contact Me
					</NavLink>
				</Button>
				<NavLink className="navlink" to="/resume">
					Resume
				</NavLink>
				<NavLink className="navlink" to="/">
					Home
				</NavLink>
				{/* ternary for home button here */}
			</nav>
		</>
	);
};

export default Nav;
