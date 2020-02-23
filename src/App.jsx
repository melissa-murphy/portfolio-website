import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Resume from "./views/Resume";
import { Burger, MobileNav } from "./components";

const App = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div>
				<Burger open={open} setOpen={setOpen} />
				<MobileNav open={open} setOpen={setOpen} />
			</div>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contact" component={Contact} />
				<Route path="/resume" component={Resume} />
			</Switch>
		</>
	);
};

export default App;
