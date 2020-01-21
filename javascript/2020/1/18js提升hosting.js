/*
* 提升是js将声明移至顶部的默认行为。如var x;初始化如var x = 1;赋值则不会被提升。
* let和const声明的变量和常量不会被提升！
* 为避免bug，始终在顶部声明所有变量。
* 严格模式"use strict"不允许在未被声明的情况下使用变量。
*/