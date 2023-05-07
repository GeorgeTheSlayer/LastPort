module.exports = {
  plugins: [
    "prettier-plugin-svelte",
    require.resolve("prettier-plugin-astro"),
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  pluginSearchDirs: false,
};
