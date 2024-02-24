# JS高级

## EC和作用域链

### 代码段

一个script标签就是一个代码段
每一个代码段之间是彼此独立的，如果上面的代码段报错了，是不会影响下面的代码段
在一张页面中，可以有多个代码段

```js
var a = 110;
console.log(a);

// 使用了一个没有声明的变量，就会报错：c is not defined
// console.log(c);

// ReferenceError 引用错误
// 对于引用错误来说，同一个代码段如果报了引用错误，错误下面的代码就停止执行
console.log(a);

// 报错了  b is not defined
console.log(b);
```

### 预解析

JS代码在执行时，是分两个阶段：
- 预解析  也叫预编译
- 代码执行 就一行一行执行 只有等到预解析结束后，才会进行代码执行
说白了,就是浏览器把你的JS代码进行加工后,再去执行,这个加工的过程,就是所谓的预编译

预解析期间做了什么？
- 声明要提升   加var的变量要提升,提升的是声明,没有赋值,function声明的函数整体要提升 提升到了代码段最前面
- 如果在函数内部的局部变量,就提升到函数内部的最前面
特别需要注意：加var的变量,仅仅是提升声明,函数提升的不仅是声明,还有赋值

```js
console.log(a);
var a = 110;
console.log(a);

// 这里只所以能调用，原因是函数整体都提升
fn();

function fn(){
	console.log("我是一个函数");
}
```

```js
// 这里会报错   g is not funciton
// 加var的变量提升的仅仅是声明，没有提升赋值
// g的值是und   und()直接报错了
// TypeError: g is not a function    
g();

// 函数表达式
// 本质是一个变量  var是用来声明变量的
// 这个变量的值是函数   函数也是一种数据
var g = function(){
    console.log("g....");
};
```

```js
// i是全局变量，还是局部变量？
// 答：全局变量
console.log(i);
for(var i=0; i<10; i++){};
console.log(i);
```

```js
// a是全局变量
var a = 666;
fn()
function fn() {
	// 函数内部加var的变量，也要提升
	// 提升到函数内部的最前面
	var b = 777;
	console.log(a);  // und 
	console.log(b);  // 777
	console.log(c);  // und
	var a = 888;  // 局部变量
	var c = 999;
}
```

```js
// 预编译：
// 提升：
// var  value要提升   value的值是und
// value函数整体要提升
// 如果变量名函数名一样，变量提升了，函数也提升了，提升后，只可能存在一个名字
// 当函数也提升后，value的值从之前的und就变成了函数
console.log(value);
var value = 123;
function value() {
	console.log("我是value函数...");
}
console.log(value);
```

```js
// 提升：加var的变量，和 funtion声明的函数
// ReferenceError: a is not defined
console.log(a);
a = 666;
console.log(a);  // 报了一个引用错误，下面的代码，就不会执行了
```

```js
function fn() {
	// ReferenceError: a is not defined
	console.log(a);
	a = 666;
	console.log(a);
}
fn();
console.log(a);
```

```js
function fn() {
	a = 110;
}
// ReferenceError: a is not defined
console.log(a);
```

```js
function fn() {
	// 没有加var的变量，都是全局变量，
	// 全局变量，在函数内外都可以访问
	a = 110;
}
fn();
console.log(a);  // 110
```
```js
gn()
function gn() {
	// k是局部变量
	var k = 123;
	console.log(k);
}
// k is not def 引用错误
console.log(k);
```
### 代码执行产生EC和GO
内存中分很多区:我们需要掌握两个区
- 栈区: 存储基本数据类型
- 栈区: 存储引用数据类型,地址存储在栈区
JS代码分两类：
- 全局代码: 默认进入script标签,就会执行全局代码
- 函数代码: 一个函数就是一个局部的函数代码

ECG,EC,ECS
- ECG(全局的执行上下文):全局代码执行时，就会产生全局的执行上下文(Execution Context Globl)
- EC:每当调用一个函数,就产生一个局部的执行上下文
- ECS:执行上下文产生，都需要放到一个栈中,这个栈叫执行上下文栈(Execution Context Stack)
当函数调用完毕,函数的EC就要出栈的,当ECG执行完毕,ECG也要出栈
- EC的作用：给代码提供数据，代码中需要的数据，都从EC中的找

GO
- JS代码在执行时，会在堆内存中创建一个全局对象,Global Object
在浏览器中,这个GO,说白了,就是Window,是一个全局对象,我们常用的js内置对象都挂载到GO上
如：Date, Array, String, Number, setTimeout, alert....
--------------------------------------
声明的全局变量和在全局代码中写的函数，都会挂载到GO上

```js
// a和b位于全局代码中
var a = 1;
var b = 2;
function fn(){
    // c和d是位于局部代码中的
    var c = 3;
    var d = 4;
}
// fn();
var a = 110;
var b = 220;
console.log(window.a);
console.log(window.b);

function fn() {
	console.log("fn...");
}
console.log(window.fn());

var GO = {
	String, 
	Date, 
	setTimeout, 
	alert, 
	// ......
	a, 
	b,
	fn 
	// .....
}
```

```js
// GO:包含人家内置的属性，和 我们自己定义的全局变量和全局函数
// EC的作用：给代码提供数据的
var n = 110;
console.log(n);  // 找n  去ECG中的找  ECG中有VO，说白了，就是GO
console.log(window.n);  // 直接去GO中找，有，找到了
m = 220;   
console.log(m);  // 找m   去ECG中的找   GO中有m   找到了220
// console.log(x);  // 找x     去ECG中的找   找不到   报错了   x is not defiend

console.log(name);  // 找name
```

```js
function fn(a){
	console.log(a);
}
fn(100);
console.log(a);
```

```js
var a = 1;
var b = "hello";

function fn(){
	console.log("fn...");
}

var arr = ["a","b","c"];
var obj = {name:"wc",age:18}
```

```js
var arr = [11, 22];
function fn(arr) {
	arr[0] = 100;
	arr = [666];
	arr[0] = 0;
	console.log(arr);
}
fn(arr);
console.log(arr);
```
### 执行上下文练习题

```js
var a = 1;
var b = 1;
function gn() {
	console.log(a, b);
	var a = b = 2;  // var a = 2; b = 2;
	// var a = 2, b = 2; // var a = 2; var b = 2;
	console.log(a, b);
}
gn();
console.log(a, b);
```

```js
var a = 1;
var obj = { uname: "wangcai" }
function fn() {
	var a2 = a;
	obj2 = obj;
	a2 = a;
	obj.uname = "xiaoqiang";
	console.log(a2);
	console.log(obj2);
}
fn();
console.log(a);
console.log(obj);
```

```js
// 加var的同名变量，只会提升一个
// var a = 1;
// var a = 2;
// var a = 3;
// console.log(a);

var a;
a = 1;
a = 2;
a = 3;
console.log(a);
```

