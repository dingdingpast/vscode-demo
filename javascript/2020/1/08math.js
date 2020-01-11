
"use strict"//严格模式

let Mr = Math.round(5.66);//返回四舍五入最为接近的整数。
console.log(Mr);//结果为：6

let Mp = Math.pow(3,2);//返回3的2次方。
console.log(Mp);//结果为：9

let Ms = Math.sqrt(81);//返回81的平方根。
console.log(Ms);//结果为：9

let Ma = Math.abs(-88);//返回-88的正值（绝对值）。
console.log(Ma);//：88

let Mc_f = Math.ceil/*上舍，下舍为floor*/(6.44);//返回上舍最接近的整数；
console.log(Mc_f);//结果为：7(下舍为6)。

//angle in radians = angle in degrees * PI / 180.  // 角度转换弧度
let M_sin = Math.sin(90 * Math.PI / 180);//返回（以弧度计）正弦（介于-1与1之间的值）。
console.log(M_sin);//结果为：1

let M_cos = Math.cos(6.123233995736766e-17); //返回（以弧度计）余弦（介于-1与1之间的值）。
console.log(M_cos);//结果为：1

let array = Math.min( 5, 321,22); //查找参数列表最低值
let berry = Math.max( 5, 321,22); //查找参数列表最高值
console.log(array,berry);//结果为5 // 结果为321

// Math属性（常量）
Math.E//返回欧拉指数
Math.PI//返回圆周率
Math.SQRT2//返回2的平方根
Math.SQRT1_2 //返回1/2的平方根
Math.LN2//返回2的自然对数
Math.LN10//返回10的自然对数
Math.LOG2E//返回以2为底的e的对数（约为1.414）
Math.LOG10E//返回以10为底的e的对数（约为0.434）

Math.random();//返回介于0和1之间的随机数

// Math 对象方法
// 方法 描述
// abs(x) 返回 x 的绝对值
// acos(x) 返回 x 的反余弦值， 以弧度计
// asin(x) 返回 x 的反正弦值， 以弧度计
// atan(x) 以介于 - PI / 2 与 PI / 2 弧度之间的数值来返回 x 的反正切值。
// atan2(y, x) 返回从 x 轴到点(x, y) 的角度
// ceil(x) 对 x 进行上舍入
// cos(x) 返回 x 的余弦
// exp(x) 返回 Ex 的值
// floor(x) 对 x 进行下舍入
// log(x) 返回 x 的自然对数（ 底为e）
// max(x, y, z, ..., n) 返回最高值
// min(x, y, z, ..., n) 返回最低值
// pow(x, y) 返回 x 的 y 次幂
// random() 返回 0~1 之间的随机数
// round(x) 把 x 四舍五入为最接近的整数
// sin(x) 返回 x（ x 以角度计） 的正弦
// sqrt(x) 返回 x 的平方根
// tan(x) 返回角的正切