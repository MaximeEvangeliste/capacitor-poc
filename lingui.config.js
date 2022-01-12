module.exports = {
  locales: ["fr", "en"],
  sourceLocale: "fr",
  fallbackLocales: {
    default: "fr",
  },
  catalogs: [
    {
      path: "locales/{locale}/messages",
      include: ["pages", "components"],
    },
  ],
  format: "po",
};
