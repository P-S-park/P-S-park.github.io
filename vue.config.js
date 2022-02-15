const SitemapPlugin = require('sitemap-webpack-plugin').default;

const base = 'https://pspark.ru';
const paths = ['/'];

// https://github.com/schneidmaster/sitemap-webpack-plugin
const options = {
  lastmod: true, 
};

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: 'docs',
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base, paths, options })
    ]
  }
}
