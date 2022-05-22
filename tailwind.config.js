module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'custom-dark': '#001933',
                'custom-light': 'white',
                'custom-color': '#2E87E6'
            },
            spacing: {
                'custom-thin-line-lg': '0.125rem',
                'custom-thin-line': '0.5rem'
            },
            borderWidth: {
                'custom-thin-line-lg': '0.125rem',
                'custom-thin-line': '0.5rem'
            },
            borderRadius: {
                'custom-border-radius-lg': '0.5rem',
                'custom-border-radius': '0.5rem'
            }
        },
    },
    plugins: [],
}