```js
// 变量先提升 a: und
// 函数再提升 fn a()

// 提升完后赋值,赋值为1
var a = 1;
function a() {
    console.log("a...");
}
console.log(a);//1
```

- 在JS中函数是一等公民
```js
function a() {
	console.log("a...");
}
var a;
console.log(a);// a() {}
```
```js
var a;
function a() {
	console.log("a...");
}
console.log(a);// a() {}
```

```js
var a = 10;
// 把栈区中a对应的数据10  copy一份给b 
// a和b分别对应两个内存空间  没有关系
var b = a;
console.log(a, b);
b = 1;
console.log(a, b);
```

```js
var a = [1, 2];
var b = a;
console.log(a, b);
b = [3, 4];
console.log(a, b); // [1,2] [3,4]
```

```js
var a = [1, 2];
var b = a;
console.log(a, b);
b[0] = 110;
console.log(a, b); // [110,2] [110,2]
```

```js
var a = [1, 2];
var b = [1, 2];
console.log(a == b);
console.log(a === b);
```

```js
var a = 110;
var b = 110;
console.log(a == b);
```

```js
var a = [1, 2];
var b = a;
console.log(a == b);//true
console.log(a === b);//true
```

```js
console.log(a, b);
var a = b = 2;  // var a = 2; b = 2;
```

```js
var a = { m: 666 };
var b = a;
b = { m: 888 };
console.log(a.m); // 666 这里是整体给b赋值  若 b.m = 888 则a.m输入888 
```

```js
var a = { n: 12 };
var b = a;
b.n = 13;
console.log(a.n); // 13
```

```js
console.log(a);
a = 111;//caught ReferenceError: a is not defined
```

```js
var m = 1;
n = 2;
console.log(window.m);
console.log(window.n);
```

```js
function fn() {
	var a = 111;
}
fn();
console.log(a);//is not defined
console.log(window.a);
```

```js
var a = -1;
// ++a    a的值是0   ++a整体的值是0
// a++    a的值是0   a++整体的值是-1
if (++a) {
	console.log("666");
} else {
	console.log("888");
}
```

```js
console.log(a, b);// und und
if (true) {
	var a = 1;
} else {
	var b = 2;
}
console.log(a, b);// 1 und
```

```js
var obj = {
	name: "wc",
	age: 18
}
// in 是一个运算符，判断一个属性是否是一个对象的属性
// 不管是私有属性，还是公有属性
console.log("name" in obj);
console.log("score" in obj);
```

```js
var a;
console.log(a);
if ("a" in window) {
	a = 110;
}
console.log(a);
```

```js
console.log(a);// var没有块局作用域
if ("a" in window) {
	var a = 110;
}
console.log(a);// 110 
```

```js
var a = 100;
function fn() {
	console.log(a);
	return
	var a = 110;
}
fn();
```

```js
var n = 100;
function foo() {
	n = 200;
}
foo()
console.log(n);
```


```js
function fn() {
	var a = b = 100;
}
fn();
console.log(a);
console.log(b);
```

```js
var n = 100;
function fn() {
	console.log(n);
}
function gn() {
	var n = 200;
	console.log(n);
	fn(); //这里执行的fn实际父级作用域是全局作用域
  jn()
  function jn (){
    console.log(n)
  }
}
gn() // 200 100 200
console.log(n);
```

## 深入变量

### 加var的变量和不加var的变量的区别
- 加var的变量在预编译期间会提升，不加var的变量在预编译期间不会提升。
- 不管是否加var，只要是全局变量，在非严格模式下，都会挂载到GO上
- 加var的变量，可以做全局变量，也可以做局部变量，没有加var只能做全局变量。做项目时，不要使用var，更不要使用没有加var的变量。

```js
console.log(a);
var a = 110;
console.log(a);
console.log(window.a);

// console.log(b);
b = 666;
console.log(window.b);
```

### let(const)声明变量(常量)
- 1）声明的变量不能修改
- 2）使用const声明变量时，必须赋值，不然会报语法错误
- 3）const声明的变量也不会提升
- 4）const和{}也可以形成块级作用域
- 5）const声明的变量也不会挂载到GO上
- 总结： 在项目中，定义变量使用let，定义常量，使用const

```js
// ReferenceError: Cannot access 'a' before initialization
// a没有初始化（赋值），是不能访问的
// 理解成：使用let声明的变量是没有提升
// 理解成：使用let声明的变量提升了，但是没有赋值，没有赋值是不能直接访问的
console.log(a);
let a = 110;
```

```js
// let+{}可以形成块级作用域
if(true){
	// let + {} 形成块级作用域
	// 块级作用域中定义的变量，只能在块中使用
	// 出了这个块，就不能使用了
	let c = 110;
}
console.log(c);
```

```js
// 使用let声明的变量，并不会挂载到GO上
let a = 110;
console.log(window.a);
```

```js
//  SyntaxError: Identifier 'a' has already been declared 
let a = 1;
let a = 2;
console.log(a);
```

```js
function fn(a){
	// 形参相当于函数内部定义的局部变量
	// VO：AO已经有a  
	// SyntaxError: Identifier 'a' has already been declared
	let a = 110;
}
fn();

// 项目开发中，基本上都是清一色的let
// let是ES6中提出来，弥补了var声明变量的缺点
```

```js
const PI = 3.14;
PI = 666; // TypeError: Assignment to constant variable.
console.log(PI);
```

```js
// SyntaxError: Missing initializer in const declaration
const PI;
PI = 3.14;
console.log(PI);
```

### 练习题

```js
console.log(fn)  // 打印出 und
// window.fn();   // 报错  und()  
console.log(window.fn);
if ("fn" in window) {
	// 如果条件成立，进来的第1件事，就是fn赋值
	fn();  // fn...

	// 函数们于if条件中
	// 在最新版本的浏览器中，不会提升整体，仅仅是提升fn函数名
	// 就提升到了代码段的最前面
	function fn() {
		console.log("fn...");
	}
}
fn();
```

```js
fn();
function fn() { console.log(1); }
fn();
function fn() { console.log(2); }
fn();
var fn = function () { console.log(3); }
fn();
function fn() { console.log(4); }
fn();
function fn() { console.log(5); }
fn();
```

```js
var a = 12; b = 13; c = 14;
function fn(a){
	console.log(a,b,c);
	a = 100;
	b = 200;
	console.log(a,b,c);
}
b = fn(10);
console.log(a,b,c);
```

```js
var ary = [12, 13];  // [100, 13]
function fn(ary) {
	console.log(ary);  // [12,13]
	ary[0] = 100;  
	ary = [100];  // 让函数内部的ary指向新堆
	ary[0] = 0;  // 让新堆的第1个元素变成0
	console.log(ary);  // [0]
}
fn(ary);
console.log(ary);  // [100,13]
```

