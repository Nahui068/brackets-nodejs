var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    // 파일을 읽어 응답 스트림과 pipe()로 연결
    // 웹 서버에서 클라이언트로부터 요청을 받으면 output.txt에서 스트림을 만든 후 
    // 클라이언트로 데이터를 보낼 수 있는 스트림과 연결
    var instream = fs.createReadStream('./output.txt');
    instream.pipe(res); // 파일에서 만든 스트림객체와 웹 서버의 스트림 객체를 pipe()메소드로 연결
});
server.listen(7001,'127.0.0.1');