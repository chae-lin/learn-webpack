var path = require("path");
// 노드js 모듈 문법으로 "path" 라이브러리를 가져와서 path 변수에 집어 넣는다.

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    // resolve 라는 경로를 잡아주는 api를 사용
  },
};
