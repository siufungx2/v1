const path = require('path')

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const withSass = require('@zeit/next-sass');

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [optimizedImages, {}],
]);

module.exports = withSass({
  cssModules: true
})

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://siufungx2.github.io/v1' : '',
  basePath: isProd ? '/v1' : '',
  env: {
    PUBLIC_URL: "https://siufungx2.github.io/v1",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: "imgix",
    path: "./",
  },
}