```js
function fn(){
	function gn(){
		console.log("gn...");
	}
	// return了一个地址
	return gn;  
}
let res = fn();
res();
```

```js
function fn() {
	return function() {
		console.log("gn...");
	}
}
let res = fn();
res();1
```

```js
// 闭包：一个不能被回收的栈内存，就可以称为闭包
// 作用：
//     1）保护   保护EC中的变量，外界不能直接访问
//     2）保存   可以让我们像使用全局变量那样使用局部变量，延长变量的生命周期
var i = 0;
function A() {
	var i = 10;
	function x() {
		console.log(i);
	}
	return x;
}
var y = A();
y();
function B() {
	var i = 20;
	y();
}
B();
```


## 高阶函数
一个函数，它的参数是函数，或者它的返回值是函数，那么这个函数叫高阶函数。
```js
// fn函数，接收一个函数
function fn(func){
	// func是一个地址，也指向gn对应的堆
	func();
}
function gn(){
	console.log('gn...');
}
// gn是一个地址
fn(gn);
```

```js
// 需求：封装一个计算器函数，接收三个参数
// 前两个参数是两个普通数据，第三个参数是一个函数（+，-，*）

function add(num1,num2){return num1+num2}
function sub(num1,num2){return num1-num2}
function mul(num1,num2){return num1*num2}

// calc函数就是一个高阶函数
function calc(num1,num2,func){
	return func(num1, num2)
}
console.log(calc(1,2,add));
console.log(calc(1,2,sub));
console.log(calc(1,2,mul));
```

### 产生闭包
- 从形式上看： 闭包就是两个函数嵌套，里面的函数引用了外面函数的变量
- 定义： 一个不能被释放的栈空间就是一个闭包
-作用：
  - 1）保存：延长了函数内部局部变量的生命周期
  - 2）保护：闭包中的变量说白了，还是局部变量，外界是不能访问的
- 有人还样理解：有了闭包，我们可以像使用全局变量那样使用局部变量
```js
function fn(count){
	return function add(num){
		return count + num;
	}
}
console.log(count);

let gn5 = fn(5);
console.log(gn5(5));
console.log(gn5(50));
```

```js
// 一个函数的参数是函数 或 返回值是函数，这个函数就叫高阶函数
// 高阶函数
function fn(func){
	func()
}

function gn(){
	console.log("gn...");
}

fn(gn);
```

```js
let arr = [10,20];
// map 对数组中的元素进行加工
let newArr = arr.map(function(item){
	console.log(item);
	return item * item
})
console.log(newArr);
```

```js
Array.prototype.mlmap = function (fn) {
	// this是什么?答：this是arr
	let newArray = [];
	for (let i = 0; i < this.length; i++) {
		// this[i] 表示数组中的每一项
		let res = fn(this[i], i)
		newArray.push(res)
	}
	return newArray;
}

let arr = [10, 20];
let newArr = arr.mlmap(function (item, index) {
	return item * item
})
console.log(newArr);
```

```js
Array.prototype.mlmap = function (fn) {
	// this表示数组
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		newArr.push(fn(this[i], i))
	}
	return newArr;
}

let arr = [10, 20];
let newArr = arr.mlmap(function (item, index) {
	return item * item
})
console.log(newArr);
```

```js
Array.prototype.mlfind = function(fn){
	for(let i=0; i<this.length; i++){
		let res = fn(this[i]);
		if(res){
			// 如果找到了满足条件的第1上元素
			return this[i]
		}
	}
}
let arr = [1,2,3,4,5,6,7,8,9,10];
let res = arr.mlfind(function(item){
	return item>6;
});
// 7 find返回满足条件的第1个元素
console.log(res);
```

```js
Array.prototype.mlfilter = function(fn){
	let newArr = [];
	for(let i=0; i<this.length; i++){
		let res = fn(this[i]);
		if(res){
			newArr.push(this[i])
		}
	}
	return newArr;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = arr.filter(function (item) {
	return item > 6;
});
console.log(res);
```

### 内置的高阶函数
我们需要掌握数组中内置的高阶函数,数组中内置的高阶函数,非常重要,特别是后面写项目的过程。
```js
let nums = [19,20,9,30,12,15,50];
// 需要把里面偶数项过滤出来
let newArr = [];
// 命令式编程
for(let i=0; i<nums.length; i++){
	if(nums[i] % 2 == 0){
		newArr.push(nums[i])
	}
}
console.log(newArr);
```

```js
let nums = [19, 20, 9, 30, 12, 15, 50];
// 使用高阶函数，找出偶数项
// filter  过滤   filter是人家内置好的一个高阶函数，我们只需要去调用
// 函数调用时，写的参数都是实参
// function filter(func){ func(item) }
// 声明式编程  filter天生自带遍历功能
// filter的返回值是一个过滤完的新数组
let newArr = nums.filter(function(item,index){
	// item表示数组中的每一项
	// console.log(item,index);
	// return 后面跟一个条件，当某一项条件为true时，就会把这一项过滤出来
	return item % 2 == 0;
});
console.log(newArr);
```

```js
// 手写filter 
let nums = [19, 20, 9, 30, 12, 15, 50];
let newArr = nums.filter(function (item, index) {
	// item > 20是过滤条件
	return item > 20;
});
console.log(newArr);
```

```js
// 手写map
let nums = [19, 20, 9, 30, 12, 15, 50];

// map 本意:地图的意思  计算机中:映射
// map天生自带遍历功能
// map可以把数组中的每一个老元素，映射成新元素
// map是对数组中的每一项进行加工
// map返回一个加工后的新数组
let newArr = nums.map(function(item){
	// console.log(item);
	return item * 10
})
console.log(newArr);
```

```js
let nums = [19, 20, 9, 30, 12, 15, 50];

// forEach是专门用来遍历数组的
let res = nums.forEach(function(item){
	console.log(item);
})
console.log(res);
```

```js
let nums = [19, 20, 9, 30, 12, 15, 50];

// find是查找数组中是否有某一个元素，如果找到返回这个元素
// 如果找不到，返回 und
let res = nums.find(function(item){
	return item == 300
})
console.log(res);  // 30
```

```js
let nums = [19, 20, 9, 30, 12, 15, 50, 30];

// findIndex是查找数组中某个元素的第1次出现的位置索引
// 如果找不到，返回-1
let res = nums.findIndex(function (item) {
	return item == 300
})
console.log(res); 
```

```js
let names = [
	{name:"wc",age:10},
	{name:"xq",age:13},
	{name:"z3",age:16},
	{name:"w5",age:28},
];

// 返回找到的那个元素
let res = names.find(function(item){
	return item.name === "z3"
})
console.log(res.age);
```

### 闭包练习题

```js
var i = 20;
function fn() {
	i -= 2;
	var i = 10;
	return function (n) {
		console.log((++i) - n);
	}
}
var f = fn();
f(1);
f(2);
fn()(3);
console.log(i);
```

