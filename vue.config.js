module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/application.scss";`,
      },
    },
  },
  devServer: {
    proxy: "https://test.perers.org/",
  },
};
