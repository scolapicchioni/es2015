module.exports = {
    entry : "./wwwroot/js/src/test01.js",
    output: {
        filename: "./wwwroot/js/lib/bundle.js"
    },
    module: {
        loaders: [
            {
                loader : "babel-loader",
                test : /\.js$/    
            }
        ]
    },
    devtool : "source-map"
}