// 16. 역삼각형 출력하기
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
// 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
var line = 5;

for (var i = 0; i < line; i++) {
  var star = '';
  // pattern 2
  for (var j = 0; j < line; j++) {
    if (i <= j) star += '*';
    else star += ' ';
  }
  // pattern 3
  for (var k = line - 1; k > i; k--) {
    star += '*';
  }
  star += '\n';
  console.log(star);
}

// if문 없이 역삼각형 출력하기
// for (var i = 0; i < line; i++) {
//   var star = '';
//   for (var j = 0; j < i; j++) {
//     star += ' ';
//   }
//   for (var k = line * 2 - 1; k > i * 2; k--) {
//     star += '*';
//   }
//   star += '\n';
//   console.log(star);
// }
