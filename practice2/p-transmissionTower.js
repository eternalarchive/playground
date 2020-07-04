// 송신탑
function solution(heights) {
  const tops = heights;
  const answer = [];

  tops.map((top, index) => {
    for (let i = 1; i < heights.length; i++) {
      if (tops[index - i] > top) {
        answer.push(index - i + 1);
        break;
      } else {
        console.log(i);
        console.log(heights.length - 1);
        i === heights.length - 1 ? answer.push(0) : answer;
      }
    }
  });
  return answer;
}
