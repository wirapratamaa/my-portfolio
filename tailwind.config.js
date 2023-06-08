/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        contact: "url(/src/assets/bg-contact.jpg)",
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
