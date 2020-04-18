const colors = {
	moccasin: "#FBE7B9",
	wheat: "#F1B9B4",
	lightSteelBlue: "#B794C1",
	darkSlateBlue: "#373864",
	brown: "#822B43",
	rose: "#E092D9",
	black: "#000000",
	white: "#ffffff",
	gray: "#777586",
	lightGray: "#ABA9BB"
};

export const theme = {
	color: {
		black: colors.black,
		white: colors.white,
		gray: colors.gray,
		lightGray: colors.lightGray,
		brown: colors.brown
	},
	primary: {
		light: colors.lightSteelBlue,
		dark: colors.darkSlateBlue
	},
	secondary: {
		light: colors.moccasin,
		dark: colors.wheat
	},
	accent: {
		dark: colors.brown,
		light: colors.rose
	},
	fonts: ["tba"],
	fontSizes: {
		display: "3rem",
		large: "2rem",
		normal: "1.25rem",
		small: "0.75rem"
	},
	breakpoints: {
		// using min-width
		small: "576px",
		medium: "768px",
		large: "992px",
		xl: "1200"
	}
};
