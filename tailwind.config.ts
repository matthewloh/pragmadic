import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        logo: "#FBF4E1",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // colors: {
      //   primary: "hsl(40, 94%, 67%)",

      //   "primary-content": "hsl(40, 93%, 17%)",

      //   "primary-dark": "hsl(40, 94%, 57%)",

      //   "primary-light": "hsl(40, 95%, 77%)",

      //   secondary: "hsl(220, 94%, 67%)",

      //   "secondary-content": "hsl(220, 93%, 17%)",

      //   "secondary-dark": "hsl(220, 94%, 57%)",

      //   "secondary-light": "hsl(220, 95%, 77%)",

      //   background: "hsl(30, 7%, 94%)",

      //   foreground: "hsl(0, 0%, 98%)",

      //   border: "hsl(36, 8%, 88%)",

      //   copy: "hsl(40, 8%, 15%)",

      //   "copy-light": "hsl(41, 8%, 40%)",

      //   "copy-lighter": "hsl(39, 7%, 55%)",

      //   success: "hsl(120, 94%, 67%)",

      //   warning: "hsl(60, 94%, 67%)",

      //   error: "hsl(0, 94%, 67%)",

      //   "success-content": "hsl(120, 93%, 17%)",

      //   "warning-content": "hsl(60, 93%, 17%)",

      //   "error-content": "hsl(0, 93%, 17%)",
      // },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fade: "fade 1s linear forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
