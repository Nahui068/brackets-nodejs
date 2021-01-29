var fs = require('fs');

// 파일에서 데이터를 읽어 들입니다.
fs.open('./output.txt','r',function(err,fd){ // fd : 연결된 대상 파일의 정보를 담고 있는 파일 디스크립터 객체
    if(err) throw err;
    
    var buf = new Buffer(10); // buffer객체는 바이너리 데이터를 읽고 쓰는 데 사용
    console.log('버퍼 타입 : %s',Buffer.isBuffer(buf));
    
    fs.read(fd,buf,0,buf.length,null,function(err,bytesRead,buffer){
        if(err) throw err;
        
        var inStr = buffer.toString('utf8',0,bytesRead);
        console.log('파일에서 읽은 데이터 : %s',inStr);
        
        console.log(err, bytesRead, buffer);
        
        fs.close(fd,function(){
            console.log('output.txt파일을 열고 읽기 완료.');
        });
    });
    
});