import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: "#0452ce",
                    lightBlue: "#0664fd",
                },
            },
            boxShadow: {
                "3xl": "0 35px 60px -8px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
} satisfies Config;
