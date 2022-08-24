/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
 */
module.exports = {
  css: {
    sourceMap:true, 
    loaderOptions: {
      scss: {
        // options here will be passed to css-loader
        sourceMap:true
      },
    }
  }
}