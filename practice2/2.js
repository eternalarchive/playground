// 2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.
// 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// 예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.

// (hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

// 선생님 말씀 : 이중 for문 말고 단일 for문으로 사용해보자, 지금은 찍으면서 이어붙이는거고 찍는거 따로 잇는거 따로
// 선생님 말씀 : for문 내 조건문 건들지 말고 해보자

function getCount8 () {
  let count = 0;
  let num = '';
  for (let i = 0; i <= 10000; i++) {
    num += i;
  }
  for (let j = 0; j < num.length; j++) {
    // console.log(num.charAt(j));
    if (num.charAt(j) === '8') ++ count;
  }
  return count;
}

// function getCount8 () {
//   let count = 0;
//   for (let i = 0; i <= 10000; i++) {
//     for (let j = 0; j < (i + '').length; j++) {
//       // console.log(i + '');
//       if ((i + '').charAt(j) === '8') ++count;
//       // console.log(count);
//     }
//   }
//   return count;
// }

console.log(getCount8()); // 4000
