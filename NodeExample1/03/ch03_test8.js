var Users =[{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];

Users.push({name:'티아라', age:23}); /* 새로운 객체 생성 시 push로 넣기 */

console.log('사용자 수 : %d',Users.length);
console.log('첫 번째 사용자 이름 : %s',Users[0].name);