/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			selec: {
  				'100': '#812485'
  			},
  			fondo: {
  				'100': '#000c1f'
  			},
  			cont: {
  				'100': '#00122e'
  			},
  			nav: {
  				'50': '#EEDBFF',
  				'100': '#DFBDFF',
  				'200': '#BC75FF',
  				'300': '#9C33FF',
  				'400': '#7C00F0',
  				'500': '#5900AB',
  				'600': '#47008A',
  				'700': '#350066',
  				'800': '#220042',
  				'900': '#120024',
  				'950': '#08000F'
  			},
  			link: {
  				'100': '#3BBDF5',
  				'200': '#1BB2F3',
  				'300': '#0BA0DF',
  				'400': '#0A8BC2',
  				'500': '#0873A0',
  				'600': '#065A7E',
  				'700': '#054561',
  				'800': '#032D3F',
  				'900': '#021822',
  				'950': '#010A0F'
  			},
  			btn: {
  				'50': '#FF0FB3',
  				'200': '#BD0081',
  				'400': '#6e004c',
  				'600': '#54003a'
  			},
  			alerts: {
  				'100': '#1EE618',
  				'300': '#FFB433',
  				'500': '#EB0000'
  			},
  			categoria: {
  				'100': '#005761'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

