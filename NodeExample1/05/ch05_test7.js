// http모듈을 사용하여 get방식으로 다른 사이트에 데이터를 요청하는 코드
var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/'
};

var req = http.get(options,function(res){ // 다른 사이트에 요청을 보내고 응답을 받아 처리
    //응답처리
    var resData = '';
    res.on('data',function(chunk){
        resData+=chunk;
    });
    
    res.on('end',function(){
        console.log(resData);
    });
});

req.on('error',function(err){
    console.log('오류 발생 :'+err.message);
});