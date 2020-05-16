module.exports = function(config) {

  config.addPassthroughCopy('src/images');
  
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };

};
