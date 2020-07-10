// 예산
function solution(d, budget) {
  const reqArr = d.sort((a, b) => a - b);
  const stack = [];
  for (let i = 0; i < reqArr.length; i++) {
    stack.push(reqArr[i]);
    if (stack.reduce((acc, cur) => acc + cur, 0) >= budget) break;
  }

  if (budget < stack.reduce((acc, cur) => acc + cur, 0)) stack.pop();

  return stack.length;
}
