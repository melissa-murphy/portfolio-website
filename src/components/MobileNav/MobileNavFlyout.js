// import React, { useState, useEffect } from 'react';
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu } from "./MobileNavStyles.js";

export const MobileNavFlyout = ({ open }) => {
	// const [hook, setHook] = useState(hook);
	let location = useLocation();

	return (
		<StyledMenu open={open}>
			{location.pathname === "/" ? null : (
				<NavLink className="navlink" to="/">
					Home
				</NavLink>
			)}
			<NavLink className="navlink" to="/resume">
				Resume
			</NavLink>
			<NavLink className="navlink" to="/contact">
				Contact Me
			</NavLink>
		</StyledMenu>
	);
};

MobileNavFlyout.propTypes = {
	open: bool.isRequired,
};

// export default MobileNavFlyout;
