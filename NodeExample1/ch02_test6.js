// 내가 직접 만든 모듈이 아닐 경우에는 상대 패스가 아닌 모듈의 이름만 지정해서 ㅂㄹ러오기
// nconf모듈은 그 모듈 안에 정의한 env()함수를 호출하면 환경 변수에 대한 정보를 가져와서 속성으로 보관
var nconf = require('nconf');
nconf.env();

console.log('OS 환경 변수의 값 : %s',nconf.get('OS'));

// npm패키지를 사용하면 다른 사람이 만들어 놓은 패키지를 다운로드하여 설치 가능
