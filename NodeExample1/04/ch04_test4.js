var Calc = require('./calc3');

var calc = new Calc();
calc.emit('stop');

console.log('Clac.title'+'에 stop 이벤트 전달함');