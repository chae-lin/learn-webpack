var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  // production: 배포할 때, development: 개발 시, none
  entry: "./index.js",
  // 웹팩으로 변환할 대상 파일의 경로
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // 결과를 저장할 경로
  module: {
    rules: [
      {
        test: /\.css$/,
        // 모든 css 파일에 대해
        // use: ["style-loader", "css-loader"],
        // 적용할 모듈
        // ex) sass-loader 를 사용할 때
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
    ],
  },
  // module = loader
  // 비 자바스크립트 파일을 웹팩이 인식할 수 있게 추가하는 속성. 로더는 오른쪽에서 왼쪽 순으로 적용
  plugins: [new MiniCssExtractPlugin()],
  // 웹팩으로 변환한 파일에 추가적인 기능을 더하고 싶을 때 사용하는 속성. 웹팩 변환 과정 전반에 대한 제어권을 갖고 있음
};
