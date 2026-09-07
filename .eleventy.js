module.exports = function (eleventyConfig) {
  // Copie le CSS tel quel dans le site généré
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });

  // Collection = toutes les fiches du dossier src/criminels/*.md
  eleventyConfig.addCollection("criminels", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/criminels/*.md")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
