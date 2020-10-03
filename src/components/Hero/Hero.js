import React from "react";
import { StyledHero, StyledHeroInfo, BackgroundHero } from "./HeroStyles.js";

const Hero = () => (
	<>
		<StyledHero>
		<BackgroundHero />
		<StyledHeroInfo>
			<p>developer</p>
			<p>creative</p>
			<p>marketer</p>
			<p>team player</p>
		</StyledHeroInfo>
		</StyledHero>
		<hr />
	</>
);

export default Hero;
