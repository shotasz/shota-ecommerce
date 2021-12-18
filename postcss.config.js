module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-nesting",
    "autoprefixer",
    "postcss-preset-env",
    "postcss-import",
    "tailwindcss/nesting",

    // require("postcss-import"),
    // require("tailwindcss/nesting")(require("postcss-nesting")),
    // require("tailwindcss"),
    // require("postcss-preset-env")({
    //   features: { "nesting-rules": false },
    // }),
  ],
};
