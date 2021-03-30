const path = require('path'); // node에서 경로 쉽게 조작할 수 있도록 주는 것.
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'wordrelay-setting',
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
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        }],
    },

    plugins: [
        new RefreshWebpackPlugin(),
    ],

    output: {
        path: path.join(__dirname, 'dist'), // __dirname(현재폴더) 안에 있는 'dist' 폴더를 합쳐줌
        filename: 'app.js',
        publicPath: '/dist/',
    }, // *중요* 출력
    devServer: {
        publicPath: '/dist/', // webpack-dev-server가 사용하는 결과물간의 상대 경로
        hot: true,
    },
}; 