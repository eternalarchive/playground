// 15. 정삼각형 출력하기
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
// 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
var line = 5;

for (var i = 0; i < line; i++) {
  var star = '';
  // pattern 4
  for (var j = 0; j < line; j++) {
    if (i + j >= line - 1) star += '*';
    else star += ' ';
  }
  // pattern 1
  for (var k = 0; k < i; k++) {
    star += '*';
  }
  star += '\n';
  console.log(star);
}


// if문 없이 정삼각형 출력하기 - 다시 해보자
// for (var i = 0; i < line; i++) {
//   var star = '';
//   // for (var j = line * 2 - 1; j > i * 2; j--) {
//   //   star += '0';
//   // }
//   for (var k = i * 2; k < line * 2 - 1; k++) {
//     star += '*';
//   }
//   star += '\n';
//   console.log(star);
}
