// Express 기본 모듈 불러오기
// express 모듈은 웹 서버를 위해 만들어진 것으로 http 모듈 위에서 동작!! 즉, 같이 불러와야함
var express = require('express'),
    http = require('http');

// 익스프레스 객체 생성
var app = express();

// 기본 포트를 app 객체에 속성으로 설정
app.set('port',process.env.PORT || 3000); // process.env 객체에 Port속성이 있으면 그 속성을 사용 / 없으면 3000번 포트 번호 사용!

// Express 서버 시작
// http모듈에 정의된 createServer()메소드를 호출하는데, 파라미터로 app변수를 전달
// createServer()메소드를 호출하여 만든 객체에 들어 있는 listen()메소드를 호출하면 웹 서버 시작
http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스 서버를 시작했습니다:'+app.get('port'));
});
