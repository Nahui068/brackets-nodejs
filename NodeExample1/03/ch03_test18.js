// 자바스크립트에서는 함수도 객체!!
function Person(name,age){
    this.name = name;
    this.age = age;
}

// Person객체에 walk함수를 속성으로 추가
// Person 객체 안에 있는 prototype 속성에 데이터나 함수를 속성으로 추가하면
// 실제 인스턴스 객체를 만들 때 메모리를 효율적으로 관리할 수 있음
Person.prototype.walk = function(speed){
    console.log(speed+'km 속도로 걸어갑니다.');
}

var person01 = new Person('소녀시대',20);
var person02 = new Person('걸스데이',22);

console.log(person01.name + '객체의 walk(10)을 호출합니다.');
person01.walk(10);