// 24. 평균구하기
// 인수로 주어진 배열의 평균을 구하는 함수를 완성하라.

function average(array) {
  return array.reduce((pre, cur) => pre + cur, 0) / array.length;
}

console.log(average([5, 3, 4])); // 4
