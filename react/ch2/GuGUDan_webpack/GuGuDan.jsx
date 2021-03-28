const React = require('react'); // npm에서 react 불러오기
const { useState, useRef } = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const OnsubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
        setResult('정답: ' + value);
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        inputRef.current.focus();
    } else {
        setResult('땡');
        setValue('');
        inputRef.current.focus();
    }
};

const onChangeInput = (e) => {
    setValue(e.target.value);
};

return (
    <>
        <div>{first} 곱하기 {second}는?</div>
        <form onSubmit={OnsubmitForm}>
        <input ref={inputRef} type="number" value={value} onChange={onChangeInput}/>
        <button>입력!</button>
        </form>
      <div id="result">{result}</div>
      </>
);
    }

module.exports = GuGuDan; 
// 파일을 쪼갤 때 첫 번째 두 줄, 이 문장은 꼭 적어줘야 함. 이 파일의 component를 바깥쪽에서 사용가능하도록 하는것.