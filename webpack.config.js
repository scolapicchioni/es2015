module.exports = {
    entry : {
        main: "./wwwroot/js/src/Main.js",
        lab09: ['babel-polyfill',"./wwwroot/js/src/lab09.js"],
        lab12: ['babel-polyfill',"./wwwroot/js/src/lab12.js"]
    },
    output: {
        filename: "./wwwroot/js/lib/[name].js"
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