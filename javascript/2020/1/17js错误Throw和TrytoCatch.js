
// try 测试代码块中的错误。
// catch 处理错误。
// throw 创建自定义错误。 throw语句用来抛出一个用户自定义的异常。 当前函数的执行将被停止（ throw之后的语句将不会执行）， 并且控制将被传递到调用堆栈中的第一个catch块。 如果调用者函数中没有catch块， 程序将会终止。throw expression 抛出异常，expression指定的异常的内容。throw语句收到自动分号插入（ASI）机制的控制，在throw关键字和值之间不允许由行终止符。
// finally 无论结果如何都能在try和catch之后执行代码。
// （错误）异常可以是js的字符串、数字、布尔或对象。

// try {
//     adlert('welcome !');//供测试的错误代码块
// }
// catch (err) {
//     document.getElementById('demo').innerHTML = err.message;//处理错误的代码块。
// }
// 抛出错误，实际上会创建两个属性的Error对象：name message。
/*
Error的name属性可返回的值
RangeError 会在您使用了合法值的范围之外的数字时抛出。
假如您使用（ 引用） 了尚未声明的变量， 则 ReferenceError 会被抛出：
假如您计算带语法错误的代码， 会 SyntaxError 被抛出：
假如您使用的值不在期望值的范围之内， 则 TypeError 被抛出：
假如您在 URI 函数中使用非法字符， 则 URIError 被抛出：
*/


function myFunction(){
    var msg, x;
    msg = document.getElementById("demo");
    msg.innerHTML = "";
    x = document.getElementById("age").value;
    try{
        if(x == "") throw "空的";
         if(isNaN(x)) throw "不是数字";
         x = Number(x);
        if(x < 5) throw "数值太小";
        if(x > 10) throw "数值太大";
    }
    catch(err){
        // msg.innerHTML = "输入是:" + err;
        alert(err);
    }
}



/*
* 创建ZipCode示例。
* 可被接受的邮政编码格式：
*   12345
*   12345-6789
*   123456789
*   12345 6789
* 如果构造函数参数传入的格式不符合以上任何一个格式，将会抛出异常。
*/
/*

function ZipCode(zip){
    zip = new String(zip);
    pattern = /[0-9]{5}[- ]?[0-9]{4}?/;
    if (pattern.test(zip)){
        //zip code value will be the first match in the string
        this.value = zip.match(pattern)[0];
        this.valueOf = function(){
            return this.value
        };
        this.toString = function () {
            return String(this.value)
        };
    }else{
        throw new ZipCodeFormatException(zip);
    }
}

function ZipCodeFormatException(value) {
    this.value = value;
    this.message = '不是正确的邮政编码';
    this.toString = function () {
        return this.value + this.message
    };
}
*/
/*
 * 可能是一个验证美国地区中的脚本
*/
/*
const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
    try{
        z = new ZipCode(z);
    }catch(e){
        if (e instanceof ZipCodeFormatException){
            return ZIPCODE_INVALID;
        }else{
            return ZIPCODE_UNKNOWN_ERROR;
        }
    }
    return z;
}

a = verifyZipCode(95060);   //return 95060
b = verifyZipCode(9560);    //return -1
c = verifyZipCode('a');     //return -1
d = verifyZipCode('95060'); //return 95060
e = verifyZipCode('95060 1234');//return 95060 1234

*/