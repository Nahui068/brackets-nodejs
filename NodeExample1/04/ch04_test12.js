var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname,function(exists){
    if(exists){
        fs.unlink(outname,function(err){ // 파일을 다시 만들기 전 이름이 중복되면 삭제 후 생성
            if(err) throw err;
            console.log('기존 파일 ['+outname+'] 삭제함.');
        });
    }
    
    var infile = fs.createReadStream(inname, {flag:'r'});
    var outfile = fs.createWriteStream(outname,{flag:'w'});
    infile.pipe(outfile); // pipe() : 두 개의 스트림을 붙혀주는 역할
    console.log('파일 복사 [' +inname+'] -> ['+outname+']'); // 비동기 방식으로 처리
})