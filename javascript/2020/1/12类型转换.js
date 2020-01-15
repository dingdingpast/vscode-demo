//      数据类型
// 1字符串string
// 2数字number
// 3布尔boolean
// 4对象object
// 5函数function
// 
//       对象类型
// 对象object
// 日期date
// 数组array
// 
// 不能包含值的数据类型：null、undefined。
// 
// typeof：确定js变量的数据类型,。typeof不是变量，属于运算符（同+-*/),运算符没有数据类型，始终返回字符串（包含运算符类型），
// 
// NaN是数值、数组是对象、日期是对象、null是对象、尚未赋值的变量或未定义的变量是undefined。
// 
// constructor：返回所有js变量的构造函数。注意父级
// 例如：
function isArray(myArray){
    return myArray.constructor.toString().indexOf('Array') > -1;//检查某个对象是否为数组
}
// 。
//  
// 全局方法String()把数字转换为字符串。 数字方法toString()同理。可用于任意类型的数字文字变量或表达式。
// String(x); String(123); String(123+23); 
// x.toString(); (123).toString(); (123+23).toString(); 
//  
// 把布尔转换为字符串
// String(false) // false.toString();
// 
// 日期转换为字符串
// String(Date())//返回当前时间以字符串写
// 
// 把字符串转换为数值Number()，空的字符串转换为0，其他字符串转换为NaN（not a number//不是数字）
// Number('3.14');//返回3.14
// Number(' ');//返回0
// Number('88 99')//返回NaN
// 
// 一元的 + 运算符用于把变量转换为数字。使用变成数字，无数字可供转换则返回值为NaN
// var y = '5';// y is string
// var x = + y;// x is number
// 
// 布尔转换为number   number(false);//return 0;   number(true);//return 1;
// 
// 日期转换为number   d = new Date(); Number(d);// return Date String;    d = new Date(); d.getTime()// return Time Sting;
// 
/*
原始值         转换为数字	 转换为字符串	     转换为逻辑
false           0            "false"             false
true            1            "true"              true
0               0            "0"                 false
1               1            "1"                 true
"0"             0            "0"                 true
"000"           0            "000"               true
"1"             1            "1"                 true
NaN             NaN          "NaN"               false
Infinity        Infinity     "Infinity"          true
-Infinity -     Infinity     "-Infinity"         true
""              0            ""                  false
"20"            20           "20"                true
"twenty"        NaN          "twenty"            true
[]              0            ""                  true
[20]            20           "20"                true
[10, 20]        NaN          "10,20"             true
["twenty"]      NaN          "twenty"            true
["t","y"]       NaN          "t,y"               true
function (){}   NaN         "function(){}"       true
{}              NaN          "[object Object]"   true
null            0            "null"              false
undefined       NaN          "undefined"         false
*/