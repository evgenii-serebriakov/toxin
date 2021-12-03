const ENV = process.env.NODE_ENV;
const isENVdevelopment = ENV !== 'production';

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.fix = true;
        return options;
      });
  },
  css: {
    loaderOptions: {
      css: {
        modules: {
          localIdentName: isENVdevelopment ? '[local]' : '[local]_[hash:base64:5]',
        }
      },
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
          @import "@/scss/mixins.scss";
        `
      }
    },
    extract: false,
    requireModuleExtension: true
  }
};
