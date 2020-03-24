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
							<a href="https://www.linkedin.com/in/melissamurphy/">
								<i class="fab fa-linkedin fa-lg"></i>
							</a>
							<a href="https://github.com/melissa-murphy">
								<i class="fab fa-github-square fa-lg"></i>
							</a>
							<a href="https://twitter.com/thinkModes">
								<i class="fab fa-twitter-square fa-lg"></i>
							</a>
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
