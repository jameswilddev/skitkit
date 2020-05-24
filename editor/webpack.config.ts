import * as fs from "fs";
import * as path from "path";
import MiniCssExtractPlugin = require("mini-css-extract-plugin");
import FaviconsWebpackPlugin = require("favicons-webpack-plugin");
import HtmlWebpackPlugin = require("html-webpack-plugin");

export default {
  entry: path.join(__dirname, `index.js`),
  output: {
    path: path.join(__dirname, `temp`),
    filename: `index.js`,
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, `css-loader`, `sass-loader`],
      },
      { test: /\.pug$/, loader: "pug-loader" },
    ],
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, `logo.svg`),
      prefix: ``,
      outputPath: path.join(`..`, `dist`),
      favicons: {
        appName: `skitkit`,
        appShortName: `skitkit`,
        appDescription: `A kit for making your skits litǃ`,
        developerName: `SUNRUSE`,
        developerURL: `https://www.sunruse.co.uk`,
        lang: `en-US`,
        background: `#735b26`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: `#735b26`,
        appleStatusBarStyle: `black`,
        display: `standalone`,
        orientation: `any`,
        scope: `/`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: `/#games`,
        version: JSON.parse(
          fs.readFileSync(path.join(__dirname, `..`, `package.json`), `utf8`)
        ).version,
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, `index.pug`),
      filename: path.join(__dirname, `dist`, `index.html`),
      title: `skitkit`,
    }),
    new MiniCssExtractPlugin({
      filename: path.join(`index.css`),
    }),
  ],
};