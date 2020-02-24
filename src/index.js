import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './global_styles/Global';
import {theme} from "./global_styles/theme";
import App from "./App.jsx";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
		<GlobalStyles />
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
