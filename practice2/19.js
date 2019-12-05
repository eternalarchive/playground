// 19. 두 정수 사이의 합
// adder함수는 정수 x, y를 매개변수로 입력받는다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라.
// x와 y가 같은 경우는 둘 중 아무 수나 리턴한다. x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.
// 예를 들어 x가 3, y가 5이면 12를 리턴한다.

function adder(x, y) {
  const maxNumber = x > y ? x : y;
  const minNumber = x > y ? y : x;
  let result = 0;
  for (let i = minNumber; i <= maxNumber; i++) {
    result += i;
  }
  return result;
}

console.log(adder(3, 5));
console.log(adder(5, 1));
console.log(adder(0, 0));
