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
		<p>
			sesame snaps tiramisu liquorice carrot cake icing. I love candy tootsie
			roll jelly beans jujubes liquorice lollipop. Gummi bears tiramisu icing
			ice cream chupa chups lollipop oat cake I love jujubes.
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
