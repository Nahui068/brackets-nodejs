var http = require('http');

// 웹 서버 객체 만듦
var server = http.createServer();

// 웹 서버를 시작하여 3000번 포트에서 대기
var port = 3000;
server.listen(port,function(){
    console.log('웹 서버가 시작되었습니다. : %d',port); // 웹 서버가 시작되면 호출
});

// 클라이언트 연결 이벤트 처리(클라이언트가 웹 서버에 연결되면 connection이벤트 발생)
server.on('connection',function(socket){
    var addr = socket.address(); // socket객체는 클라이언트 연결 정보를 담고 있음(클라이언트 ip와 포트 정보 확인)
    console.log('클라이언트가 접속했습니다. : %s, %d',addr.address, addr.port);
});

// 클라이언트 요청 이벤트 처리
server.on('request',function(req,res){ // on() : 이벤트 처리할 때 사용한는 가장 기본적인 메소드
    console.log('클라이언트 요청이 들어왔습니다.');
    //console.dir(req);
    
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); // 응답으로 보낼 헤더
    res.write("<!DOCTYPE html>"); // 응답 본문 데이터
    res.write("<html>");
    res.write("<head>");
    res.write("<title>응답 페이지</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>노드제이에스로부터의 응답 페이지</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end(); // 응답을 모두 보냈다는 이야기
});

// 서버 종료 이벤트 처리(클라이언트 연결 종료)
server.on('close',function(){
    console.log('서버가 종료됩니다.');
});