module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/style/application.scss";`
            }
        }
    }
};