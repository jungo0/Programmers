//첫 번째 풀이
function solution(a, b) {
    var answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer += a[i]*b[i];
    }
    return answer;
}

//두 번째 풀이
function solution(a, b) {
    return (a.map((cur,i) => cur * b[i])).reduce((a,b) => a + b);
    //map으로 a[i]*b[i] 하고 reduce로 모든 요소 합 구하기
}