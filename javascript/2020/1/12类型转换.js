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
// 全局方法String()把数字转换为字符串。数字方法toString()同理。可用于任意类型的数字文字变量或表达式。
// 更多转换为字符串的方法: toExponential()对数字舍入，使用指数计数来写。 toFixed()对数字舍入，使用指定位数的小数来写。 toPrecision()把数字写为指定的长度。
// String(x); String(123); String(123+23);
// x.toString(); (123).toString(); (123+23).toString();
// 
