var fs = require('fs');

// 파일에 데이터 씀
fs.open('./output.txt','w',function(err,fd){ // 파일이름, 파일을 읽거나 쓰기 위한 플래그(쓸 것이기 때문에 w입력)
   if(err) throw err;
    
    var buf = new Buffer('안녕!\n');
    fs.write(fd,buf,0,buf.length,null,function(err,written,buffer){
        if(err) throw err;
        
        console.log(err,written,buffer);
        
        fs.close(fd,function(){
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료.');
        });
    });
    
});