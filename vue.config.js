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
    eleven: {
      entry: 'src/eleven.js',
      template: 'public/index.html',
      filename: '11/index.html',
      title: '11 обращений',
    },
  },
}
