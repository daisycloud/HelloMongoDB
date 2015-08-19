/**
 * Created by yyzeng on 2015/8/19.
 */
var fs = require('fs')
  , data = "Some data I want to write to a file"
;

fs.writefile('file.txt', data, function(err){
    if(!err){
        console.log('Wrote data to file.txt');
    }else{
        throw err;
    }
});