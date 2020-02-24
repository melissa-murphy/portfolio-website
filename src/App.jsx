import React, { useState, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Resume from "./views/Resume";
import { Burger, MobileNav } from "./components";
import { useOnClickOutside } from "./hooks";

const App = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));
	return (
		<>
			<div ref={node}>
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