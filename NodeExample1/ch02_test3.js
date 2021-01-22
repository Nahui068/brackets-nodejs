// env : 환경 변수 정보
// process.env속성 사용하려면 사용자 정의 환경 변수 뿐만 아니라 OS와 같은 시스템 환경 변수도 접근 가능
console.dir(process.env);
console.log('OS 환경 변수의 값 :'+process.env['OS']);