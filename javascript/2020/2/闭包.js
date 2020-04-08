/* JavaScript 闭包
    闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。
    JavaScript 变量属于本地或全局作用域。
    全局变量能够通过闭包实现局部（私有）。
    不通过var创建的变量总是全局的，避免污染全局:a = 1;
    全局变量存在与网页生命周期一样长，闭包内变量与函数结束一起被删除。
     */
/* var a = 3;
function myFunction() {
    let a = 2;
    console.log(a);
    
    return a * a;
    
}
// console.log(a);
var counter = 1;
function add() {
    counter += 1;
}
add();
add();
add();
console.log(counter); */
var add = (
    function() {
        var counter = 0 ;
        return function() {
            return counter += 1 ;
        }
    }
)();
add();
add();
add();