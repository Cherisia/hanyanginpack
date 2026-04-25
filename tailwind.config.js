/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        fontFamily: {
          'nanumL': ['NanumSquareL'],
          'nanumR': ['NanumSquareR'],
          'nanumB': ['NanumSquareB'],
          'nanumEB': ['NanumSquareEB'],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                blink: {
                    to: { opacity: '0' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                typing: 'blink 1s infinite',
                fadeInUp: 'fadeInUp 0.35s ease both',
            },
        },
    },
    plugins: [
        ({addUtilities}) => {
            addUtilities({
                ".hy-underline": {
                    "@apply underline decoration-cyan-100 decoration-[15px] underline-offset-[-5px]": "",
                }
            })
        }
    ],
};
