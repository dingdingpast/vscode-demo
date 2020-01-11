//使用switch语句选择多个被执行的代码块之一（if兄弟语句）
/*
switch(expression){//switch使用严格比较（===）
    case value:
        statement
        break; //如果执行到此代码段符合条件，break会使js跳出switch代码块，节省执行时间。
    case value:
    case value://分享共同代码块
        statement
        break;
    default:  //如果没有匹配到符合条件，则执行default。如果default不是最后一个case，用break结束默认case。
        默认statement
}
*/
function myFunction(){
    var day;
    switch(new Date().getDay()){//getDay()返回0-6（周日-周六）的数字。
        case 0:
            day = '7';
            break;
        case 1:
            day = '1';
            break;
        case 2:
            day = '2';
            break;
        case 3:
            day = '3';
            break;
        case 4:
            day = '4';
            break;
        case 5:
            day = '5';
            break;
        case 6:
            day = '6';
            break;
        default:
            text = 'Error';
}
document.getElementById('demo').innerHTML = '今天这周的第' + ' ' + day + '天。';
}