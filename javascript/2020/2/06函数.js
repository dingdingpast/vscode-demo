/* 
JavaScript 函数是通过 function 关键词定义的。
*   您可以使用函数声明或函数表达式。
*   函数声明：
        function functionName(parameters) {
          要执行的代码
        }//被声明的函数不会直接执行。当被调用时执行。
*   函数表达式：
        var x = function(a,b){return a * b};//匿名函数，使用变量名调用。
*   function构造器：
        var myFunction = function(a,b) {return a * b};
    函数提升：
        myFunction(5);

         function myFunction(y) {
             return y * y;
         }//函数能在声明之前被调用。
        使用表达式定义的函数不会被提升。
*   自调用函数：
         (function () {
             var x = "a";//我调用我自己
         })();//函数自动执行，无法对函数声明进行自调用。
*   箭头函数：
        可以用简短的语法来编写函数表达式。
        箭头函数没有自己的this。它们不适合定义对象方法。
        箭头函数不被提升。必须在使用前进行定义。
        如果函数是单个语句。则只能省略return和大括号。
        IE11或更早的版本不支持箭头函数。
*/

/*
JavaScript函数参数：
*   JavaScript函数不会对参数值进行任何检查。
*   参数规则：
        JavaScript 函数定义不会为参数（parameter）规定数据类型。
        JavaScript 函数不会对所传递的参数（argument）实行类型检查。
        JavaScript 函数不会检查所接收参数（argument）的数量。
*   参数默认
        如果调用参数时省略了参数（少于被声明的数量），则丢失的值被设置为：undefined。
        如果函数调用的参数太多（超过声明），则可以使用 arguments 对象来达到这些参数。
*   arguments 对象
        JavaScript 函数有一个名为 arguments 对象的内置对象。
        arguments 对象包含函数调用时使用的参数数组。
*   参数通过值传递
        函数调用中的参数（parameter）是函数的参数（argument）。
        JavaScript 参数通过值传递：函数只知道值，而不是参数的位置。
        如果函数改变了参数的值，它不会改变参数的原始值。
        参数的改变在函数之外是不可见的。
*   对象是由引用传递的
        在 JavaScript 中，对象引用是值。
        正因如此，对象的行为就像它们通过引用来传递：
        如果函数改变了对象属性，它也改变了原始值。
        对象属性的改变在函数之外是可见的。
*/

/* 
JavaScript函数Call()
        方法重用
                使用 call() 方法，可以编写能够在不同对象上使用的方法。
        JavaScript call() 方法
                call() 方法是预定义的 JavaScript 方法。
                它可以用来调用所有者对象作为参数的方法。
                通过 call()，您能够使用属于另一个对象的方法。
                call() 方法可接受参数。
                var person = {
                fullName: function() {
                        return this.firstName + " " + this.lastName;
                }
                }
                var person1 = {
                firstName:"Bill",
                lastName: "Gates",
                }
                var person2 = {
                firstName:"Steve",
                lastName: "Jobs",
                }
                person.fullName.call(person1,"seattle");  // 将返回 "Bill Gates"
*/

/* 
JavaScript 函数 Apply
        方法重用
                通过 apply() 方法，能够编写用于不同对象的方法。
        JavaScript apply() 方法
                apply() 方法与 call() 方法非常相似
        call() 和 apply() 之间的区别
                call() 方法分别接受参数。
                apply() 方法接受数组形式的参数。
                如果要使用数组而不是参数列表，则 apply() 方法非常方便。
        JavaScript 严格模式
                在 JavaScript 严格模式下，
                如果 apply() 方法的第一个参数不是对象，
                则它将成为被调用函数的所有者（对象）。在“非严格”模式下，它成为全局对象。
*/