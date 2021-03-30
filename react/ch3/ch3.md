리액트 반복문(map)  
```
<ul>
{['사과','바나나','포도','감'].map( (v) => {
    return (
        <li>{v}</li>
    );
})}
<li>사과</li>
<li>바나나</li>
<li>포도</li>
<li>감</li>
</ul>
```

```
<ul>
{[
    ['사과','맛있다'],
    ['바나나','맛없다'],
    ['포도','시다'],
    ['감','쓰다']
    ].map( (v) => {
        return (
        <li><b>{v[0]}</b> - {v[1]}</li>
    );
})}
<li>사과</li>
<li>바나나</li>
<li>포도</li>
<li>감</li>
</ul>
```

```
<ul>
{[
    [fruit: '사과', taste: '맛있다'],
    [fruit: '바나나',taste: '맛없다'],
    [fruit: '포도',taste: '시다'],
    [fruit: '감',taste: '쓰다']
    ].map( (v,i) => {
        return (
        <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {i}</li>
    );
})}
</ul>
```

React 주석 {/* */}  
일괄 선택 단축키 alt + j  

Rendering 문제를 해결하기 위해  
shouldComponetUpdate(nextProps, nextState, nextContext) {
    조건;
}; 을 사용 or PureComponent와 memo를 사용할 수 있음.  

render() {} 안에는 setState 쓰면 안된다. render()와 setState({})간의 무한 반복 발생.  