```js
let a = 0;
b = 0;
function A(a) {
	A = function (b) {
		alert(a + b++);
	}
	alert(a++)
}
A(1);
A(2);
```

```js
var t = (function (i) {
	return function () {
		alert(i *= 2)
	}
})(2);

t(5);
```

```js
// 2分钟~
var n = 0;
function a() {
	var n = 10;
	function b() {
		n++;
		console.log(n);
	}
	b();
	return b;
}
var c = a();
c();
console.log(n);
```

```vue
<template>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</template>
<script>
    let lis = document.getElementsByTagName("li");
    // for(let i=0; i<lis.length; i++){
    //     lis[i].onclick = function(){
    //         console.log(i+1);
    //     }
    // }
    
    // 闭包有两个作用：1）保存  2）保护
    for (var i = 0; i < lis.length; i++) {
      ; (function (i) {
        lis[i].onclick = function () {
          console.log(i + 1);
        }
      })(i);
    }
</script>
```

### 立即调用函数表达式(Immediately Invoked Function Expression)[IIFE]
- 正确IIFE写法(5种)
```js
;(function fn(){})()
;(function fn(){}())
+function fn(){}()
-function fn(){}()
!function fn(){}()

function fn(){
    console.log("fn...");
}
// 不叫立即调用
// 叫先去声明一个函数，后面去调用
// 所谓的立即调用是指在声明的同时，立马调用
fn();
```

```js
(function fn() {
	console.log("fn...");
})();

(function fn() {
  console.log("fn...");
}());

+function fn() {
	console.log("fn...");
}()

-function fn() {
	console.log("fn...");
}()

// 不行
*function fn() {
	console.log("fn...");
}()

!function fn() {
	console.log("fn...");
}()
```

```js
let obj = {
	name: "wc",
	age: 100
}

;(function () {
	console.log("mn....");
}())
```

### 练习题

```js
console.log(fn);  // und
// 1 == 1  true
if (1 == 1) {
	// 进入来的第一件事，是给fn赋值
	console.log(fn);  // fn函数

	function fn() {
		console.log("ok");
	}
}
console.log(fn);  // fn函数
```

```js
console.log(num);  // und
console.log(fn);   // und
// 0  -0  ""  und  null  NaN ===> false
// 其它的统一转化成true
if ([]) {  // []转成true
	// 进来的第一件事是给fn赋值
	fn()   // "a"
	var num = 100;

	function fn() {
		console.log("a")
	}
}
console.log(fn);  // fn函数
```

```js
function fn(i) {
	return function (n) {
		console.log(n + (++i));
	}
}
var f = fn(2);
f(3);
fn(5)(6);
fn(7)(8);
f(4);
```

```js
// GO中有一个foo 值是hello
var foo = "hello";
// IIFE  没有函数需要
// IIFE，即使有函数名，函数名在外面也是不能使用的
(function (foo) { // foo是形参  形参相当于函数内部的局部变量
	console.log(foo);  // "hello"
	// foo || "word"  foo是"hello" 
	var foo = foo || "word";
	console.log(foo);  // hello
})(foo);  // foo是"hello"
console.log(foo);
```

```js
var a = 9;

function fn() {
	a = 0;
	return function (b) {
		return b + a++;
	}
}
var f = fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);
```

```js
let obj = {   // {x:0,y:[1,2]}
  x: 1,  // 100
  y: [10, 20]  // [10, 30, 40]
};
let obj2 = obj;
let obj3 = {
  ...obj2   // x:200  y:[10,30,40]  y:{x:0,y:[1,2]}
};
obj2.x = 100;
obj2.y[1] = 30;
obj3.x = 200;
obj3.y[2] = 40;
obj = obj3.y = {
  x: 0,
  y: [1, 2]
};
console.log(obj, obj2, obj3);
```

```js
// let a = {
//     num:0,
//     valueOf:function(){
//         // console.log("valueOf...");
//         return ++a.num
//     }
// };

let a = {
	num: 0,
	valueOf: function () {
		return a.num++
	},
	
	toString: function () {
		// console.log("valueOf...");
		return ++a.num
	}
};

// a和别人作比较时，会自动调用valueOf和toString
// 如果a是一个对象，对象中有自己的valueOf或toStirng，就会调用自己的valueOf或toStirng
if (a == 1 && a == 2 && a == 3) {
	console.log('OK');
}
```

```js
// 12.5 ==> 0进制  不转  12
// 100  ==> 1进制   NaN
// 0013 ==> 以0打头  8进制数据  先转成10进制   11  转2进制   3
// "27px"  ===> 转3进制   2
// 456  ===> 转4进制   NaN
let arr = [12.5, 100, 0013, '27px', 456];
arr = arr.map(parseInt);
console.log(arr);
```

```js
(function b() {
	console.log(b);
})();

// IIFE中的函数名在外界是得不到的
console.log(b);
```

```js
(function b() {
	// 说明把110确实赋值给了b  b的值是110
	c = b = 110;
	console.log(c);  // 110
})();
```

```js
(function b() {
	// IIFE的函数名b  和   函数体中的b是同一个b
	// IIFE中的函数名b，在函数体内是不能修改的
	c = b = 110;
	console.log(b); 
	console.log(c); 
})();
```

```js
(function b() {
	var b = 110;
	console.log(b);
})();
```

```js
(function b() {
	b = 110;
	console.log(b);
})();
```

```js
var b = 10;
(function b() {
	"use strict"
	// TypeError: Assignment to constant variable.
	b = 20;
	console.log(b);
})();
console.log(b);
```

## this绑定
- ### 默认绑定
```js
// this到底是什么？
//   本意是这个的意思
//   this到底是什么和你书写的位置没有关系，和调用方式有关系
//   this是在产生EC时，动态绑定的
function fn(){
	console.log(this);
}
// fn();

// let obj = {name:"wc"};
// fn.call(obj)

// let obj2 = {name:"xq",fn:fn};
// obj2.fn();
```

```js
function fn(){
	console.log(this);
}

// 独立函数调用 
// 在浏览器中，独立函数调用，函数内部的this表示window
fn();
```

```js
function fn() {
	console.log(this);  // window
}

function gn(){
	console.log(this);  // window
	fn();  // 独立函数调用
}

function kn(){
	console.log(this);  // window
	gn();  // 独立函数调用
}
// 独立函数调用
kn();
```

```js
let obj = {
	name:"wc",
	fn:function(){
		console.log(this);
	}
}
let gn = obj.fn;
gn();   // 独立函数调用
```

```js
function fn(){
	console.log(this);
}

var obj = {
	name:"wc",
	fn:fn
}

var gn = obj.fn;
gn();  // 独立函数调用
```

