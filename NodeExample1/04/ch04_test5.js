var fs = require('fs');

// 파일을 동기식 IO로 읽어들임
var data = fs.readFileSync('./package.json','utf-8');

// 읽어들인 데이터 출력
console.log(data);