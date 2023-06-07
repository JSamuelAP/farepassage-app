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
		extend: {
			colors: {
				primary: "#FACA50",
			},
		},
	},
	plugins: [],
};
