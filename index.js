const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const merge = require('babel-merge');
module.exports = (api) => {
  api.chainWebpack((webpackChain) => {
    if (process.env.NODE_ENV === 'development') {
      webpackChain.module
        .rule('compile')
        .use('babel')
        .tap((options) =>
          merge(options, {
            plugins: [require.resolve('react-refresh/babel')],
          }),
        );
      webpackChain.plugin('react-refresh').use(ReactRefreshWebpackPlugin);
    }
  });
};
