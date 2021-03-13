var 제로초 = {
    이름: '제로초',
    먹다: function 먹다() {
        console.log('냠냠')
    },
}

제로초['이름']
제로초['먹다']       
제로초.이름
제로초.먹다
제로초.먹다()

'*'.repeat(5)

var 문자객체 = {
    length: 5,
    repeat: function repeat(num) {}
}

var 값 = '이름'

네로.값 //불가능
네로[값] //가능
//대괄호 안에는 변수를 쓸 수 있지만 점 뒤에는 안 됩니다.