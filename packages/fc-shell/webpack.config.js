const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const deps = require("./package.json").dependencies;

// https://github.com/module-federation/module-federation-examples/blob/master/typescript/app1/webpack.config.js
module.exports = (env) => {
  console.log(env);
  return {
    entry: "./src/index",
    cache: false,

    mode: "development",
    devtool: "source-map",

    optimization: {
      minimize: false,
    },

    output: {
      publicPath: "auto",
    },

    resolve: {
      extensions: [".js", ".json", ".ts", ".tsx"],
    },

    module: {
      rules: [
        // TODO this should be needed, but when activated nothing is rendered and no errors are logged
        // {
        //   test: /bootstrap\.tsx$/,
        //   loader: "bundle-loader",
        //   options: {
        //     lazy: true,
        //   },
        // },
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
        {
          test: /\.js$/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "fc-shell",
        filename: "remoteEntry.js",
        remotes: {
          fc_list:
            // Note: this can also be done with a webpack.config.dev and webpack.config.prod
            env.proxied && env.proxied === "true"
              ? "fc_list@http://localhost:3019/fc_list/remoteEntry.js"
              : "fc_list@http://localhost:3012/remoteEntry.js",
          // app_03: "app_03@http://localhost:3003/remoteEntry.js",
          // app_04: "app_04@http://localhost:3004/remoteEntry.js",
          // app_05: "app_05@http://localhost:3005/remoteEntry.js",
        },
        //   exposes: {
        //     "./SideNav": "./src/SideNav",
        //     "./Page": "./src/Page",
        //   },
        shared: {
          // TODO deps from package.json?
          // ...deps,
          "@material-ui/core": {
            singleton: true,
          },
          "react-router-dom": {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
          react: {
            singleton: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
