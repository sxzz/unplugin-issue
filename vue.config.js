const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '.',
  transpileDependencies: true,

  chainWebpack(config) {
    // Removes babel-loader and then unplugin works
    // config.module.rule('js').uses.clear()
  },

  configureWebpack: {
    plugins: [require('./plugin')()],
  },
})
