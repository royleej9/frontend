module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack,
    },
  },

  chainWebpack: (config) => {
    // 필요시점에 lib가 로딩
    config.plugins.delete('prefetch');
  },

  devServer: {
    proxy: {
      '/users': {
        target: 'https://my-json-server.typicode.com/royleej9/test-db',
        // pathRewrite: { "^/api": "" },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
