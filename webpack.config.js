const path = require("path");
const jquery = require('jquery');
const webpack = require('webpack');
const { plugin } = require("postcss");

module.exports ={
    entry:"./js/app.js",
    output:{
        filename:"../build/application.js",
        path:path.resolve(__dirname,"build")
    },

    mode:"development",
    watch:true,
    module:{
        rules:[
              {
               test:/\.css$/i,
               use:["style-loader","css-loader"],
               },
               {
                test: /\.s[ac]ss$/i,
                use:["style-loader","css-loader","sass-loader"],
                },
               {
                test: /\.(png|jpg|gif|svg|mp4)$/i,
                loader: 'url-loader'
              },

      ]

    },

      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',

        })
      ]





};


