/* 对象定义
*   在 JavaScript 中，对象是王。如果理解了对象，就理解了 JavaScript。
*       在 JavaScript 中，几乎“所有事物”都是对象。
*       布尔是对象（如果用 new 关键词定义）
*       数字是对象（如果用 new 关键词定义）
*       字符串是对象（如果用 new 关键词定义）
*       日期永远都是对象
*       算术永远都是对象
*       正则表达式永远都是对象
*       数组永远都是对象
*       函数永远都是对象
*       对象永远都是对象
*       所有 JavaScript 值，除了原始值，都是对象。 

*   JavaScript 原始值
*       原始值指的是没有属性或方法的值。
*       原始数据类型指的是拥有原始值的数据。
*       JavaScript 定义了 5 种原始数据类型：
*       string
*       number
*       boolean
*       null
*       undefined
*       原始值是一成不变的（它们是硬编码的，因此不能改变）。
*   关键词new
        出于简易性、可读性和执行速度的考虑，无需使用new Object()
*/

/* 对象属性
*   访问 JavaScript 属性
*       访问对象属性的语法是：
*          objectName.property           // person.age
*       或者：
*          objectName["property"]       // person["age"]
*       或者：
*          objectName[expression]       // x = "age"; person[x]
*       表达式必须计算为属性名。
*   JavaScript for...in 循环
*       JavaScript for...in 语句遍历对象的属性。
*       语法
*           for (variable in object) {
*               要执行的代码
*           }
*       for...in 循环中的代码块会为每个属性执行一次。
*   添加新属性
*       您可以通过简单的赋值，向已存在的对象添加新属性。
*       假设 person 对象已存在 - 那么您可以为其添加新属性；
*       不能使用预留词作为属性名（或方法名）。请使用 JavaScript 命名规则。
*   删除属性
*       delete 关键词从对象中删除属性
*       delete 关键词会同时删除属性的值和属性本身。
*       删除完成后，属性在被添加回来之前是无法使用的。
*       delete 操作符被设计用于对象属性。它对变量或函数没有影响。
*       delete 操作符不应被用于预定义的 JavaScript 对象属性。这样做会使应用程序崩溃。
*   属性值
*       所有属性都有名称。此外它们还有值。
*       值是属性的特性之一。
*       其他特性包括：可列举、可配置、可写。
*       这些特性定义了属性被访问的方式（是可读的还是可写的？）
*       在 JavaScript 中，所有属性都是可读的，但是只有值是可修改的（只有当属性为可写时）。
*       （ECMAScript 5 拥有获取和设置所有属性特性的方法）
*   原型属性
*       JavaScript 对象继承了它们的原型的属性。
*       delete 关键词不会删除被继承的属性，但是如果您删除了某个原型属性，则将影响到所有从原型继承的对象。
*/

/* 对象方法
*   this 关键词
*       在 JavaScript 中，被称为 this 的事物，指的是拥有该 JavaScript 代码的对象。
*       this 的值，在函数中使用时，是“拥有”该函数的对象。
*       请注意 this 并非变量。它是关键词。无法改变 this 的值。
*   访问对象方法
*       请使用如下语法创建对象方法：
*       methodName : function() { 代码行 }
*       请通过如下语法来访问对象方法：
*       objectName.methodName()
*       如果访问 function属性时没有使用 ()，则将返回函数定义
*  内建方法
*  添加新的方法
*/

/*
对象访问器
    JavaScript访问器（getter 和setter 在es5中引入）
        getter（get关键字）：获取属性值
        setter（set关键字）：设置属性值
            比较函数和getter访问，getter更简洁
            var person = {
                fName: "Bill",
                lName: "Gates",
                fullName: function() {
                    return this.fName + " " + this.lName;
                }
            };alert (person.fullName());
            var person = {
                fName: "Bill",
                lName: "Gates",
                get fullName() {
                    return this.fName + " " + this.lName;
                }
            };alert (person.fullName);
        为什么使用 Getter 和 Setter？
            它提供了更简洁的语法
            它允许属性和方法的语法相同
            它可以确保更好的数据质量
            有利于后台工作
            Object.defineProperty() 方法也可用于添加 Getter 和 Setter：
*           实例
*           // 定义对象
*           var obj = {counter : 0};
*           
*           // 定义 setters
*           Object.defineProperty(obj, "reset", {
*             get : function () {this.counter = 0;}
*           });
*           Object.defineProperty(obj, "increment", {
*             get : function () {this.counter++;}
*           });
*           Object.defineProperty(obj, "decrement", {
*             get : function () {this.counter--;}
*           });
*           Object.defineProperty(obj, "add", {
*             set : function (value) {this.counter += value;}
*           });
*           Object.defineProperty(obj, "subtract", {
*             set : function (value) {this.counter -= value;}
*           });
*           
*           // 操作计数器：
*           obj.reset;
*           obj.add = 5;
*           obj.subtract = 1;
*           obj.increment;
*           obj.decrement;
*/

/* 
JavaScript 对象构造器（用大写首字母对构造器函数命名）
    对象类型（蓝图）（类）
        前一章的实例是有限制的。它们只创建单一对象。
        有时我们需要创建相同“类型”的许多对象的“蓝图”。
        创建一种“对象类型”的方法，是使用对象构造器函数。
    this 关键词
        在 JavaScript 中，被称为 this 的事物是代码的“拥有者”。
        this 的值，在对象中使用时，就是对象本身。
        在构造器函数中，this 是没有值的。它是新对象的替代物。 当一个新对象被创建时，this 的值会成为这个新对象。
        请注意 this 并不是变量。它是关键词。您无法改变 this 的值。
    为对象添加属性
        maFather.nationality = "English";
    为对象添加方法
        myFather.name = function () {
             return this.firstName + " " + this.lastName;
        };
*/


/* 
JavaScript 对象原型
        原型继承
            所有 JavaScript 对象都从原型继承属性和方法。
            日期对象继承自 Date.prototype。数组对象继承自 Array.prototype。Person 对象继承自 Person.prototype。
            Object.prototype 位于原型继承链的顶端：
            日期对象、数组对象和 Person 对象都继承自 Object.prototype。
        prototype属性
            添加新属性：Person.prototype.nationality = "English";
            添加新方法：Person.prototype.name = function() {
                return this.FirstName;
            };
        只允许修改自己的原型。不要修改标准JavaScript对象的原型。
*/ 
