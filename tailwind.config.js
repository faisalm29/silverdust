const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FFFFFF",
      secondary: "#252525",
      accent: "#332FD0",
    },
    extend: {
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              h2: {
                margin: "0",
                paddingTop: "56px",
                paddingBottom: "24px",
              },
              h3: {},
              h4: {},
              p: {},

              code: {
                color: "#86e1fc",
                "&::before": {
                  content: `"" !important`,
                },
                "&::after": {
                  content: `"" !important`,
                },
                fontWeight: "normal",
              },
              "[data-rehype-pretty-code-fragment]:nth-of-type(2) pre": {
                ".line::before": {
                  content: "counter(line)",
                  counterIncrement: "line",
                  display: "inline-block",
                  width: "1rem",
                  marginRight: "1rem",
                  textAlign: "right",
                  color: colors.slate[600],
                },

                ".line--highlighted::before": {
                  color: colors.slate[400],
                },
              },
              pre: {
                opacity: 0.98,
                background: "rgba(200,200,255,0.05)",
                padding: "0.75rem 0",
                lineHeight: 2,

                "> code": {
                  display: "grid",
                  counterReset: "line",

                  ".word": {
                    background: "rgba(200,200,255,0.15)",
                    padding: "0.25rem",
                    borderRadius: "0.25rem",
                  },
                  "> .line": {
                    padding: "0 1.25rem",
                    borderLeft: `2px solid transparent`,
                  },
                  "> .line.line--highlighted": {
                    background: "rgba(200,200,255,0.3)",
                    borderLeftColor: colors.blue[400],
                  },
                },
              },
              ":not(pre) > code": {
                background: "rgba(200,200,255,0.1)",
                padding: "0.25rem",
                fontSize: "0.95rem !important",
                borderRadius: "0.25rem",
              },
            },
          },
        };
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
