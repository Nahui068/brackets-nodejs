/* 함수를 익명함수로 변수에 할당할 때는 함수를 선언하는 선언문이 아닌 일반 수식처럼 표현식이 됨
   따라서 마지막에 세미콜론을 붙혀주는게 좋음! */
var add = function(a,b){
    return a+b;
};

var result = add(10,10);
console.log('더하기(10,10) : %d',result);