import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledFooter } from "./FooterStyles.js";

const Footer = () => {
	let location = useLocation();

	return (
		<>
			<StyledFooter>
				<div>
					<h2>Melissa Murphy</h2>
					<div>
						{location.pathname === "/" ? null : <NavLink to="/">Home</NavLink>}
						<NavLink to="/resume">Resume</NavLink>
						<NavLink to="/contact">Contact Me</NavLink>
						<div>
							<i class="fab fa-linkedin fa-lg"></i>
							<i class="fab fa-twitter-square fa-lg"></i>
						</div>
					</div>
				</div>
				<div className="legal">
					<p>Melissa Murphy, All Rights Reserved</p>
				</div>
			</StyledFooter>
		</>
	);
};

export default Footer;
