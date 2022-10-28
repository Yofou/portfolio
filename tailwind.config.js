const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                jost: ["'Jost'", ...defaultTheme.fontFamily.sans],
                merriweather: ["'Merriweather'", ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                container: 'minmax(0, var(--container, 1250px))'
            },
            colors: {
                yellow: {
                    300: "#E9AA52",
                },
                purple: {
                  300: '#302638',
                  600: '#16131d'
                }
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
