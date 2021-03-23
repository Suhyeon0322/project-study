classlist.contains로 현재 클래스를 파악 가능해요.

```console.time('시간');
console.timeEnd('시간');```

경미한 시간 측정 performance.now();
주로 new Date(); 많이 사용
console.log((끝시간 - 시작시간) / 1000);

호출 스택(call stack)  
LIFO(Last In First Out)(후입선출 구조) 또는 FILO  
```
function a() {
    function b() {
        fucntion c() {
            console.log('c');
        }
        c();
        console.log('b');
    }
    console.log('a');
    b();
}
```