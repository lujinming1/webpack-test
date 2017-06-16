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
        test:/\.css$/,
        loader:'style-loader!css-loader!postcss-loader'
      }


    ]
  },


  plugins:[
    new htmlWebpackPlugin({
      filename: 'index.html',
      template:'index.html',
      inject:'head',
    //  minify:'' 压缩
  }),
  require('autoprefixer')(
    {
      broswers:['last 5 versions']
    }
  )
  ]
}
