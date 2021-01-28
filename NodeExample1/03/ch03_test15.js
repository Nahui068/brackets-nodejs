// 콜백 함수 : 함수를 실행하는데 기다리지 않고 그다음 코드를 실행한 후 연산이 끝났을 때 파라미터로 전달되는 함수
function add(a,b,callback){
    var result = a+b;
    callback(result);
}

add(10,10,function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기(10,10)의 결과 : %d',result);
})