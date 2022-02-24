var path = require("path");

module.exports = {
  // mode: 'none',
  mode: "production",
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  // 빌드한 결과물과 빌드되기전의 결과물을 연결해준다.
  devtool: "source-map",
};
