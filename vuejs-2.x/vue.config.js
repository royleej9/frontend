module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack,
    },
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