```js
function fn(){
	function gn(){
		console.log(this);
	}
	return gn;
}
let kn = fn();
kn();   // 独立函数调用
```

- ### 隐式绑定
```js
function fn(){
	console.log(this);
}

let obj = {
	name:"wc",
	fn:fn
}

// 不叫独立的函数调用
// 是通过obj打点去调用的
// fn中的this表示什么，就看点前面是什么
// 点前面是obj，this就是obj
obj.fn();
```

```js
var obj = {
	name: "wc",
	running: function () {
		// this 表示obj  obj.name
		console.log(this.name + "在跑步...");
	},
	coding: function () {
		console.log(this.name + "在打代码...");
	}
}
// 隐式绑定 
// 你看一个函数中的this是什么，就看谁去调用了这个函数
// obj打点去调用了，函数中的this表示obj
obj.running();
obj.coding();
```

```js
let obj = {
	name:"wc",
	fn:function(){
		console.log(this);
	}
}
let obj2 = {
	name:"xq",
	gn:obj.fn
};
obj2.gn();
```

- ### 显示绑定
```js
// 在JS中，函数有多处角色
//   1）角色一：普通函数
//   2）角色二：对象中的方法
//   3）角色三：对象（一切都是对象）   对象是属性的无序集合

// 函数也是一个对象，对象是属性的无序集合，内部有非常多的默认属性或方法，我们需要掌握三个，call，apply，bind

function fn(){
	console.log("fn...");
}
fn();

let obj = {
	// 可以把对应中的函数称为方法
	running:function(){
		console.log("running...");
	}
}

function gn(){
	console.log("gn...");
}
gn.a = 1;
gn.b = 2;
gn.c = 3;
console.log(gn.a);
console.log(gn.b);
console.log(gn.c);
// dir表示以对象有形式打印出函数
console.dir(gn);
```

```js
function fn(){
	// console.log("fn...");
	console.log(this);
}

let obj = {name:"wc"}

// 函数也是对象，call是它内部的一个方法
// 我们直接去调用这个方法
// 此方法，可以让我们显示地绑定this
// call的作用：1）显示绑定this  2）让fn执行
fn.call(obj);  // 显示绑定函数中的this

// 独立地函数调用  this表示window
// fn();
```

```js
function fn(num1,num2) {
	// console.log("fn...");
	console.log(this, num1+num2);
}

let obj = { name: "wc" }

// call传参：从第2个参数起，传递的参数就会传递给函数
// call的作用：1）显示绑定this  2）让函数执行   3）也可以传递
fn.call(obj,666,111);  

// 独立地函数调用  this表示window
// fn(1,2);
```

```js
function fn(num1, num2) {
	console.log(this, num1 + num2);
}

let obj = { name: "wc" }

// apply的作用和call一样，只不过传参的方式不一样
// apply的话，需要把参数放到一个数组中
fn.apply(obj, [666, 111]);
```

```js
function fn(num1, num2) {
	console.log(this, num1 + num2);
}

let obj = { name: "wc" }

// bind的作用：1）显示绑定this  2）也可以传参   但是不会让函数执行，call和apply都会让函数执行  3）bind返回绑定this之后的新函数
let newFn = fn.bind(obj, 666, 111);

newFn();
```

```js
// 显示绑定：
// 	1）call  fn.call(obj,1,2)  显示绑定this   让fn执行   也能传参
// 	2）apply  fn.apply(obj,[1,2])  显示绑定this   让fn执行  参数放数组中
// 	3）bind  fn.bind(obj,1,2)  显示绑定this  返回绑定this后的新函数  也能传参
```

```js
function fn() {
	console.log(this);
}
// String {'hello'}  是一个对象
//  会把hello包装成一个对象
// fn.call("hello");

// 如果绑定到und上，实际是绑定到了window上
// fn.call(undefined);

// 如果绑定到null上，实际是绑定到了window上
fn.call(null)
```

- ### new绑定

```js
// 在JS中，函数有多种角色：
//   角色一：普通函数
//   角色二：对象中的方法
//   角色三：函数也是对象
//   角色四：函数也是类（构造函数/构造器），通常情况下，首字母大写

// 定义一个类，叫Person，构造器，构造函数
function Person() {
	// new做了什么？
	//    1）在函数内部创建一个对象
	//    2）把函数内的this绑定到了对象上
	//    3）函数执行
	//    4）返回这个对象（new完后，肯定是得到一个对象）
}

// new一个类，得到一个对象  new是一个运算符
let p1 = new Person();
console.log(p1);
```

```js
function Person() {
	this.name = "wc";
	this.age = 100;
}

// new一个类，得到一个对象  new是一个运算符
let p1 = new Person();
console.log(p1);
```

```js
function Person(name,age) {
	this.name = name;
	this.age = age;
}

// new一个类，得到一个对象  new是一个运算符
let p1 = new Person("xq",100);
console.log(p1);

// 每new一次就创建出一个新的对象，new了100次，创建出100个对象
let p2 = new Person("z3",123);
console.log(p2);
```
- ### 内置函数绑定
```js
// 定时器中的this表示window
setTimeout(function(){
	console.log(this);
},2000);
```

```vue
<template>
  <button id="btn">点我</button>
</template>
<script>
    let btn = document.getElementById("btn");
    btn.onclick = function(){
      // 监听器中的this表示事件源
      console.log(this);
    }
</script>
```

```js
// 内置函数中也可以访问this
let names = ["wc","xq"];
names.forEach(function(item){
	console.log(item);
	console.log(this);
},{
	name:"666"
})
```

- ### 绑定的优先级
```js
let obj = {
	name: "wc",
	fn: function () {
		console.log(this);
	}
}
// 隐式绑定
obj.fn();
```

```js
// 显示绑定优先级高于隐式绑定
function fn() {
	console.log(this);
}
let obj = {
	name: "wc",
	// 显示绑定
	fn: fn.bind({ name: "xq" })
}
// 隐式绑定
obj.fn();
```

```js
// new绑定优先级高于隐式绑定
let obj = {
	name: "wc",
	fn: function () {
		console.log(this);
	}
}

let res = new obj.fn();
```

```js
// new绑定优先级高于bind

function fn(){
	console.log(this);
}

// bind返回一个绑定this之后的新函数
let gn = fn.bind({name:"wc"})
// gn();  // this表示{name:"wc"}

new gn();
```

```js
// new绑定 不能和call与apply比较

function fn() {
	console.log(this);
}

let res = fn.call({ name: "wc" })
console.log(res);

new res();//报错
```

## 箭头函数


```js
var foo = function(num1,num2){
	return num1+num2;
}
console.log(foo(1,2));
```


```js
var foo =  (num1, num2)=>{
	return num1 + num2;
}
console.log(foo(1, 2));
```

```js
// 如果形参只有1个，那么()可以不写
var foo = num1 => {
	return num1**2;
}
console.log(foo(2));
```

