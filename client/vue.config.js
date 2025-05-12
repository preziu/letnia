const path = require('path');

module.exports = {
  transpileDependencies: true,

  outputDir: path.resolve(__dirname, '../public'),

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      }
    }
  }
};
