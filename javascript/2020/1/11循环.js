/*var cars = ['宝马','奔驰','劳斯莱斯','保时捷'];
var text = '';
var i;
// text += cars[0] + '<br>';
// text += cars[1] + '<br>';
// text += cars[2] + '<br>';
// break list;// 详见54行break语句，跳出代码块
// text += cars[3] + '<br>';
// text += cars[4] + '<br>';
// text += cars[5] + '<br>';

function myFunction(){
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + '<br>';
}
    document.getElementById('demo').innerHTML = text;
}
*/

// for:多次执行代码。

/*
    for(语句1;语句2;语句3){
        要执行的代码
    }
*/

// function myFunction(){
//     var text = '';
//     var i;
//     for (i = 0; i < 5; i++){/*i可省略，i的值在开始前设置好, ‘;’ 要保留。
//         3个语句都是可选的。
//         语句2（i<5）如返回true，循环重新开始，false则结束可省略，如省略，则必须提供一个break，否则循环不会结束。
//         语句3可做任何事情，如i--，i=i+15，或其他任何事情；语句3可被省略（比如在循环内递增值时）
//         (;i < len;)
//         */
//         text += '循环到：' + i + ';<br>';
//     }
//     document.getElementById('demo').innerHTML = text;
// }

// for/in:执行对象属性。 
// function myFunction() {
//     var text = '';
//     var nnn = {fn:'iii', ln:'ooo', ag:'ppp'};
//     var i;
//     for (i in nnn) {
//         if (i === 3) {break;}//如果i为3则跳出循环
//         if (i === 3) {continue;}//如果i为3时跳过循环，即跳过i值为3的循环
//         text += nnn[i] + ' ';
//     }
//     document.getElementById('demo').innerHTML = text;
// }

// while:当指定条件为true时循环一段代码块。
// do/while:当指定条件为true时循环一段代码块。

// break:‘跳出’循环;  continue:‘跳过’循环中的一个迭代。

//   break 和 continue 语句是仅有的可“跳出”代码块的 JavaScript 语句。
//   break labelname; ：break语句可以跳出任意代码块，没有标签引用，则只能跳出一个循环或switch。
//   continue labelname; ：continue语句无论有没有标签引用，只能用于跳出一个迭代。
//   代码块：指的时{与}之间的代码片段。  过度使用会给调试代码带来麻烦，确保标签具有说明性，同时不用嵌套太多循环。

//无标签语句
// var iNum = 0;
// for (var i = 1; i < 10; i++){
//     if(i % 5 === 0){//如果i能被5整除，跳出
//         break;
//         // continue;//以替换break
//     }
//     iNum++;
// }
// alert(iNum);//输出4(循环次数)      break替换为continue的结果为8，可能执行总数为9，当i为5时会跳过iNum++，返回循环开头

//带标签语句
var iNum = 0;
outermost:
for (var i = 0; i < 10; i++){
    for (var j = 0; j < 10; j++){
        if (i == 5 && j == 5){//当i和j均等于5时，循环终止。
            break outermost;
            // continue outermost;//以替换break outermost
        }
        iNum++;
    }
}
alert(iNum);//结果为55   continue结果为95
// 每个for语句执行10次，正常情况为执行100次，break语句可跳出内部及外部循环，continue迫使循环跳过j为5时的执行，并继续执行循环，使iNum为95。