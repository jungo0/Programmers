function solution(n) {    
    let factors = [];
    
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            factors.push(i);
        }
    }
    
    return factors.length;
}