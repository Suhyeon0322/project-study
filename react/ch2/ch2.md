functional component
```const Gugudan = () => {
    return <div>helllo, hooks</div>;
} ```

class -> className  
for -> htmlFor

webpack install (terminal)  
``` npm init
npm i react react-dom
npm i -D webpack webpack-cli
```
dependencies: 실제 서비스에서 쓰이는 것들, devDependencies: 개발에만 사용  

webpack 생성  
terminal 창 ```npx webpack'```

bable 생성  
``` npm i -D @babel/core // 바벨의 기본적인 것
npm i @babel/preset-env // 우리의 브라우저에 맞게 최신문법 -> 옛날문법
npm i @babel/preset-react // jsx 같은 것들 지원
npm i babel-loader // babel이랑 webpack 연결
```

<React.Fragment>의 간략한 표현 ```<> </>```

plugin들의 모음이 preset이다. github.com/browserslist  

npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D // 핫리로딩  
npm i -D webpack-dev-server // 서버 생성, 기존 데이터를 유지하면서 소스코드의 수정사항을 실시간으로 반영
package.json  
```"scripts": {
    "dev": "webpack serve --env development"
  },```
터미널 명령 npm run dev  
