function solution(n) {
  let answer = "";
  let rest = 0;
  while (n > 0) {
    rest = n % 3;
    n = Math.floor(n / 3);
    if (rest === 0) {
      rest = 4;
      n -= 1;
    }
    answer = rest + answer;
  }
  return answer;
}
