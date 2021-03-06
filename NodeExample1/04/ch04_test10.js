// 버퍼 객체를 크기만 지정하여 만든 후 문자열을 씀
var output = "안녕 1!";
var buffer1 = new Buffer(10); // 크기를 지정할 경우 나머지 공간이 그대로 버퍼에 남아있게 됨
var len = buffer1.write(output,'utf8');
console.log('첫 번째 버퍼의 문자열 : %s',buffer1.toString());

// 버퍼 객체를 문자열을 이용해 만듦
var buffer2 = new Buffer('안녕 2!','utf8');
console.log('두 번째 버퍼의 문자열 : %s',buffer2.toString());

// 타입 확인 - isBuffer() : 변수에 들어있는 것이 버퍼객체인지 아닌지 판단 
console.log('버퍼 객체의 타입 : %s', Buffer.isBuffer(buffer1));

// 버퍼 객체에 들어 있는 문자열 데이터를 문자열 변수로 만듦
var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString('utf8',0,byteLen);
var str2 = buffer2.toString('utf8');

// 첫 번째 버퍼 객체의 문자열을 두 번째 버퍼 객체로 복사
buffer1.copy(buffer2,0,0,len);
console.log('두 번째 버퍼에 복사한 후의 문자열 : %s',buffer2.toString('utf8'));

// 두 개의 버퍼를 붙여줌
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('두 개의 버퍼를 붙인 후의 문자열 : %s',buffer3.toString('utf8'));