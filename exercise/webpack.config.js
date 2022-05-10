var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/", //cdn 배포할 때 주소에 포함될 수 있도록 속성 정의
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {},
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/, //node_modules에는 라이브러리와 관련된 파일이 들어있어 해당 파일은 babel로 변환할 필요 없다.
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  resolve: {
    // 웹팩으로 파일간의 연관관계을 해석할 때 파일의 해석방식 정의
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"], // import할 때 js, vue, json은 확장자를 붙이지 않아도 된다.
  },
  devServer: {
    historyApiFallback: true, // History API 또는 react-router 등을 사용하는 경우 새로고침 시 404 에러를 해결해주는 option
    noInfo: true, // webpack 번들 정보와 같은 메시지를 억제하도록 dev-server에 지시한다. 오류 및 경고는 계속 표시.
    overlay: true, // 컴파일러 오류 또는 경고가 있을 때 브라우저 전체 화면에 오버레이를 표시하는 옵션
    open: true, // 서버가 시작되면 브라우저를 열도록 하는 option
  },
  performance: {
    // 성능관련 hint 속성
    // 결과물의 사이즈 초과시 경고를 주는 속성
    hints: false,
  },
  devtool: "#eval-source-map",
  // 빌드된 파일과 실제파일을 연결해주는 소스맵
};

// 웹팩 버전3까지의 코드로 4에서부터는 mode: "production" 으로 정의해주면 된다.
// if (process.env.NODE_ENV === "production") {
//   module.exports.devtool = "#source-map";
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: '"production"',
//       },
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false,
//       },
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true,
//     }),
//   ]);
// }
