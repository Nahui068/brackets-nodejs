var fs = require('fs'); // 파일을 읽어들이는 것 뿐만 아니라 파일을 쓰는 기능까지 fs모듈에 정의

// 파일을 비동기식 IO로 읽어 들입니다.
// readFile()메소드를 실행하면서 세 번째 파라미터로 전달된 함수는 파일을 읽어 들이는 작업이 끝났을 때 호출
// 이때 두 개의 파라미터 err와 data를 전달받아서 오류가 발생했는지 아니면 제대로 실행되었는지 알 수 있음
fs.readFile('./package.json','utf8',function(err,data){ 
    //읽어들인 데이터 출력
    console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');