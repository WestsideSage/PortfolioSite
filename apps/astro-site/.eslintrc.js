module.exports = {
  extends: ["@nova/config/eslint/base"],
  env: {
    node: true,
    browser: true
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {
        "react/jsx-key": "off",
        "react/no-unknown-property": "off"
      }
    }
  ]
};
