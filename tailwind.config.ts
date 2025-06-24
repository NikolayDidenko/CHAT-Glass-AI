import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}', // все исходники
        './public/**/*.html',             // если есть HTML-файлы
    ],
    theme: {
        extend: {
        // Можно добавить кастомные фоновые изображения, цвета и т.п.
        },
    },
    plugins: [],
}

export default config