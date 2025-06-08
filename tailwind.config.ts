
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'script': ['Dancing Script', 'cursive'],
				'romantic': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Deep romantic red palette
				romance: {
					50: '#fef2f2',
					100: '#fde8e8',
					200: '#fbd5d5',
					300: '#f8b4b4',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
					950: '#450a0a',
				},
				crimson: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
				},
				// Enhanced sunset palette with deeper reds
				sunset: {
					50: '#fff1f1',
					100: '#ffe1e1',
					200: '#ffc9c9',
					300: '#ffa3a3',
					400: '#ff6b6b',
					500: '#ff3333',
					600: '#ed1515',
					700: '#cc0f0f',
					800: '#b30d0d',
					900: '#8b0000',
				},
				// Passionate pink-red palette
				passion: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
				// Deep wine red palette
				wine: {
					50: '#fdf2f2',
					100: '#fce8e8',
					200: '#f9d5d5',
					300: '#f4b6b6',
					400: '#ec8c8c',
					500: '#dc5f5f',
					600: '#c53030',
					700: '#9b2c2c',
					800: '#822727',
					900: '#63171b',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'heart-beat': {
					'0%, 100%': {
						transform: 'scale(1)',
						filter: 'brightness(1)',
					},
					'50%': {
						transform: 'scale(1.15)',
						filter: 'brightness(1.2)',
					}
				},
				'romantic-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
					},
					'33%': {
						transform: 'translateY(-20px) rotate(2deg)',
					},
					'66%': {
						transform: 'translateY(-10px) rotate(-1deg)',
					}
				},
				'love-sparkle': {
					'0%, 100%': {
						opacity: '0.6',
						transform: 'scale(0.8) rotate(0deg)',
					},
					'25%': {
						opacity: '1',
						transform: 'scale(1.2) rotate(90deg)',
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1) rotate(180deg)',
					},
					'75%': {
						opacity: '1',
						transform: 'scale(1.1) rotate(270deg)',
					}
				},
				'passionate-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(239, 68, 68, 0.4), 0 0 40px rgba(220, 38, 38, 0.2)',
					},
					'50%': {
						boxShadow: '0 0 40px rgba(239, 68, 68, 0.8), 0 0 80px rgba(220, 38, 38, 0.4), 0 0 120px rgba(185, 28, 28, 0.2)',
					}
				},
				'love-pulse': {
					'0%': {
						transform: 'scale(0.9)',
						opacity: '1',
					},
					'50%': {
						transform: 'scale(1.1)',
						opacity: '0.8',
					},
					'100%': {
						transform: 'scale(1.8)',
						opacity: '0',
					}
				},
				'romantic-shimmer': {
					'0%': {
						backgroundPosition: '200% center',
					},
					'100%': {
						backgroundPosition: '-200% center',
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heart-beat': 'heart-beat 2s ease-in-out infinite',
				'romantic-float': 'romantic-float 6s ease-in-out infinite',
				'love-sparkle': 'love-sparkle 3s ease-in-out infinite',
				'passionate-glow': 'passionate-glow 2s ease-in-out infinite',
				'love-pulse': 'love-pulse 2s infinite',
				'romantic-shimmer': 'romantic-shimmer 3s linear infinite',
				'spin-slow': 'spin 8s linear infinite',
				'pulse-romantic': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			backdropBlur: {
				xs: '2px',
			},
			dropShadow: {
				'romantic': [
					'0 0px 25px rgba(239, 68, 68, 0.4)',
					'0 0px 50px rgba(220, 38, 38, 0.3)'
				],
				'passionate': [
					'0 0px 30px rgba(185, 28, 28, 0.5)',
					'0 0px 60px rgba(127, 29, 29, 0.3)'
				]
			},
			boxShadow: {
				'romantic': '0 25px 50px -12px rgba(239, 68, 68, 0.25), 0 0 0 1px rgba(220, 38, 38, 0.05)',
				'passionate': '0 25px 50px -12px rgba(185, 28, 28, 0.35), 0 0 0 1px rgba(127, 29, 29, 0.1)',
				'love-glow': '0 0 20px rgba(239, 68, 68, 0.4), 0 0 40px rgba(220, 38, 38, 0.2), 0 0 80px rgba(185, 28, 28, 0.1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
