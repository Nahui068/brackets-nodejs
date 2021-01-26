var Users=[{name:'소녀시대',age:20},{name:'걸스데이',age:22},{name:'티아라',age:23}];

console.log('배열 요소의 수 : %d',Users.length);

for(var i=0; i<Users.length; i++){
    console.log('배열요소#'+i+' : %s',Users[i].name);
}

console.log('\nforEach 구문 사용하기');
/* 파라미터 첫번째 : 배열의 요소 , 두번째 : 각 요소의 인덱스 값*/
Users.forEach(function(item,index){
    console.log('배열 요소 #'+index+' : %s',item.name);
})