```js
// 如果函数体中只有一条语句，{}和return 都可以不写
var foo = num1 => num1 ** 2;
console.log(foo(2));
```

```js
// 如果函数体中只有一条语句
// 没有reutrn，{}也是可以不写的
var foo = num1 => console.log(num1 ** 2);

console.log(foo(2));
```

```js
// 如果函数体中只有一条语句
// 并且返回一个对象  删除return 和 {}，
// 对象的{}会当成函数的{}
// 如果没有形参 ()不能省
var foo = () => ({ a: 666 })


console.log(foo());
```

### 箭头函数中的this

```js
console.log(this);

// 箭头函数中的this需要往向找一层
var gn = ()=>{
	console.log(this);
}

var obj = {
	name:"wc"
}

// 显示绑定
gn.call(obj)
```

```js
let fn = ()=>{
	console.log(this);
}

fn.call("hello");
fn.call({});
```

```js
var obj = {
    name:"wc",
    fn:()=>{
        console.log(this);
    }
}

obj.fn();
```

```js
setTimeout(()=>{
	console.log(this);
},2000)
```
### this练习题

```js
function fn(){
	console.log(this);
}
fn();  // 独立函数调用 
window.fn();   // 隐式绑定
```

```js
let obj = {
	name: "wangcai",
	age: 100,
	run: function () {
		console.log(this)
		console.log("run....")
	}
}
obj.run()
```

```js
// IIFE中this表示window
;(function(){
	console.log(this);
})()
```

```js
let btn = document.getElementById("btn");
function fn() {
	return function () {
		console.log(this);// 事件源
	}
}
btn.onclick = fn();
```

```js
let wc = {
	name: "wangcai",
	age: 100,
	eat: function () {
		console.log("eat...")
		console.log(this);
	}
}
let xxx = wc.eat;
xxx();
```

```js
var num = 10;
var obj = {
	num: 20
}
obj.fn = (function (num) {
	this.num = num * 3;
	num++;
	console.log(num);
	return function (n) {
		this.num += n;
		num++;
		console.log(num)
	}
})(obj.num);

var fn = obj.fn;
fn(5)
console.log(window.num);
```

```js
// 21  22  60  60  30
var num = 10;  // 60
var obj = {
	num: 20  // 30
}
obj.fn = (function (num) {
	this.num = num * 3;
	num++;
	console.log(num);  // 21
	return function (n) {  // 10
		this.num += n;
		num++;  // 22
		console.log(num)  // 22
	}
})(obj.num);

obj.fn(10);
console.log(num)
console.log(window.num)
console.log(obj.num)
```

```js
(function () {
	var a = 1;
	var obj = {
		a: 10,
		f: function () {
			a *= 2; // a是外面的  里面的需要obj.a
		}
	}
	obj.f()
	alert(obj.a + a);
})()
```

```js
(function () {
	var a = 1;
	var obj = {
		a: 10,
		f: function () {
			this.a *= 2;  // this是obj
			console.log(this.a)
		}
	}
	obj.f()
})()
```

```js
var name = "window";
var Wangcai = {
	name: "Wangcai",
	show: function () {
		console.log(this.name);
	},
	f: function () {
		var fun = this.show;
		fun(); // 独立函数调用
	}
}
Wangcai.f();
```

```js
let fullname = "language";
let obj = {
	fullname: "javascript",
	props: {
		getFullName: function () {
			return this.name;
		}
	}
}
// 隐式绑定  点前面是obj.props   getFullName中的this表示props
console.log(obj.props.getFullName());
```

```js
let fullname = "language";
let obj = {
	fullname: "javascript",
	props: {
		fullname: "hello",
		getFullName: function () {
			return this.fullname;
		}
	}
}
console.log(obj.props.getFullName());
```

```js
var fullname = "language";
var obj = {
	fullname: "javascript",
	props: {
		fullname: "hello",
		getFullName: function () {
			return this.fullname;
		}
	}
}
let qq = obj.props.getFullName;
console.log(qq());  // 独立函数调用
```

```js
let fullname = "language";
var obj = {
	fullname: "javascript",
	props: {
		fullname: "hello",
		getFullName: function () {
			return this.fullname;
		}
	}
}
let qq = obj.props.getFullName;
console.log(qq());  // undefined 独立函数调用
```

```js
let obj = {
	fn: (function () {
		console.log(this);  // window  IIFE中this表示win
		return function () {
			console.log(this);
		}
	})()
}
obj.fn();  // 隐式绑定 this obj
```

```js
let obj = {
    fn: (function () {
        console.log(this);  // window  IIFE中this表示win
        return function () {
            console.log(this);
        }
    })()
}
let qq = obj.fn;
qq();
```

## 对象(object)

```js
// Object叫类 在JS中也叫构造器，也叫构造函数
// new是一个运算符   new一个类，得到一个对象
// 对象是属性有无序集合，属性分两类：
//   1）私有属性
//   2）公有属性
let obj = new Object();
obj.name = "wc";
obj.age = 18;
obj.coding = function(){
	console.log("coding...");
}
console.log(obj.name);
console.log(obj.age);
obj.coding();
```

```js
// 通过字面最的形式创建对象
let obj = {
	name:"xq",
	age:18,
	running:function(){
		console.log("runing...");
	}
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.running());
```

```js
// Number  类
// new一个类得到一个对象
// 对象就存储在堆区  n1指向那个堆
let n1 = new Number();
console.log(n1);  // Number {0}

let n2 = 220; // 220不是对象  字面量

let n3 = 3.1415926;
console.log(n3);
// n3不是对象，为什么可以打点调用toFixed?
// n3在打点的瞬间会包装成一个对象，就可以调用toFixed方法
// 调用结束，就还原成了基本数据类型
console.log(n3.toFixed(2));

```

```js
let s1 = new String("hello");
console.log(s1);  // String {'hello'}

let s2 = "world";
console.log(s2.toUpperCase());
```

```js
let b = new Boolean();
console.log(b); // Boolean {false}

let b2 = false;
```

```js
let obj = new Object();
console.log(obj);
```

```js
// 数组也是特殊的对象  对象中的键是索引
// 正方形也是矩形
let arr = new Array(1,2);
console.log(arr);
```

```js
let d1 = new Date();
console.log(d1.getFullYear());
```

```js
let f1 = new Function("a","b","return a+b");

console.log(f1(1,2));
```

```js
// TypeError: Math is not a constructor
// Math这个类不能new  
// 不能new的类，叫单体内置类
let d = new Math();
console.log(d);
```

