function solution(num_list) {
    // 객체 만들기
    const obj = { 'even': 0, 'odd': 0}
      // 배열 순회하면서 객체에 넣기
      // 짝수인 경우에는 key가 odd로
      // 홀수인 경우에는 key가 even으로
    for (let i = 0; i < num_list.length; i++) {
      if (num_list[i] % 2 === 1) {
        obj['odd'] += 1
      } else {
        obj['even'] += 1
      }
    }
    
    return [obj['even'], obj['odd']]
  }