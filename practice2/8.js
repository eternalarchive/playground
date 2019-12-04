// 8. 수박수박수박수박수박수?

function waterMelon(n) {
  let result = '';
  const watermelonArr = ['수', '박'];
  for (let i = 0; i < n; i++) {
    result += ((i + 1) % 2) ? watermelonArr[0] : watermelonArr[1];
  }
  return result;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));
