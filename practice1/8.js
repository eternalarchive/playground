// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
var sum = 0;

for (var i = 1; i < 20; i++) {
  if (i % 2 && i % 3) sum += i;
}

console.log(sum);
