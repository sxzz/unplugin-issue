const { createUnplugin } = require('unplugin')

module.exports = createUnplugin(() => {
  return {
    name: 'test-plugin',
    transformInclude(id) {
      if (id.includes('node_modules')) return false
      return id.includes('HelloWorld.vue')
    },
    transform(code) {
      return code.replace('HELLO', 'HALO')
    },
  }
}).webpack