```js
// 得到一个伪数组  伪数组不是数组  是对象
// ["a","b","c"]    {0:"a",1:"b",2:"c"}伪数组
console.log(Array.isArray(document.getElementsByTagName("li")));

let lis = document.getElementsByTagName("li");
console.log(lis[0]);
// 一个真实的DOM元素，本质就是一个对象
// 这个对象中的属性非常多，操作这个对象，性能就非常低
// jq死了，jq操作的是DOM元素，操作DOM元素性能就低
// vue  react操作的是虚拟DOM元素，虚拟DOM中的属性就没有那么多
console.dir(lis[0]);
```

```js
// instanceof  用来判断一个对象是否属于某个类
function Person(name,age){
	this.name = name;
	this.age = age;
}
let p = new Person("wc",18);

console.log(p instanceof Person); // true
```

```js
function ok(){
	console.log("ok....");
}

ok.a = 1;
ok.b = 2;
ok.c = 3;
console.dir(ok);
```

```js
// console.log(window);

console.log(console);

console.log("hello")
console.info("hello")
console.dir('hello')
console.warn('hellw')
console.table('hello')
console.error("hello")
```

```js
// 集合：操作集合
// 说到操作：增删改查    CRUD  create   read  update   delete

let obj = {
	name:"wc",
	age:100,
	run:function(){
		console.log("run...");
	}
};

// 通过打点访问对象中的属性
console.log(obj.name);
console.log(obj.age);

// 通过[]去获取对象中的属性
console.log(obj["name"]);
console.log(obj["age"]);

let xx = "name";
// []中可以放变量  变量的值可以是属性名  键
// 有些情况下，访问一个对象中的属性，只能通过[]
console.log(obj[xx]);

console.log("-------------");

for(let key in obj){
	console.log(key);
	console.log(obj[key]);
}
```

```js
// 对象中的键是什么类型？
// 答：字符串，我们没有添加引号，没有添加引号，也是字符串类型

// 键能不能是其它类型？
// 答：能

let obj1 = {
	123: "wc",
	true: 100,
	undefined: function () {
		console.log("run...");
	}
};
console.log(obj1[123]);
console.log(obj1[true]);
console.log(obj1.true);
console.log(obj1.undefined());
console.log(obj1[undefined]());
```

```js
let obj = {
	name: "wc",
	age: 100,
	run: function () {
		console.log("run...");
	}
};
console.log(obj.length);  // undefined

// 能不能使用for循环遍历对象 ?
for(let i=0;i<obl.length;i++){}//次循环不会进去

// 遍历对象使用for in
for(let key in obj){
	console.log(obj[key]);
}
```

```js
// for循环   forEach    for of    for  in

let arr = ["wc","xq","jj"];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(item=>console.log(item))

for(let item of arr){
    console.log(item);
}

for(let key in arr){
	console.log(arr[key]);
}

const boj = {name:'wgh',age:'18'};

[].push.apply(boj,[1,2,3])
console.log(boj);//{0: 1, 1: 2, 2: 3, name: 'wgh', age: '18', length: 3}
console.log(boj.push);//undefined
```

```js
let obj = {
	name:"wc",
	age:18
}

obj.age = 28; // 改
console.log(obj.age);
```

```js
let obj = {
	name: "wc",
	age: 18
}

delete obj.age

console.log(obj.age);//undefined
```

### 创建对象的方式

```js
// 通过字面量的形式创建对象的缺点：
//    1）有大量的重复代码
//    2）内存空间浪费
let wc = {
	name: "wangcai",
	age: 11,
	height: 188,
	address: "bj",
	coding: function () { console.log("coding..."); },
	eating: function () { console.log("eating..."); }
}
let xq = {
	name: "xiaoqiang",
	age: 18,
	height: 168,
	address: "bj",
	coding: function () { console.log("coding..."); },
	eating: function () { console.log("eating..."); }
}
let jj = {
	name: "jiajia",
	age: 25,
	height: 158,
	address: "zz",
	coding: function () { console.log("coding..."); },
	eating: function () { console.log("eating..."); }
}
```

```js
// 工厂函数   产出对象
function createPerson(name,age,height,address){
	let p = {};
	p.name = name;
	p.age = age;
	p.height = height;
	p.address = address;
	p.coding = function(){ console.log("coding...");}
	return p;
}

let wc = createPerson("wangcai",11,180,"bj");  wc.coding();
let xq = createPerson("xiaoqiang", 12, 160, "zz"); xq.coding();
let jj = createPerson("jiajia", 16, 170, "bj");  jj.coding();

// wc  xq   jj都是字面量对象
//   期望不同的对象，有不同类

console.log(wc instanceof Object);
console.log(xq instanceof Object);
console.log(jj instanceof Object);
```

```js
// new做了什么：
//     在构造器内部创建一个新的对象
//     这个对象内部的prototype属性会被赋值为该构造函数的prototype属性;
//     让构造器中的this指向这个对象
//     执行构造器中的代码
//     如果构造器没有返回对象，则返回上面的创建出来的对象

// 函数在JS有多种角色
//   其中一种角色就是构造器
function Fn(){
	console.log("fn...");
	// 1）创建一个新的对象
	// 2）让函数中的this绑定到这个新对象上  new绑定
	// 3）执行类（函数）中的代码
	// 4）返回上面的新对象
}

// new一个构造器（类）
// let f = new Fn();
// console.log(f);

// console.log(f instanceof Fn);
```

```js
// 使用构造器的形式创建对象
// 缺点：也会造成内存空间浪费

// 问：有没有更加优雅的方式去创建对象?
// 答：有    构造器+原型对象的形式
function Person(name,age,height,address){
	this.name = name;
	this.age = age;
	this.height = height;
	this.address = address;

	this.coding = function(){console.log(this.name + " coding");}
}

let wc = new Person("wangcai", 11, 180, "bj");
wc.coding();
let xq = new Person("xiaoqiang", 12, 160, "zz")
xq.coding();
let jj = new Person("jiajia", 16, 170, "bj");
jj.coding();
```

### 练习题

```js
// 调用一个函数，参数的个数是不固定
// ...args 形式来接收  rust参数
// params 参数   是一个数组，数组中收集了所有的实参
let fn = function (...params) {
	// console.log(Array.isArray(params));

	return function gn(...args) {
		params = params.concat(args);
		let total = 0;
		params.forEach(item=>total += item);
		return total;
	}
}

console.log(fn(1, 2)(3));
console.log(fn()(1,2,3));
console.log(fn(1,2,3)());
// fn()(1,2,3)
// fn(1, 2, 3)
// fn(1)(2,3)
// let res = fn(1, 2)(3);
// console.log(res);
```
```js
window.val = 1;  // 2   4
var json = {
  val: 10,  // 20
  dbl: function () {
    this.val *= 2;
  }
}
json.dbl();//json.val = 20
var dbl = json.dbl;

dbl();  //win.val = 2 独立函数调用 
json.dbl.call(window);//win.val = 4
alert(window.val + json.val);//24
```

