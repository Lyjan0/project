module.exports = {
  // 关闭eslint
  lintOnSave:false,
  // 去除打包时产生的map格式文件
  productionSourceMap:false,
  // 代理跨域
  devServer:{
    proxy:{
      '/api':{// 请求资源前缀
        // 请求资源地址
        target:'http://39.98.123.211',
        changeOrigin: true,
      }
    }
  },
  //配置本地引用目录文件,如不配置，默认为`/`，解决打包后的index.html打开为空白
  publicPath: './',
}