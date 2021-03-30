const React = require('react'); // npm에 설치한 react,react-dom 불러오기
const ReactDom = require('react-dom');

import ResponseCheck from './ResponseCheck_hooks';

ReactDom.render(<ResponseCheck />, document.querySelector('#root')); 