var winston = require('winston'); // 로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file'); // 로그 일별 처리 모듈
var moment = require('moment'); // 시간 처리 모듈

function timeStampFormat(){
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS zz');
    // ex) 2016-05-01 20:14:28 .500 +0900
};

var logger = winston.createLogger({ // 로거(로그를 출력하는 객체를 말할 떄 사용) : transports라는 속성 값으로 여러 개의 설정 정보전달가능
    transports :[
        new(winstonDaily)({
            name:'info-file', // 매일 새로운 파일에 로그 기록 설정, info수준의 로그만 기록하도록 설정
            filename:'./log/server',
            datePattern:'_yyyy-MM-dd.log',
            colorize:false,
            maxsize:50000000,
            maxFiles:1000,
            level:'info', // 로그수준 : 어떤 정보까지 출력할 것인지 결정
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new (winston.transports.Console)({
            name:'debug-console',
            colorize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })
    ],
    exceptionHandlers:[
        new(winstonDaily)({
            name:'exception-file',
            filename:'./log/exception',
            datePattern:'_yyyy-MM-dd.log',
            colorize:false,
            maxsize:50000000,
            maxFiles:1000,
            level:'error',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new(winston.transports.Console)({
            name:'exception-console',
            colorize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })
    ]
});

