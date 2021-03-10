html 웹의 구조, 컨텐츠 / css 디자인 / j.s 웹의 동작, 웹의 모든 것
웹 문서 vs 웹 애플리케이션

''' <input type = "checkbox" />
<input type = "radio" name="group" /> '''

Elements Ctrl+f 찾기 기능, Ctrl+Shift+c 해당 부분 클릭->소스

'''documnet.head.parentNode.removeChild(document.head);''' //CSS 나타나지 않게 하기

레이아웃 header, nav, main, footer

'''#header-search > h1 //자식  #header-search h1 //자손'''

span 태그 : inline 자동 적용
inline-block vs inline 차이 확실히 기억할 것

padding : 위 오른쪽 아래 왼쪽 (시계 방향)

색상 표기법 : hex color (#03cf5d), rgb

vertical-align 세로 정렬

*쌓임 맥락, block format context*

position 속성 : fixed, absolute(자신의 컨테이닝 블록 기반 이동), relative(자신의 static 위치 기반 이동)

css 우선 순위 !important > inline style attribute > id > 다른 attribute, class > tag element

float : 공중에 둥둥 떠있어서 그 다음 컨텐츠가 그 사이로 쏙 들어감. 단, 겹치지는 않음

마진 상쇄 : 1)부모 안에 자식 2)형제 태그 3)빈 태그 
 해결 block format context
 '''display: inline-block;  width 100%;'''

쌓임 맥락 : 자식은 부모의 z-index 관계를 뛰어넘지 못한다.

validator 꼭 검사 실시!
