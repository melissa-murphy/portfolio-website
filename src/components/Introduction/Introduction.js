import React from "react";
import { StyledIntroduction } from "./IntroductionStyles.js";
import Headshot from "./headshot.js";

const Introduction = () => (
	<StyledIntroduction>
		<h4>
			I am a fullstack web developer from the SF Bay Area, and I love to build
			beautiful things.
		</h4>
		<Headshot />
		<p>
			From small business websites to larger collaborative app projects, I seek
			ways to be insightful and innovative. I am comfortable in leadership and
			support positions and lean into celebrating teamwork over individual
			successes. Are you looking to hire a dynamic and friendly web developer
			with a marketing background? Then I would be a great addition to your team!
			&nbsp; <i class="fal fa-grin-beam"></i>
		</p>

<hr />
	</StyledIntroduction>
);

export default Introduction;
