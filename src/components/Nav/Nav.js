import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button/Button";

const Nav = () => {
	let location = useLocation();
	console.log(location.pathname);

	return (
		<>
			<nav>
				{location.pathname == "/" ? (
					null
				) : (
					<NavLink className="navlink" to="/">
						Home
					</NavLink>
				)}
				<NavLink className="navlink" to="/resume">
					Resume
				</NavLink>
				<Button>
					<NavLink className="navlink button" to="/contact">
						Contact Me
					</NavLink>
				</Button>
			</nav>
		</>
	);
};

export default Nav;
