const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

]);

module.exports = {
  reactStrictMode: true,
  env: {
    PUBLIC_URL: "https://siufungx2.github.io/v1",
    assetPrefix: './'
  },
  assetPrefix: ".",
  images: {
    loader: "imgix",
    path: "./",
  },
}
