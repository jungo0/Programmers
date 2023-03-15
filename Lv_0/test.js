const cartoons = [
    {
      id: 1,
      bookType: 'cartoon',
      title: '식객',
      subtitle: '어머니의 쌀',
      createdAt: '2003-09-09',
      genre: '요리',
      artist: '허영만',
      averageScore: 9.66,
    },
    {
      id: 2,
      // .. 이하 생략
    },
    // ... 이하 생략
  ]; 
  
  // 단행본 한 권의 출판 연도가 2003인지 확인하는 함수
  const isCreatedAt2003 = function (cartoon) {
    const fullYear = new Date(cartoon.createdAt).getFullYear()
    return fullYear === 2003;
  }; 
  
  // 출판 연도가 2003년인 책의 모음
  const filteredCartoons = cartoons.filter(isCreatedAt2003); 