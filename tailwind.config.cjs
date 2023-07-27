/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#424549',
                'bg-light': '#53575c'
            },
        },
    },
    plugins: [],
}
