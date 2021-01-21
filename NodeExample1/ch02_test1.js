var result = 0;

console.time('duration_sum');

for(var i=1; i<=1000; i++){
    result+=i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물:%d',result);

// __filename : 실행한 파일의 이름(파일의 전체 패스가 출력)
// __dirname : 실행한 파일이 들어 있는 폴더 출력(폴더의 전체 패스가 출력)
// 이 두개는 전역변수!!
console.log('현재 실행한 파일의 이름 : %s',__filename);
console.log('현재 실행한 파일의 패스 : %s',__dirname);

// dir() : 객체 안에 들어 있는 속성 확인 
var Person = {name:"소녀시대",age:20};
console.dir(Person);
