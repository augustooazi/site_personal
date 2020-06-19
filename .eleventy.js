const CleanCSS = require("clean-css");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');

module.exports = function(config) {

  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  })

  config.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en'
    }
  });

  // Browsersync
  // Redirect from root to default language root during --serve
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          if (req.url === '/') {
            res.writeHead(302, {
              location: '/en/'
            });
            res.end();
          }
        });
      }
    }
  });

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
