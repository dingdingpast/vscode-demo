// "use strict"//严格模式

Math.random();//返回随机数，大于等于0小于等于1
Math.floor();//与random一起使用
// Math.floor(Math.random() * X); //返回0至X-1之间的数。也可以写成: Math.floor(Math.random() * X)+1;//返回0至X之间的数

//返回随机数
function myRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(myRandom(0,100));