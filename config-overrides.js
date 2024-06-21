const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve = {
    fallback: {
      util: require.resolve("util/"),
      process: require.resolve("process/browser"),
      buffer: require.resolve("buffer/"),
      assert: require.resolve("assert/"),
    },
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};
