const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssNormalize = require('postcss-normalize');

module.exports = (config) => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssNormalize(/* pluginOptions */)
  ]
});