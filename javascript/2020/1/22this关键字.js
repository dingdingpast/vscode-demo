/*
this关键词指的是它所属的对象。
    它拥有不同的值，具体取决于它的使用位置。
        在方法中，this指的是所有者对象。

        单独情况下，this指的是全局对象。（在浏览器窗口中全局对象是[object Window])
        函数中，this指的是全局对象。（严格模式中是undefined）
        事件中，this指的是接收事件的元素。
    像call()和apply()这样的方法可以将this引用到任何对象
        它们都可以用于将另一个对象作为参数调用对象方法

this的主体就看这个函数（方法）带不带”.”,
如果函数和方法执行带“.”,那么this就指向”.”前面的对象，
如果不带“.”就指向window。
函数套函数的时候，不管它怎么定义，看它执行时候的主体。

*/

console.log(this);
document.getElementById("the-bt").addEventListener;
    ("click",function(){
        console.log(this);
        this.classList.add("bigger");//通过css实现
        setTimeout(() =>{
            // console.log(this);
            this.innerHTML = "clicked";
        },1000);
    });
    