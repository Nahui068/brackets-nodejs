var util = require('util');
var EventEmitter = require('events').EventEmitter; // EventEmitter은 events 모듈안에 정의되어있음

var Calc = function(){
    var self = this;
    
    this.on('stop',function(){
        console.log('Calc에 stop event 전달됨');
    });
};

util.inherits(Calc,EventEmitter); // Calc객체가 이벤트 처리 할 수 있도록 EventEmitter를 상속하도록 함

Calc.prototype.add = function(a,b){
    return a+b;
}

module.exports = Calc; // 모듈을 불러들이는 쪽에서 Calc객체를 참조할 수 있도록 객체를 지정
module.exports.title = 'calculator'; // title의 속성 값으로 이름설정