var fs = require('fs');

// 파일에 데이터를 씁니다.
fs.writeFile('./output.txt','Hello World!',function(err){ // 파일이름, 파일에 쓸 내용, 작업이 끝나면 호출될 콜백함수(작업 중 오류 발생 시 콜백 함수로 오류 객체가 전달됨)
    if(err){
        console.log('Error : '+err);
    }
    
    console.log('output.txt 파일에 데이터 쓰기 완료.');
})