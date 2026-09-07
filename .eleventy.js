module.exports = function (eleventyConfig) {
  // Copie le CSS tel quel dans le site généré
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });

  // Copie les photos telles quelles
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // Collection = toutes les fiches du dossier src/criminels/*.md
  eleventyConfig.addCollection("criminels", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/criminels/*.md")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

    eleventyConfig.addCollection("menu", (collectionApi) => {
    const items = collectionApi.getFilteredByGlob("src/criminels/*.md");
    const tree = {};
    items.forEach((item) => {
      const continent = item.data.continent || "Autre";
      const pays = item.data.pays || "Autre";
      const types = (item.data.type && item.data.type.length) ? item.data.type : ["Autre"];
      tree[continent] = tree[continent] || {};
      tree[continent][pays] = tree[continent][pays] || {};
      types.forEach((t) => {
        tree[continent][pays][t] = tree[continent][pays][t] || [];
        tree[continent][pays][t].push(item);
      });
    });
    return tree;
  });
  return {
    pathPrefix: "/annuaire-criminels/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
