// 메인 파일(calc.js 모듈 파일을 불러와서 사용)
// calc.js 파일을 모듈로 불러오기 위해 require()함수를 호출하여 파라미터로 모듈 파일의 이름을 전달!!
// => 파일 이름 전체를 다 사용하지 않고 확장자를 뺀 calc라는 이름만 사용
var calc = require('./calc');
console.log('모듈을 분리한 후 -calc.add 함수 호출 결과 : %d',calc.add(10,10));

var calcs = require('./calc2');
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d',calc2.add(10,10));
