// 다트게임
function solution(dartResult) {
  const dartCalNum = [];
  const regexr = /[0-9]+/g;
  const dartNum = dartResult.match(regexr);
  const dartPlus = dartResult.split(regexr).slice(1, 4);

  const calBonus = (point, i) => {
    if (dartPlus[i][1] === "*") {
      dartCalNum[i - 1] = dartCalNum[i - 1] * 2;
      return point * 2;
    }
    if (dartPlus[i][1] === "#") {
      return point * -1;
    } else {
      return point * 1;
    }
  };

  for (let i = 0; i < 3; i++) {
    if (dartPlus[i][0] === "S") {
      dartCalNum.push(calBonus(dartNum[i], i));
    }
    if (dartPlus[i][0] === "D") {
      dartCalNum.push(calBonus(dartNum[i] ** 2, i));
    }
    if (dartPlus[i][0] === "T") {
      dartCalNum.push(calBonus(dartNum[i] ** 3, i));
    }
  }

  return dartCalNum.reduce((acc, cur) => acc + cur, 0);
}
