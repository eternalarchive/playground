// 13. 삼각형 출력하기 - pattern 3
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
// 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
var line = 5;

for (var i = 0; i < line; i++) {
  var star = '';
  for (var j = line; j > i; j--) {
    star += '*';
  }
  star += '\n';
  console.log(star);
}
