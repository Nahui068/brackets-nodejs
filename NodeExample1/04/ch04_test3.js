process.on('tick',function(count){
    console.log('tick 이벤트 발생함 : %s',count);
});

setTimeout(function(){
    console.log('2초 후에 tick이벤트 전달 시도함');
    
    process.emit('tick',2); // tick이벤트를 process 객체로 전달
},2000);
