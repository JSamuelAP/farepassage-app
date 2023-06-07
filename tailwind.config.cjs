const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "480px",
			...defaultTheme.screens,
		},
		fontWeight: {
			regular: "400",
			bold: "700",
		},
		extend: {
			colors: {
				primary: {
					50: "#FEF8E4",
					100: "#FDECBB",
					200: "#FCE091",
					300: "#FBD468",
					400: "#FACA50",
					500: "#F8C147",
					600: "#F7B442",
					700: "#F4A33D",
					800: "#F2943A",
					900: "#EF7931",
				},
			},
		},
	},
	plugins: [],
};
