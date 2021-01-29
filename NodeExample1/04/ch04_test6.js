var fs = require('fs');

// 파일을 비동기식 IO로 읽어 들입니다.
// readFile()메소드를 실행하면서 세 번째 파라미터로 전달된 함수는 파일을 읽어 들이는 작업이 끝났을 때 호출
fs.readFile('./package.json','utf8',function(err,data){ 
    //읽어들인 데이터 출력
    console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');