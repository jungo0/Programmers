function solution(left, right) {
    let arr = [];
    let arrLength = [];
    let leftRight = [];
    let answer = 0;
    for (let i=left; i<=right; i++){
        leftRight.push(i)
        for (let j=1; j<=i; j++) {
            i % j == 0 && arr.push(i)
        }
        arrLength.push(arr.filter(item => i===item).length)
    }
    
    for (let z = 0; z < arrLength.length; z++){
        arrLength[z] % 2 === 0 ? answer += leftRight[z] : answer -= leftRight[z]
        console.log(answer)
    }
    
    return answer;
    
}