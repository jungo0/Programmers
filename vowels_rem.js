function solution(my_string) {
    
    const str = 'aeiou'
    let result = my_string.split('').filter((e)=>(!str.includes(e))).join('')
    
    return result
}