```js
let obj = {
  fn: (function () {
    return function () {
      console.log(this);
    }
  })()
};
obj.fn();  //{fn: ƒ} 隐式绑定
let fn = obj.fn;
fn();  //Window 独立函数调用
```

```js
(function () {
  var val = 1;
  var json = {
    val: 10,
    dbl: function () {
      console.log(this);//{val: 10, dbl: ƒ}
      val *= 2;
      (function (){
        console.log(this);//Window
      })()
    }
  };
  json.dbl();
  console.log(json.val + val);//12
})();
```

## 原型和原型链

一切都是对象
对象是属性的无序集合  操作集合  CRUD
函数有多种角色：
- 角色一：普通函数
- 角色二：对象的方法
- 角色三：普通对象
- 角色四：类（构造函数，构造器）
只要是一个对象，它的身上必定有一个属性，叫__proto__，__proto__是属性名，叫隐式原型，对象的值是一个对象


```js
// obj是一个对象   对象是属性的无序集合
// 属性分两类：
//    1）私有属性
//    2）公有属性  沿着__proto__找到的属性都是公有属性
let obj = {
name: "wc", // 私有属性
}
console.log(obj);
```

```js
    let obj = {
        name:"wc",
        age:18
    }

    console.log(obj);

    // obj打点找hasOwnProperty，自己私有属性没有，就沿着__proto__去公有属性上找 
    // 只有找到了这个属性或方法，才能使用这个属性或方法
    // hasOwnProperty 判断一个属性是否是私有属性
    console.log(obj.hasOwnProperty('name'));  // true
    console.log(obj.hasOwnProperty('age'));  // true
    console.log(obj.hasOwnProperty('address'));  // false
    console.log(obj.hasOwnProperty('hasOwnProperty'));  // false
    // console.log(obj.wangcai);

    // 总结：
    //    a.b   找a，先去自己的EC中找a，如果找不到，就去父的EC中找，如果还找不到，就去
    //          父的父的中找，直到找到ECG，如果还找不到，报 a is not defined
    //          这个查找机制，叫作用域链
    //          找b，先找自己的私有属性，如果找不到，就沿__proto__去公有属性中找
    //          如果公有属性一直找不到，得到und，因为查找一个对象上不存在的属性，
    //          得到und，叫原型链
```

```js
let obj = {
	name: "wc",
	age: 18
}
// __proto___对应的值是一个对象，这个对象，叫原型对象
console.log(obj.__proto__);

// obj.__proto__ 对应的是原型对象
// hasOwnProperty 相对于原型对象来说，是私有属性
obj.__proto__.hasOwnProperty("name")

// 原型对象，也是对象，只要是一个对象，身上都有一个__proto__
// 如果一直找下去，就找到了null
// console.log(obj.__proto__.__proto__);
```

```js
let arr = ["wc","xq"];

console.log(arr);

// 为什么可以点push
// push不是arr的私有属性，肯定是它的公有属性
arr.push("jj")
console.log(arr);
```

```js
let arr = ["wc", "xq"];

console.log(arr);

// 找valueOf
// console.log(arr.__proto__.__proto__);

// arr.abcdef
```

```js
// in   判断是否有这个属性，不管是公有还是私有
// hasOwnProperty  判断是否是私有

let arr = [];

// in是用来判断一个属性是否属于某个对象
// 不管是私有还是公有
console.log("push" in arr);  // true
```

```js
// 每个对象身上都有一个__proto__属性
// 	__proto__叫隐式原型
//
// 每个构造器（类）上都有一个叫prototype属性
// 	prototype叫显示原型
//
// 显示原型和隐式原型指向同一个对象
```

```js
 function fn(){
	 console.log("fn...");
 }
 console.dir(fn);
```

```js
// arr1是对象  对象身上都有一个隐式原型
// Array是类，也叫构造器，本质就是函数
// 函数身都都一个显示原型
let arr1 = new Array("wc", "xq");
let arr2 = new Array("jj");
console.log(Array.prototype == arr1.__proto__); // true
console.log(Array.prototype == arr2.__proto__); // true
console.log(arr1.__proto__.__proto__ == Object.prototype); // true
console.log(arr1.__proto__.__proto__.__proto__); // null

let obj1 = new Object()
```

```js
    // 构造器
    function Person(name,age){
        this.name = name;
        this.age = age;
    }

    let p = new Person("wc",18);

    console.log(p.__proto__.constructor == Person); // true
```

```js
let num = new Number(110);
console.log(num.__proto__.constructor == Number);

// 1）一切都是对象
// 2）对象是属性的无序集合
// 3）属性分公有属性和私有属性
// 4）每个对象身上都有一个__proto__属性，叫隐式原型 
// 5）每个函数身上都有一个prototype属性，叫显示式原型
// 6）对象的隐式原型和函数的显示原型，指向一个对象，叫原型对象
// 7）每一个原型对象身上有一个constructor属性，指向函数本身
```

### 原型链习题

```js
function Fn() {
	this.x = 10;
	this.y = 20;
	this.getX = function () {
		console.log(this.x)
	}
}
Fn.prototype.getX = function () {
	console.log(this.x)
}
Fn.prototype.getY = function () {
	console.log(this.y)
}
let f1 = new Fn();
f1.getX();
f1.getY();
```
```js
function Fn(num) {
	this.x = this.y = num;
}
Fn.prototype = {
	x: 20,
	sum: function () {
		console.log(this.x + this.y)
	}
}
Fn.prototype.constructor = Fn;
let f1 = new Fn(10)
console.log(f1.sum === Fn.prototype.sum)
f1.sum();
Fn.prototype.sum();
console.log(f1.constructor)
```

```js
function Person(){

}

// 没有new，叫函数调用 
// Person() 在你眼中就是一个值  返回值
// und
let p = Person();
```

```js
// Person是函数
//   函数有N种角色：
//      角色一：普通函数
//      角色二：方法
//      角色三：普通对象
//      角色四：类  推荐函数名大写    构造器  
function Person() {
	// 1）在Person函数中创建一个空对象   {}  0x666   {a:1,b:2,c:3}
	// 2）this绑定   this = 0x666;  this指向 上面的对象
	this.a = 1;
	this.b = 2;
	this.c = 3;
	// 3）执行Person函数中的代码
	// 4）返回对象  返回0x666
}
// 把Person当成了一个对象  给这个对象身上添加xxx属性  值是ok
Person.xxx = "ok";

// new也是运算符 这个运算符的结果是对象
// 只要你敢new，出来的100%是对象  
let p = new Person();  // p是0x666
```

```js
function Fn() {
	let a = 1;
	this.a = a;
}
Fn.prototype.say = function () {
	this.a = 2;
}
Fn.prototype = new Fn();
let f1 = new Fn();
Fn.prototype.b = function () {
	this.a = 3;
}
console.log(f1.a)
f1.say();
console.log(f1.a)
f1.b();
console.log(f1.a)
```

<git-talk />
