/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-purple-pink': 'linear-gradient(to bottom right, #a855f7, #ec4899)',
            },
        },
    },
    plugins: [],
};
