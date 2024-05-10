/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#1d4ed8",
          "primary-content": "#ffffff",
          secondary: "#15803d",
          "secondary-content": "#ffffff",
          accent: "#a16207",
          "accent-content": "#000000",
          neutral: "#374151",
          "neutral-content": "#d1d5db",
          "base-100": "#1c3238",
          "base-200": "#172a2f",
          "base-300": "#1f2937",
          "base-content": "#f3f4f6",
          info: "#0f766e",
          "info-content": "#ffffff",
          success: "#16a34a",
          "success-content": "#ffffff",
          warning: "#ca8a04",
          "warning-content": "#000000",
          error: "#dc2626",
          "error-content": "#ffffff",
        },
        light: {
          primary: "#3b82f6",
          "primary-content": "#ffffff",
          secondary: "#22c55e",
          "secondary-content": "#ffffff",
          accent: "#eab308",
          "accent-content": "#000000",
          neutral: "#d1d5db",
          "neutral-content": "#374151",
          "base-100": "#fffee9",
          "base-200": "#deddcb",
          "base-300": "#f3f4f6",
          "base-content": "#1f2937",
          info: "#14b8a6",
          "info-content": "#ffffff",
          success: "#4ade80",
          "success-content": "#ffffff",
          warning: "#facc15",
          "warning-content": "#000000",
          error: "#f87171",
          "error-content": "#ffffff",
        },
      },
    ],
  },
}

