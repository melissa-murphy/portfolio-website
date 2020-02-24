import React from "react";
import {
	Hero,
	CurrentClients,
	Introduction,
	CurrentProject
} from "../components";

const Home = () => {
	return (
		<>
			<Hero />
			<Introduction />
			<CurrentClients />
			<CurrentProject />
		</>
	);
};

export default Home;
