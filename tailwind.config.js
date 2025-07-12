/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Важно для темной темы
	content: [
	  "./index.html",
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		// Добавьте свои пути
	],
	theme: {
	  container: {
		 center: true,
		 padding: "2rem",
		 screens: {
			"2xl": "1400px",
		 },
	  },
	  extend: {
		 colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
			  DEFAULT: "hsl(var(--primary))",
			  foreground: "hsl(var(--primary-foreground))",
			},
			// ... остальные цвета из документации shadcn
		 },
		 borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		 },
		 keyframes: {
			"accordion-down": {
			  from: { height: 0 },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: 0 },
			},
		 },
		 animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		 },
	  },
	},
 }
