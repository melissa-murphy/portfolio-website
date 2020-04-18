import React from "react";
// import { Image } from "../components/atoms";
import resume from "../imgs/Resume-Melissa-Murphy.pdf";

const Resume = () => {
	return (
		<>
			<div className="resume">
				<img src={resume} height="800" width="300"></img>
			</div>
		</>
	);
};

export default Resume;
