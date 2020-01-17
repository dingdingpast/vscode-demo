
// 正则表达式是构成搜索模式的字符序列。
// 该搜索模式可用于文本搜索和文本替换操作。
// 在js中正则表达式常用于两个字符串方法：
// search（）方法使用表达式来搜索匹配，返回匹配的位置。
// replace（）方法返回模式被替换处修改后的字符串。

// 语法:/pattern/modifiers;                 是正则表达式
// 例如：/baidu/i   /baidu/g    /baidu/m;   是正则表达式
// baidu是模式（pattern）（在搜索中使用）。i是修饰符（把搜索修改为大小写不敏感）
//                                        g是修饰符（执行全局匹配（查找所有匹配而非在找到第一个匹配值后停止））
//                                        m是修饰符（执行多行匹配）

// 处理字符串并显示匹配位置str.search(' ');
// 处理字符串并替换str.replace('原文','替换文')

// 正则表达式模式
// []括号用于查找一定范围内的字符串：[abc]查找方括号之间的任何字符。
//                                  [0-9]查找任何从0-9的数字。
//                                  [x|y]查找由|分隔的任何选项。
//                                   更多字符。。。
// 元字符是拥有特殊含义的字符：\d查找数字。
//                            \s查找空白字符。
//                            \s查找空白字符。
//                            \uxxxx查找十六进制数xxxx规定的Unicode字符。
//                              更多字符。。。
// Quantifiers定义量词：n+匹配任何包含至少一个n的字符串。
//                     n*匹配任何包含零个或多个n的字符串。
//                     n？匹配任何包含零个或一个n的字符串。
//                              更多字符。。。

function myFunction(){
var str = 'I love -190% sir !';
var pat1 = /\d/g;
var result = str.match(pat1); //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
alert(result);//return 1,9,0
}
// RegExp对象在js中是带有与定义属性和方法的正则表达式对象。
// 语法/pattern/attributes;  创建RegExp对象：new RegExp(pattern,attributes);
// 参数 pattern是一个字符串，指定了正则表达式的模式或其他正则表达式。
// 参数 attributes是一个可选的字符串，包含属性 "g"、"i"和 "m"，分别用于指定全局匹配、 区分大小写的匹配和多行匹配。 
// ECMAScript 标准化之前，不支持m属性。
// 如果pattern是正则表达式，而不是字符串，则必须省略该参数。


// test()是一个正则表达式方法。通过模式来搜索字符串，根据结果返回true或false。
// exec()是一个正则表达式方法。通过指定的模式（pattern）搜索字符串，并返回已找到的的文本。如果未找到匹配则返回null