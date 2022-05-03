var path = require("path");

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
        use: ["style-loader", "css-loader"],
        // 적용할 모듈
        // 로더는 오른쪽에서 왼쪽으로 적용 된다.
        // ex) sass-loader 를 사용할 때
        // use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // module = loader
};
