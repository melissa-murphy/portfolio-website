import React from "react";
import {
	Hero,
	CurrentClients,
	Introduction,
	CurrentProject,
	Skills
} from "../components";

const Home = () => {
	return (
		<>
			<Hero />
			<Introduction />
			<CurrentClients />
			<CurrentProject />
			<Skills />
		</>
	);
};

export default Home;
