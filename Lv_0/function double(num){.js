function double(num){
    return num*2;
}

function doubleNum(func, num){
    return func(num);
}

let output = doubleNum(double, 4);
console.log(output)