# 错误解决方案
## No PostCSS config found
如果没有options这个选项将会报错：No PostCSS config found
        {
          loader:'postcss-loader',
          options:{
            ...
          }
        }
## css 中@impot 一个css 文件时报错：cannot read property 'postcss' of null
未解决

## 浏览器报Uncaught TypeError: Cannot set property 'innerHTML' of null,
源代码为
`var dom = document.getElementById('app');
 var layer = new Layer();
 dom.innerHTML = layer.tpl;`
配置文件为
`plugins:[
  new htmlWebpackPlugin({
    filename: 'index.html',
    template:'index.html',
    inject:'head',
  //  minify:'' 压缩
})
]`
报错原因为:将js文件插入到了` <head> `标签中了，此时取不到id为app的` <div> `标签。应将配置文件中的 *inject* 设为 *body*，即
`  plugins:[
    new htmlWebpackPlugin({
      filename: 'index.html',
      template:'index.html',
      inject:'body',
    //  minify:'' 压缩
  })

  ]`
