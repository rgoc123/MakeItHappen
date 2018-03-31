var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./lib/domify_main.js",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "domify.js",
  }
};
