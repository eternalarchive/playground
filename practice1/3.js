// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

for (var i = 0; i < 10; i++) {
  var space = '';
  if (i !== 0 && i % 2 === 0) console.log(i + space);
}
