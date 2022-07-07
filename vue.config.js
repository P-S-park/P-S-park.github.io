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
    ],
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Сохраним парк Покровское-Стрешнево',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    police: {
      entry: 'src/police.js',
      template: 'public/index.html',
      filename: 'police/index.html',
      title: 'Вызов полиции в парк',
    },
    aqua: {
      entry: 'src/aqueduct.js',
      template: 'public/index.html',
      filename: 'aqua/index.html',
      title: 'Акведук вне закона',
    },
  },
}
