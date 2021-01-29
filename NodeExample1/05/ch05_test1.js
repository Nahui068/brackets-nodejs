var http = require('http');

// 웹 서버 객체 만듦
var server = http.createServer();

// 웹 서버를 시작하여 3000번 포트에서 대기
var port = 3000;
server.listen(port,function(){
    console.log('웹 서버가 시작되었습니다. : %d',port); // 웹 서버가 시작되면 호출
});

// 웹 서버를 시작하여 ip와 3000번 포트에서 대기하도록 설정
var host = '192.168.35.41';
var port = 3000;
server.listen(port,host,'50000',function(){
    console.log('웹 서버가 시작되었습니다. : %s, %d',host,port);
})