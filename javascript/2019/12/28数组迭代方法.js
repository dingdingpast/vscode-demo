//  数组
/*
var fruits = ["banana","apple","orange","watermelon"];
function myFunction () {
        fruits.sort(); //对数组元素进行排序(a-z)数字会以开头大小为准9-0
        document.getElementById("deco").innerHTML = fruits;
        fruits.reverse(); //反转数组
        document.getElementById("demo").innerHTML = fruits;
}
*/

// var points = [40,5,50,60,100,3,18];
/*
function myFunction() {
    points.sort(function(a,b) { return  a - b  } );//函数内对数字进行比值，降序为return b-a
    document.getElementById("demo").innerHTML = points;
}
*/

// //  随机排序
// var points = [50,40,60,80,20,100];
// points.sort(function(a,b){return 0.5 - Math.random()});

// var points = [50,40,60,80,20,100];
/* 
function myFunction(arr) {
    return Math.max.apply(null.arr);
}//  查找最高值，Max.min查最小值   Math.max.apply==Math.max
*/

// //  Array.forEach() 回调函数
/*
var text = "";
var numbers = [45,4,5,16,25];
numbers.forEach.(myFunction);

function myFunction(value,index,array){
    txt = txt + value + "<br>";
} // 可接受三个参数：项目值、项目索引、数组本身。
*/

//  Array.map(value,index,array)对每个数组执行函数来创建新数组
// var numbers1 = [32,35,235,52];
// var numbers2 = numbers1.map(myFunction);
// document.getElementById("demo").innerHTML(numbers2);
// function myFunction(value) {
//     return value * 2;
// }

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// // document.getElementById("demo").innerHTML = numbers2;

// function myFunction(value) {
//     return value * 2;
// }
// console.log(numbers2)
/* //  Array.filter(value,index,array)创建一个包含通过测试的数组元素的新数组。
var myNum =[34,34,25,73,34];
var over34 = numbers.filter(myFunction);
function myFunction(value) {
    return value > 34;//输出大于34的数值新数组
}
*/

/*  //  Array.reduce(total,value,index,array)在每个数组元素上运行函数，以生成（减少）单个值，从左到右。另有reduceRight（）
var numbers1 = [324,523,63,7,3,53];
var numbers2 = numbers1.reduce(myFunction);
function myFunction(total,value) {
    return total + value //数组内元素总和
}
console.log(numbers2)//result:973
*/

// Array.reduceRight(total:总数,value：项目值,index：项目索引,array：数组本身)从左到右工作，在每个数组元素运行元素，以生成（减少）单个值。
/* 
var numbers1 = [324,523,63,7,3,53];
var numbers2 = numbers1.reduceRight(myFunction);
function myFunction(total,value) {
    return total + value //数组内元素总和
}
console.log(numbers2)//result:973
*/

// Array.every(value,index,array):检查所有数组是否通过测试。
// var numbers1 = [324, 523, 63, 7, 3, 53];
// var numbers2 = numbers1.every(myFunction);
// function myFunction(value) {
//     return value > 100
// }
// console.log(numbers2)//result:false

// Array.some(value,index,array):检查数组中某些值是否通过测试
// var numbers1 = [324, 523, 63, 7, 3, 53];
// var overNumber = numbers1.some(myFunction);
// function myFunction(value) {
//     return value > 70 ;
// }
// console.log(overNumber)//结果为true

// Array.indexOf(item,start):检索元素并返回其位置。item(必需)要检索的项目。start(可选)从哪里开始搜索。 负值将从结尾开始的给定位置开始， 并搜索到开头。
// var some = ['flag','egg','white','stupid'];
// var someOf = some.indexOf('stupid');
// console.log(someOf);//结果为：3

// Array.lastIndexOf(item,start):类indexOf,从数数组结尾开始搜索，打印顺序相同
// var some = ['flag','egg','white','stupid'];
// var someOf = some.lastIndexOf('flag');
// console.log(someOf);//结果为：0

// Array.find(value,index,array)：返回通过测试函数的第一个数组元素的值。
var numbers = [3,6,2,66,77];
var first = numbers.find(myFunction);
function myFunction(value,index,array) {
    return value > 50
}
console.log(first);//结果为：66

// Array.findIndex(value,index,array):返回通过测试函数的第一个数组元素的索引。
var myFirst = numbers.findIndex(liFunction);
function liFunction(value,index,array) {
    return value >50
}
console.log(myFirst);//、结果为：3