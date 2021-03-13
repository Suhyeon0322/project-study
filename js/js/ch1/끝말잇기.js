var word = "치킨";
while (true) {
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert('딩동댕')
        word = answer;
        // 맞았을 때
    } 
    else {
        //틀렸을 때
        alert('땡')
    }
}