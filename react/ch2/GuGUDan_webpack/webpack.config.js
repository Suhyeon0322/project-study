const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // '빠르게' 라는 의미, production일 때는 hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    }, // 알아서 확장자를 찾아줌

    entry: {
        app: ['./client'], // WordRelay.jsx는 client.jsx가 이미 불러와서 불러오지 않음.
    }, // *중요* 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        browsers: ['> 1% in KR'], // browserslist
                    },
                    debug: true,
                }],
                '@babel/preset-react'
                ],
                plugins: [],
            },
        }],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],

    output: {
        path: path.join(__dirname, 'dist'), // __dirname(현재폴더) 안에 있는 'dist' 폴더를 합쳐줌
        filename: 'app.js'
    }, // *중요* 출력
};

