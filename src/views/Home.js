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
			<Skills />
			<CurrentClients />
			<CurrentProject />
			
		</>
	);
};

export default Home;
