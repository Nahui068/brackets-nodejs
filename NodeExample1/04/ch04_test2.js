// process객체는 노드에서 언제든지 사용할 수 있는 객체인데 이미 내부적으로 EventEmitter를 상속받도록 만들어져 있어
// on()과 emit()메소드 바로 사용 가능 
process.on('exit',function(){ // on()메소드를 호출하면서 이벤트 이름을 exit로 지정 => 프로세스가 끝날 때를 알 수 있음
    console.log('exit 이벤트 발생함.');
});

setTimeout(function(){
    console.log('2초 후에 시스템 종료 시도함.');
    
    process.exit();
},2000);

