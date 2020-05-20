const CleanCSS = require("clean-css");

module.exports = function(config) {

  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  })

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
