function solution(arr) {
  let answer = 0;
  answer = arr.reduce((pre, cur, index) => arr.length - 1 === index ? (pre + cur) / arr.length : pre + cur);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 6, 3, 4, 5]));
console.log(solution([4, 7, 3, 48, 9]));
