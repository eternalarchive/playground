// 비밀지도
function solution(n, arr1, arr2) {
  const makeArr = (value) => {
    const str = "0";
    let newValue = "";
    value.length < n
      ? (newValue = str.repeat(n - value.length) + value)
      : (newValue = value);
    return newValue;
  };

  const arrFirst = arr1.map((value) => makeArr(value.toString(2)));
  const arrSecond = arr2.map((value) => makeArr(value.toString(2)));

  const finArr = arrFirst.map((value, index) =>
    makeArr(value * 1 + arrSecond[index] * 1 + "")
  );

  return finArr.map((value) => {
    return value
      .toString()
      .split("")
      .map((val) => (val * 1 ? "#" : " "))
      .join("");
  });
}
