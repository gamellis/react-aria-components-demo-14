import type { Config } from "tailwindcss"
import tailwindcssReactAriaComponents from "tailwindcss-react-aria-components"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [tailwindcssReactAriaComponents, tailwindcssAnimate],
}
export default config
