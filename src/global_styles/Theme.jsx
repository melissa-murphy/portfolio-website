import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		purple: "#563a59",
		taupe: "#a88c91",
		cream: "#d8bcb7",
		rose: "#e0a3a3",
		mauve: "#9e4c4f",
		black: "#000000",
		white: "#ffffff",
		gray: "grey"
	},
	fonts: ["tba"],
	fontSizes: {
		display: "3rem",
		large: "2rem",
		normal: "1.25rem"
	}
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
