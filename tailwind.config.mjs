/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			colors: {
        primary: "#6137DB",
        "dashboard-border": {
          DEFAULT: "#E0E3F0",
        },
        status: {
          text: "#535353",
          red: "#FF0000",
          "red-bg": "#FFF2F2",
          orange: "#FF7A00",
          "orange-bg": "#FFF4EB",
          green: "#18B100",
          "green-bg": "#EDFFEB",
        },
        "arrow-link": {
          text: "#8B888F",
          bg: "#EDF0F5",
        },
        "dashboard-sidenav-bg": {
          DEFAULT: "#EBECF0",
        },
        "dark-svg": {
          DEFAULT: "#15161B",
        },
        "google-border": {
          DEFAULT: "#D5D5D5",
        },
        bottom_border_gray: {
          DEFAULT: "#D4D5E7",
        },
        secondary: {
          DEFAULT: "#F1F1F5",
        },

        border_gray: {
          DEFAULT: "#BCBCBC",
        },
        bg_text_gray: {
          DEFAULT: "#878A99",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        bg_gray: {
          DEFAULT: "#F3F5FA",
        },
        pink: {
          DEFAULT: "#F9F2F2",
        },
        blue: {
          DEFAULT: "#0038FF",
        },
        cards_gray: {
          DEFAULT: "#CFD2F4",
        },
        darkgray: {
          DEFAULT: "#333333",
        },
        gray_footer_text: {
          DEFAULT: "#575757",
        },
        lightgray: {
          DEFAULT: "#858585",
        },
        span: {
          DEFAULT: "#767676",
        },
        black: {
          "shade-1": "#0E0F0F",
          "shade-2": "shade 2 goes here",
          "shade-3": "shade 3 goes here",
          // this is max ignore other shades if exists use one of these instead!.
        },
        gray: {
          "shade-1": "#878A99",
          "shade-2": "#D5D5D5",
          "shade-3": "#F0F1F5",
          "shade-4": "#EDEFF0",
          // this is max ignore other shades if exists use one of these instead!.
        },
        approve: {
          DEFAULT: "#18B100",
          "hover-bg": "#EDFFEB",
        },
        decline: {
          DEFAULT: "#FF0000",
          "hover-bg": "#FFF2F2",
        },
        suspend: {
          DEFAULT: "#FF9800",
          "hover-bg": "#FFF4EB",
        },
        delete: {
          DEFAULT: "#D32F2F",
          text: "#FFFFFF",
        },
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
