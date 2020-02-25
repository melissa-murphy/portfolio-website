import React from "react";
import { StyledSkills } from "./SkillsStyles.js";
import { Gauge } from "../atoms";
import smiley from "../../imgs/smiley.png";

const Skills = () => {
	const skills = {
		html: 90,
		css: 80,
		javascript: 70,
		react: 70,
		python: 50,
		node: 50
	};

	return (
		<>
			<StyledSkills>
				<h3>Tech Stack</h3>
				<div>
					<div className="skill">
						<Gauge actual={skills.html} goal={100} />
						<i className="fad fa-code fa-lg"></i>
					</div>
					<div className="skill">
						<Gauge actual={skills.css} goal={100} />
						<i className="fab fa-css3 fa-lg"></i>
					</div>
					<div className="skill">
						<Gauge actual={skills.react} goal={100} />
						<i className="fab fa-react fa-lg"></i>
					</div>
					<div className="skill">
						<Gauge actual={skills.javascript} goal={100} />
						<i className="fab fa-js-square fa-lg"></i>
					</div>
					<div className="skill">
						<Gauge actual={skills.python} goal={100} />
						<i className="fab fa-python fa-lg"></i>
					</div>
					<div className="skill">
						<Gauge actual={skills.node} goal={100} />
						<i className="fab fa-node-js fa-lg"></i>
					</div>
				</div>
				<div className="bonus">
					<h3>Bonus Skills</h3>
					<img src={smiley} alt="" />
				</div>
			</StyledSkills>
		</>
	);
};

export default Skills;
