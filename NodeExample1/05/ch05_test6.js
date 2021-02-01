var http = require('http');
var fs = require('fs');

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

    var filename = 'house.png';
    var infile=fs.createReadStream(filename,{flag:'r'});
    var filelength = 0;
    var curlentgh = 0;
    
    // 파이프로 연결하여 알아서 처리하도록 설정
    // 이러한 방법으로 하면 헤더를 설정할 수 없는 제약이 생기므로 필요할 때만 사용!
    //infile.pipe(res);
    
    fs.stat(filename,function(err,stats){
        filelength = stats.size;
    });
    
    // 헤더 쓰기
    res.writeHead(200,{"Content-Type":"image/png"});
    
    // 파일 내용을 스트림에서 읽어 본문 쓰기
    infile.on('readable',function(){
        var chunk;
        while (null != (chunk = infile.read())){
            console.log('읽어 들인 데이터 크기 : %d 바이트',chunk.length);
            curlentgh += chunk.length;
            res.write(chunk,'utf8',function(err){
                console.log('파일 부분 쓰기 완료 : %d, 파일 크기 : %d',curlentgh,filelength);
                if(curlentgh >= filelength){
                    // 응답 전송하기
                    res.end();
                }
            });
        }
    });
});


// 서버 종료 이벤트 처리(클라이언트 연결 종료)
server.on('close',function(){
    console.log('서버가 종료됩니다.');
});