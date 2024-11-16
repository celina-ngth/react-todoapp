/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		colors: {
			primary: '#464646',
			secondary: '#ffffff',
			'primary-light': '#f1f2f4',
			'secondary-light': '#d9d9d9',
			neutral: '#dddfe5',
			success: '#94c749',
			'success-light': '#effbda',
			info: '#579dff',
			'info-light': '#eaf2ff',
			warning: '#fba53d',
			'warning-light': '#fff4e5',
			error: '#f87463',
			'error-light': '#ffedec',
		},
		fontFamily: {
			serif: ['Merriweather', 'serif'],
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.5rem',
			xl: '1.875rem',
			'2xl': '2.25rem',
			'3xl': '3rem',
			'4xl': '4rem',
			'5xl': '5rem',
			'6xl': '6rem',
		},
		spacing: {
			1: '4px',
			2: '8px',
			3: '12px',
			4: '16px',
			5: '24px',
			6: '32px',
		},
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
			},
		},
	},
	plugins: [],
}
