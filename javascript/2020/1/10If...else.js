"use strict"
// if       //规定执行条件为true的代码块

// else    //规定要执行的代码块，如果相同的条件为false
// else if //规定要测试的新条件，如果第一个条件为false
// switch //规定多个被执行的备选代码块

/*
                格      式                  
if(条件){
    如果条件为true时执行的代码块;
}
*/
const age = document.getElementById('age').value
function myFunction(){
    if(age < 18,age>0){
        document.getElementById('demo').innerHTML = '未成年';
    }else if(age>18,age<100){
        document.getElementById('demo').innerHTML = '成年';
    }else{
        document.write('error');
    }
}