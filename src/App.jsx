import React, { useState, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Resume from "./views/Resume";
import { Footer, MobileNav } from "./components";
import { useOnClickOutside, useOnClick } from "./hooks";
// import { firebase } from "./firebase/firebaseConfig.js";

const App = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));
	useOnClick(node, () => setOpen(false));
	// const firebaseApp = firebase.apps[0];
	// console.log(JSON.stringify(firebaseApp.options, null, 2));
	return (
		<>
			<div ref={node}>
				<MobileNav open={open} setOpen={setOpen} />
			</div>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contact" component={Contact} />
				<Route path="/resume" component={Resume} />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
