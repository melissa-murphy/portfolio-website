import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Resume from "./views/Resume";

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contact" component={Contact} />
				<Route path="/resume" component={Resume} />
			</Switch>
		</>
	);
};

export default App;
