
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
				romance: {
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
						transform: 'scale(1.15)',
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(0.8) rotate(0deg)',
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.2) rotate(180deg)',
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
					},
					'50%': {
						boxShadow: '0 0 40px rgba(236, 72, 153, 0.8), 0 0 60px rgba(236, 72, 153, 0.4)',
					}
				},
				'aurora': {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
					},
					'50%': {
						backgroundPosition: '100% 50%',
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
						transform: 'scale(2.5)',
						opacity: '0',
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(-25%)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					}
				},
				'float-particles': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.7',
					},
					'33%': {
						transform: 'translateY(-30px) rotate(120deg)',
						opacity: '0.8',
					},
					'66%': {
						transform: 'translateY(-60px) rotate(240deg)',
						opacity: '0.6',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heart-beat': 'heart-beat 1.5s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'aurora': 'aurora 8s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'pulse-ring': 'pulse-ring 2s infinite',
				'bounce-slow': 'bounce-slow 3s infinite',
				'spin-slow': 'spin 8s linear infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float-particles': 'float-particles 20s ease-in-out infinite',
			},
			backdropBlur: {
				xs: '2px',
			},
			dropShadow: {
				'glow': [
					'0 0px 20px rgba(236, 72, 153, 0.35)',
					'0 0px 40px rgba(236, 72, 153, 0.2)'
				]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
