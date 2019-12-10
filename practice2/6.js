// 6. 핸드폰번호 가리기
// 뒤 네자리를 '*'로 가리기

function hideNumbers(str) {
  const privateRang = str.length - 4;
  return str.replace(str.slice(0, privateRang), '*'.repeat(privateRang));
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888
