import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Theme from "./global_styles/Theme";
import styled from "styled-components";
import "./index.scss";
import App from "./App.jsx";

ReactDOM.render(
	<BrowserRouter>
		<Theme>
			<App />
		</Theme>
	</BrowserRouter>,
	document.getElementById("root")
);
