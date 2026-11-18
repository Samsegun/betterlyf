import type { Config } from "tailwindcss";
import daisyui from "daisyui";

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
                    navy: "#12356B",
                    blue: "#0875D1",
                    lightBlue: "#DCEBFF",
                },
            },
            boxShadow: {
                "3xl": "0 35px 60px -8px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [daisyui],
} satisfies Config;
