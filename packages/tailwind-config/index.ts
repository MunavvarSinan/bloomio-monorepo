import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export function createConfig(customConfig = {}): Config {
    return {
        darkMode: ["class"],
        content: [
            "../../apps/*/src/**/*.{js,jsx,ts,tsx}",
            "../../packages/*/src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            extend: {
                colors: {
                    border: "hsl(var(--border))",
                    input: "hsl(var(--input))",
                    ring: "hsl(var(--ring))",
                    background: "hsl(var(--background))",
                    foreground: "hsl(var(--foreground))",
                    primary: {
                        DEFAULT: "hsl(var(--primary))",
                        foreground: "hsl(var(--primary-foreground))",
                    },
                    secondary: {
                        DEFAULT: "hsl(var(--secondary))",
                        foreground: "hsl(var(--secondary-foreground))",
                    },
                    // Additional colors can be added here
                },
                borderRadius: {
                    lg: "var(--radius)",
                    md: "calc(var(--radius) - 2px)",
                    sm: "calc(var(--radius) - 4px)",
                },
                fontFamily: {
                    sans: ["var(--font-sans)", ...fontFamily.sans],
                },
                keyframes: {
                    "accordion-down": {
                        from: { height: "0" },
                        to: { height: "var(--radix-accordion-content-height)" },
                    },
                    "accordion-up": {
                        from: { height: "var(--radix-accordion-content-height)" },
                        to: { height: "0" },
                    },
                    // Additional keyframes can be added here
                },
                animation: {
                    "accordion-down": "accordion-down 0.2s ease-out",
                    "accordion-up": "accordion-up 0.2s ease-out",
                    // Additional animations can be added here
                },
            },
        },
        plugins: [
            require("tailwindcss-animate"),
            // Other plugins can be added here
        ],
        ...customConfig, // Extend this config with any custom configurations
    };
}
