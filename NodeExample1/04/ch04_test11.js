var fs = require('fs');

var infile = fs.createReadStream('./output.txt',{flag : 'r'}); // 파일읽음
var outfile = fs.createWriteStream('./output2.txt',{flag : 'w'}); // 파일쓰기

infile.on('data',function(data){
   console.log('읽어 들인 데이터',data);
    outfile.write(data);
});

infile.on('end',function(){
    console.log('파일 읽기 종료');
    outfile.end(function(){
        console.log('파일 쓰기 종료.');
    });
});

