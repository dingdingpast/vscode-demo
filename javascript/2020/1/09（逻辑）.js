/*
布尔值true  false 可以是对象

boolean(10 > 0);//结果为true，可以省略函数直接写10>0

等于          ==
小于          <
大于等于      >=
大于          >
小于等于      <=
绝对等于      ===
不等于        !=
与            &&
或            ||
非            ！

*/
// false，undefined，null，NuN == false

function myFunction() {
    var vot,age;
    age = Number(document.getElementById("age").value);

    if(isNaN(age)) {
        vot = "输入错误：请输入正确的年龄（阿拉伯数字）"
    }else{
            vot = (age < 18) ? "未成年" : "已成年"; //对比数据的写法
    }
    document.getElementById("demo").innerHTML = vot;
}

// Boolean对象属性
// constructor:     返回对创建此对象的Boolean函数的引用
// prototype:       是有能力像对象添加属性和方法

// Boolean对象方法
// toSource():      返回该对象的源代码
// toString():      把逻辑值转换为字符串，并返回结果
// valueOf():       返回Boolean对象的原始值
