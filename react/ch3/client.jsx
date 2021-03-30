const React = require('react'); // npm에 설치한 react,react-dom 불러오기
const ReactDom = require('react-dom');

import NumberBaseball from './NumberBaseball_hooks';

ReactDom.render(<NumberBaseball />, document.querySelector('#root')); 