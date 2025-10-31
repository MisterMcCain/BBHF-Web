/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
        // Additional vibrant colors
        vibrantBlue: {
          DEFAULT: 'hsl(220, 80%, 60%)',
          light: 'hsl(220, 80%, 70%)',
          dark: 'hsl(220, 80%, 50%)',
        },
        vibrantPurple: {
          DEFAULT: 'hsl(270, 70%, 60%)',
          light: 'hsl(270, 70%, 70%)',
          dark: 'hsl(270, 70%, 50%)',
        },
        vibrantTeal: {
          DEFAULT: 'hsl(180, 70%, 50%)',
          light: 'hsl(180, 70%, 60%)',
          dark: 'hsl(180, 70%, 40%)',
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
        'aurora': {
          '0%': { transform: 'translate(var(--x-start), var(--y-start)) scale(1)', opacity: 'var(--opacity-start, 0.2)' },
          '50%': { transform: 'translate(var(--x-mid), var(--y-mid)) scale(var(--scale-mid, 1.2))', opacity: 'var(--opacity-mid, 0.4)' },
          '100%': { transform: 'translate(var(--x-end), var(--y-end)) scale(var(--scale-end, 1))', opacity: 'var(--opacity-end, 0.2)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px hsl(var(--primary) / 0.3), 0 0 20px hsl(var(--primary) / 0.2)' },
          '50%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)' },
        },
        'subtle-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'text-shine': {
          'to': { backgroundPosition: '200% center' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
        'aurora-1': 'aurora 20s infinite alternate ease-in-out',
        'aurora-2': 'aurora 25s infinite alternate-reverse ease-in-out',
        'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
        'subtle-bob': 'subtle-bob 4s infinite ease-in-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'text-shine': 'text-shine 5s linear infinite',
			},
      boxShadow: {
        'glow-primary-sm': '0 0 15px 2px hsla(var(--primary) / 0.3)',
        'glow-primary-md': '0 0 25px 5px hsla(var(--primary) / 0.4)',
        'glow-primary-lg': '0 0 40px 10px hsla(var(--primary) / 0.5)',
        'neumorphic-light': '5px 5px 10px #1f2937, -5px -5px 10px #374151', // Adjust colors for dark theme
        'neumorphic-dark': '5px 5px 10px #111827, -5px -5px 10px #1f2937', // Adjust colors for dark theme
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-glass': 'linear-gradient(135deg, hsla(var(--primary) / 0.1), hsla(var(--primary) / 0.05))',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      }
		},
	},
	plugins: [require('tailwindcss-animate')],
};