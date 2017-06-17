var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry:'./src/app.js',
  output:{
    path:__dirname + '/dist',
    filename:'js/bundle.js',

  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader'
      },
      {
        test:/\.html$/,
        loader:'html-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              modules: true,
              importLoaders:1
            }
          },
          {
            loader:'postcss-loader',
            options:{
              plugins:[
                require('autoprefixer')({broswers:['last 5 versions']})
              ]
            }
          }
        ]
      },
      {
        test:/\.less$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{

              importLoaders:1
            }
          },
          {
            loader:'postcss-loader',
            options:{
              plugins:[
                require('autoprefixer')({broswers:['last 5 versions']})
              ]
            }
          },
          'less-loader'
        ]
      }
    ]
  },


  plugins:[
    new htmlWebpackPlugin({
      filename: 'index.html',
      template:'index.html',
      inject:'body',
    //  minify:'' 压缩
  })

  ]
}
