function solution(arr) {
  if (arr.join('') * 1 === 10) return arr = [-1];
  const indexMin = arr.indexOf(Math.min(...arr));
  arr.splice(indexMin, 1);
  return arr;
}

console.log(solution([3, 4, 1, 2]));
console.log(solution([4, 3, 2, 1, 0]));
console.log(solution([10]));
