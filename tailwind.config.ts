
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
				// Warm romantic sunset palette
				sunset: {
					50: '#fff5f5',
					100: '#ffe8e8',
					200: '#ffd6cc',
					300: '#ffb3b3',
					400: '#ff9a9e',
					500: '#ff8e8e',
					600: '#ff6b6b',
					700: '#e55555',
					800: '#cc4444',
					900: '#b33333',
				},
				golden: {
					50: '#fffbf0',
					100: '#fff2d6',
					200: '#ffe8b3',
					300: '#ffdb8f',
					400: '#ffcd6b',
					500: '#ffad56',
					600: '#e69947',
					700: '#cc8538',
					800: '#b37129',
					900: '#995d1a',
				},
				rose: {
					50: '#fef7f7',
					100: '#fce8e8',
					200: '#f9d1d1',
					300: '#f5b3b3',
					400: '#f08e8e',
					500: '#eb6969',
					600: '#d84444',
					700: '#c53333',
					800: '#a82828',
					900: '#8b1d1d',
				},
				poetry: {
					50: '#f8f6ff',
					100: '#f0ebff',
					200: '#e0d4ff',
					300: '#cdb8ff',
					400: '#b896ff',
					500: '#a374ff',
					600: '#8e52ff',
					700: '#7c3aed',
					800: '#6b2db5',
					900: '#5a247d',
				}
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
					},
					'50%': {
						transform: 'scale(1.1)',
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(-15px)',
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '0.5',
						transform: 'scale(0.9) rotate(0deg)',
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.1) rotate(180deg)',
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(255, 154, 158, 0.3)',
					},
					'50%': {
						boxShadow: '0 0 40px rgba(255, 154, 158, 0.6), 0 0 60px rgba(255, 204, 204, 0.4)',
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '200% center',
					},
					'100%': {
						backgroundPosition: '-200% center',
					}
				},
				'pulse-ring': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '1',
					},
					'100%': {
						transform: 'scale(2.2)',
						opacity: '0',
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(-20%)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					}
				},
				'float-particles': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.8',
					},
					'33%': {
						transform: 'translateY(-25px) rotate(120deg)',
						opacity: '0.9',
					},
					'66%': {
						transform: 'translateY(-50px) rotate(240deg)',
						opacity: '0.7',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heart-beat': 'heart-beat 2s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 4s linear infinite',
				'pulse-ring': 'pulse-ring 3s infinite',
				'bounce-slow': 'bounce-slow 4s infinite',
				'spin-slow': 'spin 12s linear infinite',
				'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float-particles': 'float-particles 25s ease-in-out infinite',
			},
			backdropBlur: {
				xs: '2px',
			},
			dropShadow: {
				'glow': [
					'0 0px 20px rgba(255, 154, 158, 0.35)',
					'0 0px 40px rgba(255, 204, 204, 0.2)'
				]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
