function solution(s) {
    let word = s.split(' ');
    let word2 = word.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    answer = word2.join(" ")
     return answer;
 }