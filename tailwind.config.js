/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: "media",
    content: [
		"./index.html",
    ],
    theme: {
		// extend: {
		// 	colors: {
		// 		primary: {
		// 			DEFAULT: "white",
		// 			dark: "black",
		// 		},
		// 		secondary: {
		// 			DEFAULT: "green",
		// 			dark: "blue",
		// 		},
		// 		text: {
		// 			DEFAULT: "black",
		// 			dark: "white",
		// 		}
		// 	},
		// },
    },
	plugins: [
		plugin(function({ addUtilities }) {
			addUtilities({
				'.no-scrollbar::-webkit-scrollbar': {
					'display': 'none',
				},
				'no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				}    
			})
		}
	)]
}