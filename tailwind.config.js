/** @type {import('tailwindcss').Config} */


export const darkMode = ["class"];
export const content = [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
];

export const theme = {
    container: {
        center: true,
        padding: "2rem",
        screens: {
            "2xl": "1400px",
        },
    },
    extend: {
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
        height: {
            screen: '96dvh',
        },
        width: {
            screen: '98dvw',
        },
    },
    colors: {
        'purple': 'var(--purple)',
        'purple-light': 'var(--purple-light)',
        'black': 'var(--black)',
        'black-purple': 'var(--black-purple)',
        'white': 'var(--white)',
        'grey-light': 'var(--grey-light)',
        'grey-light-lighten': 'var(--grey-light-lighten)',
        'grey-dark': 'var(--grey-dark)',
        'grey-dark-lighten': 'var(--grey-dark-lighten)',
        'purple-borders': 'var(--purple-borders)',
        'purple-interractive': 'var(--purple-interractive)'
    }
};

export const plugins = [];
