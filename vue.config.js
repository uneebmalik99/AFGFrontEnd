const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/sendEmailAPI': {
        target: 'http://latest.afgglobalshipping.com',  // Backend server URL
        changeOrigin: true,
        pathRewrite: {
          '^/sendEmailAPI': '/sendEmailAPI'  // Rewrite path
        }
      }
    }
  }
})
