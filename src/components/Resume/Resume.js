import React from "react";
import { ResumeIntro, ResumeExpertise, ResumeExperience } from "./ResumeStyles";

const DevResume = () => {
	return (
		<>
			<ResumeIntro>
				<h4>Frontend Development</h4>
				<p>
					Accomplished full stack web developer with solid background in
					marketing and business development. Demonstrated ability to increase
					businesses’ online presence by creating creative websites and ensuring
					availability of required IT services. Instrumental in producing new
					concepts and ideas for the achievement of set targets without
					compromising quality. Excel at state-management (Context API, Hooks,
					and Redux) as well as Express API, and UI libraries like react-strap
					and react-spring. Well versed in achieving business, branding, and
					marketing objectives using development tools and best practices along
					with professional relationship building with clients, stakeholders,
					and multi-disciplinary functions.{" "}
				</p>
			</ResumeIntro>
			<ResumeExpertise>
				<h5>Areas Of Expertise</h5>
				<ul>
					<li>Project Management</li>
					<li>Full-stack Web Development</li>
					<li>JavaScript(React), Node.js</li>
					<li>Sass/Less & CSS Animations</li>
				</ul>
				<ul>
					<li>Clients' Needs Assesment</li>
					<li>Business Development</li>
					<li>Inbound & Outbound Marketing</li>
					<li>Development Tools Utilization</li>
				</ul>
				<ul>
					<li>Leadership & Training</li>
					<li>Concept Creation</li>
					<li>Graphic Design</li>
					<li>SEO & Context Writing</li>
				</ul>
			</ResumeExpertise>
			<ResumeExperience>
				<h5>Professional Experience</h5>
				<h6>
					Lambda School, San Francisco
					<br />
					Section Lead, Full-Stack Web Developer
				</h6>
				<p>
					Direct a team of over 15 team leaders (TLs), while providing support
					in communication and scheduling from external associates. Facilitate
					students and TLs to develop soft and coding skills. Deliver guidance
					to up to 150 students on full stack web development program. Improve
					student’s performance outcomes by coordinating section instructions
					and student success initiatives. Devise new coaching ideas from
					statistics based on data points and students’ feedback.
				</p>
				<ul>
					<li>
						Created various methods as best practices of tracking/supporting the
						students, saving up to five hours (weekly) of admin work.
					</li>
					<li>
						{" "}
						Successfully guided three cohorts through Full Stack Web Development
						and Computer Science programs.{" "}
					</li>
				</ul>
				<p>
					Various Clients, SF Bay Area
					<br />
					Freelance Web Developer for Small Businesses
				</p>
			</ResumeExperience>
		</>
	);
};

export default DevResume;
