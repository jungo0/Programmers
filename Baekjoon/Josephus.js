let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let n = +input.shift();
let k = +input.shift();

let queue = new Array(n).fill(0).map((e,i) => e = i+1);
let answer = [];
let cnt = 0;
while(queue.length){
    cnt++;
    if(cnt === k){
        cnt = 0;
        answer.push(queue.shift());
    } else {
        queue.push(queue.shift());
    }
}

console.log(`<${answer.join(", ")}>`);