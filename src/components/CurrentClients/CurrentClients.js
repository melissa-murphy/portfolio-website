import React from "react";
import { StyledCurrentClients } from "./CurrentClientsStyles.js";
import { Image, Row } from "../atoms";
import gli from "../../imgs/gli_home.png";
import sps from "../../imgs/sps_home.png";

const CurrentClients = () => (
	<StyledCurrentClients>
		<h3>Some current clients:</h3>
		<Image src={gli} width={20} />
		<small>GLI Norcal Landscape Construction</small>
		<Row>
			<a href="https://www.glinorcal.com/" target="blank" rel="noreferrer">
				<i className="fal fa-browser fa-2x"></i>
			</a>
			<a
				href="https://github.com/melissa-murphy/glinorcaldev"
				target="blank"
				rel="noreferrer"
			>
				<i className="fab fa-github fa-2x"></i>
			</a>
		</Row>
		<Image src={sps} width={20} />
		<small>Sacramento Philatelic Society</small>
		<Row>
			<a
				href="https://sacramentostampclub.org/"
				target="blank"
				rel="noreferrer"
			>
				<i className="fal fa-browser fa-2x"></i>
			</a>
			<a
				href="https://github.com/melissa-murphy/stampSociety"
				target="blank"
				rel="noreferrer"
			>
				<i className="fab fa-github fa-2x"></i>
			</a>
		</Row>
	</StyledCurrentClients>
);

export default CurrentClients;
