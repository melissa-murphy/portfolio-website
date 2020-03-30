import React from "react";
import { StyledCurrentProject } from "./CurrentProjectStyles.js";

const CurrentProject = () => (
	<StyledCurrentProject>
		<h3>There is always a side project...</h3>
		<h5>My own react-strap</h5>
		<p>
			<i className="fab fa-react" aria-label={"react"}></i>
			<i aria-label={"plus"}> + </i>
			<span role="img" aria-label={"styled components"}>
				{" "}
				💅{" "}
			</span>
			<i aria-label={"equals"}> = </i>
			<span role="img" aria-label={"party time"}>
				{" "}
				🎉{" "}
			</span>
		</p>
		<p className="text-block">
			I spend a lot of time on projects for smaller businesses and individuals,
			and these apps and sites are naturally smaller. I realized that the more
			robust UI libraries that exist are amazing, but often too much for a
			little project -- and so [need name] was born! These are base components
			with Styled Components baked in, so I can just pass props for styling.
			<small>Project in progress...</small>
		</p>
		<a
			href="https://github.com/melissa-murphy/atom_components"
			target="blank"
			rel="noreferrer"
		>
			<i className="fab fa-github fa-2x"></i>
		</a>
	</StyledCurrentProject>
);

export default CurrentProject;
