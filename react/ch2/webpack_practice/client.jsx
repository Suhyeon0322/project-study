const React = require('react'); // npm에 설치한 react,react-dom 불러오기
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root')); 