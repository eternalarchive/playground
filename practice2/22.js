// 22. 평균 구하기
// 배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

function average(array) {
  let result = 0;
  result = array.reduce((pre, cur, index) => array.length - 1 === index ? (pre + cur) / array.length : pre + cur);
  return result;
}

console.log(average([5, 3, 4]));
