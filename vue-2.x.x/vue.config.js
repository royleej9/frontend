module.exports = {
  chainWebpack(config) {
    config.resolve.alias.clear().merge(require('./aliases.config').webpack);
    config.resolve.extensions.delete('.vue');
  },

  css: {
    sourceMap: true
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  transpileDependencies: ['quasar']
};
