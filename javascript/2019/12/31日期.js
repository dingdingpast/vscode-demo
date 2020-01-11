// 创建Date对象，由新的Date()构造函数创建。(0为1月，11为12月),不能省略月份，如果只提供一个参数将视为毫秒
// var d = new Date(2019, 12, 25, 10, 33, 30, 0);
// document.getElementById("demo").innerHTML = d; //Sat Jan 25 2020 10:33:30 GMT+0800 (中国标准时间)
// new Date() ; 
// new Date(year,month,hours,minutes,seconds,milliseconds) ; == new Date(year,month,...)
// new Date(milliseconds) ; 
// new Date(date string)
// var d = new Date();
// document.getElementById("demo").innerHTML = d;

// js以毫秒为单位，初始值为：1970 年 1 月 1 日 00:00:00 UTC（协调世界时）。一天（24 小时）是 86 400 000 毫秒。
// var d = new Date(0);//结果为Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)
// toUTCString():将日期转化为UTC字符串。toDateString():将日期转换为更为易读的格式。

// YYYY-MM-DD为首选javascript日期格式。添加分秒：YYYY-MM-DDTHH:mm:ss。
// 长日期通常以“MMM DD YYYY”的语法来写：（“Feb 19 2018”）；
// 短日期通常使用"MM/DD/YYYY"(月份如单位数需要加零)
// 月和天互相以任意顺序出现，月以全称（January-Jan）
// YYYY/MM/DD和DD-MM-YYYY未定义，可能会被浏览器猜测格式，有些会返回NaN
// 逗号会被忽略，对大小写不敏感

// 日期获取方法：
// 方法                     描述
//  getDate()                 以数值返回天（ 1 - 31）
//  getDay()                  以数值获取周名（ 0 - 6）
//  getFullYear()             获取四位的年（ yyyy）
//  getHours()                获取小时（ 0 - 23）
//  getMilliseconds()         获取毫秒（ 0 - 999）
//  getMinutes()              获取分（ 0 - 59）
//  getMonth()                获取月（ 0 - 11）
//  getSeconds()              获取秒（ 0 - 59）
//  getTime()                 获取时间（ 从 1970 年 1 月 1 日至今）

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getTime();

// 方法                   描述
//  setDate()              以数值（ 1 - 31） 设置日
//  setFullYear()          设置年（ 可选月和日）
//  setHours()             设置小时（ 0 - 23）
//  setMilliseconds()      设置毫秒（ 0 - 999）
//  setMinutes()           设置分（ 0 - 59）
//  setMonth()             设置月（ 0 - 11）
//  setSeconds()           设置秒（ 0 - 59）
//  setTime()              设置时间（ 从 1970 年 1 月 1 日至今的毫秒数）