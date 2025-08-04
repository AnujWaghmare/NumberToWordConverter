const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Orbitron"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'cyber-bg': '#0d0221',
                'cyber-surface': '#1a0a35',
                'cyber-primary': '#26114a',
                'cyber-accent-cyan': '#00f5d4',
                'cyber-accent-pink': '#f15bb5',
                'cyber-text': '#f0f0f0',
                'cyber-text-secondary': '#a9a9a9',
                'cyber-error': '#ff0054',
            },
            boxShadow: {
                'cyber-glow-pink': '0 0 15px rgba(241, 91, 181, 0.6)',
                'cyber-glow-cyan': '0 0 15px rgba(0, 245, 212, 0.6)',
            },
        },
    },
    plugins: [],
};