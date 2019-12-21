const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const InlineSourcePlugin = require("html-webpack-inline-source-plugin")
const Mode = require("frontmatter-markdown-loader/mode")

module.exports = {
  mode: "production",
  entry: `${__dirname}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: {
          mode: [Mode.BODY],
        },
      },
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  output: {
    path: __dirname,
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: ".(js|css)$",
      meta: {
        viewport:
          "initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, width=device-width",
      },
    }),
    new InlineSourcePlugin(),
  ],
  resolve: {
    extensions: [
      ".wasm",
      ".mjs",
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".scss",
    ],
    modules: ["node_modules"],
    alias: {
      "@itsy.studio": path.resolve(__dirname, "../"),
    },
  },
}
