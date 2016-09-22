var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']
            }
        ]
    }
};
