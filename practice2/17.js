// 17. 하샤드 수
// 하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
// 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.

// Harshad함수는 양의 정수 n을 매개변수로 입력받는다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.
// 예를 들어 n이 10, 12, 18이면 true를 리턴 11, 13이면 false를 리턴한다.

function isHarshad(n) {
  const numArr = [...(n + '')];
  let result = 0;
  // eslint-disable-next-line no-return-assign
  numArr.map((item) => result += +item);
  return !(n % result);
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
