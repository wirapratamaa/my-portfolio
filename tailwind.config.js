/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        contact: "url(/src/assets/bg-contact.jpg)",
        home: "url(/src/assets/home_bg.jpg)",
        "primary-gradient":
          "linear-gradient(135deg, #00B4FF, #8A2BE2, #FF4DFF)",
        "secondary-gradient": "linear-gradient(135deg, #00B4FF, #3B82F6)",
        "third-gradient": "linear-gradient(135deg, #8A2BE2, #FF4DFF)",
      },
      colors: {
        primary: {
          blue: "#00B4FF",
          purple: "#8A2BE2",
          pink: "#FF4DFF",
        },
        dark: {
          bg: "#0B0F1A",
          surface: "#111827",
          border: "#1F2937",
        },
        text: {
          primary: "#E6E8ED",
          secondary: "#9CA3AF",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
    container: {
      center: true,
      // remove 2xl
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
