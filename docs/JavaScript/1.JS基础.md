# JS基础

## 为什么需要数据类型？
内存空间是有限的，对于数据存储来说，分配多大内存合适呢？
为了合理地使用内存空间，基本上所有的编程语言都有数据类型的概念。
目的：合理使用内存空间，不同的数据分配不同内存空间。

## JS中都有哪些数据类型：
- 基本数据类型：
  	Number, String, Boolean, Undefined, Null, Symbol
- 引用数据类型：
  	Object, Array, Function, Data, Math.....

基本数据类型存储在栈区，引入数据类型是存储在堆区。
栈区一般小一点，大小是固定。堆区一般大一点，大小不是固定。

变量名就是内存空间的别名

对变量名的操作就是对内存空间中的数据的操作

```js
var uname = "wc";
var uage = 18;
var isMarry = true;
```

看到一个引用数据类型，就是一个堆，这个堆对应的一个地址，这个地址是需要存储在栈区。

```js
let arr1 = ["a","b","c"];
let obj1 = {
	name:"wc",
	age:18,
	adress:"bj"
}
```

函数也是一种数据  fn叫函数名
函数是引用数据类型

```js
function fn(){
	console.log("ok....");
}
```

## undefined

undefined只有一个值，就是undefined

## undefined会出现在什么地方？

- 声明一个变量没有赋值

  ```js
  var a;   var a = 1;   声明带赋值可以叫定义
  var name;  
  console.log(name);
  ```

- 如果一个函数没有返回值，默认返回undefined

  ```js
  function fn(){
  	return "hello";
  	return 123;
  	return undefined;  // 不返回und值，默认也是返回und值
  }
  ```

- 访问一个对象中不存在的属性，结果也是undefined

  ```js
  var obj = {
  	// name:"wc",整体叫属性  属性分属性名和属性值
  	// name叫属性名，"wc"叫属性值
  	// 属性名也叫键，key    属性值也叫值，value   
  	// key vlaue 键值对
  	// 对象是属性的无序集合 
  	name:"wc",
  	age:18,
  	score:88
  }
  ```

- 访问数据中不存在的元素，得到undefined

  ```js
  var arr = ["a","b","c"];
  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);
  console.log(arr[3]);
  console.log(arr[100]);
  ```

- 如果没有实参给形参赋值，形参的默认值也是undefined

  ```js
  function fn(a,b,c,d,e){
  	console.log(c,d,e);
  	return a+b;
  }
  ```

[了解更多](https://huaweicloud.csdn.net/638ef060dacf622b8df8de6a.html?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~activity-1-121027523-blog-96602113.235^v27^pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~activity-1-121027523-blog-96602113.235^v27^pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=1)

## null

null是一种数据类型    是基本数据类型

 null表示一个空的对象  也是空  也是基本类型  只不过通常用来表示一个空对象

```js
var a = null;//这样写，就意味着，后面的obj的值可能就是一个对象了
```

typeof对基本数据类型和函数测试没有问题   对于引用数据类型和null测试是有局限性的

```js
console.log(typeof null);  // object
```

什么地方见过null？

```js
// 访问一个不存在的DOM节点时，得到null
console.log(document.getElementById("box"));  // null
```

## und 和  null 的相同点和不同点

- 相同点


 
  - und和null都是基本数据类型  und对应的值只有und   null对应的值只有null
  - und和null转成Boolean类型时，都会转成false
  - und和null当成对象时，访问里面的属性，报的都是类型错误
  - und和null   使用==去判断时  得到true

```js
console.log(Boolean(undefined)); // false
console.log(Boolean(null));  //false
console.log(undefined == null);  // true

var a;
var b = null;
console.log(a.name);
//Uncaught TypeError: Cannot read properties of undefined(reading 'name')
console.log(b.name);
//Uncaught TypeError: Cannot read properties of null(reading 'name')
```

```js
//运算符在运算符，需要保证两侧操作数据的数据类型一致
//如果不一致，会进行隐式类型转化

//+ 两侧的操作数的数据类型不一样  要发生数据类型的隐式转化
//1转化成字符串"1"    +叫字符串拼接运算符
console.log(1+"hello");

//und和null都会转成boolean  und转成false  null转成false
console.log(undefined == null);

//=== 意味着不再发生隐式类型转化
console.log(undefined === null);
```

不同点

und转数字，得到NaN，null转数字，得到0

und和null转字符串  und转成了字符串的und    null是转成了字符串的null

```js
// Number()叫强制类型转化
console.log(Number(undefined)); // NaN
console.log(Number(null));  // 0

// + 需要保证两侧的数据类型要一致
// undefined转Number  隐式类型转化
// NaN和任何数进行运算，结果都是NaN
console.log(undefined + 0);  // NaN   
console.log(null + 0);  // 0

console.log(undefined + "hello");  // undefinedhello
console.log(null + "hello");  // undefinedhello
```

## Boolean

Boolean  是基本数据类型   对应的只有两个：true  false

在if语句中  if(这里面，只能放布尔类型，如果不是布尔类型，会发生隐式类型转化)

```js
//下面的这些值会转化成false，其它的都转化成true(背会)
"" ===> false
0 ===> false
-0  ===> false
NaN  ===> false
und  ===> false
null  ===> false

if(NaN){
	console.log("ok");
}else{
	console.log("bad");
}

//fn是一个地址，指向一个堆
var fn = function(){}
console.log(Boolean(fn));  // true
console.log(Boolean(fn())); // false
```

## number

不管是小数，还是整数，在JS中统一叫number

```js
// 一般写的number都是10进制
var num1 = 110;
console.log(num1);

// 8进制   0~7   逢8进1
var num1 = 024;  // 以0打头表示8进制
console.log(num1); // 20  log出来的是10进制

var num1 = 079;  // 这样写，就不是8进制，超过7就不属于8进制了，直接按10进制处理
console.log(num1); // 79

// 16进制  0~9  a~f  a:10  b:11  c:12  f:15
var num1 = 0x2a;
console.log(num1); // 42

var num1 = 0x5h;
console.log(num1);
//Uncaught SyntaxError: Invalid or unexpected token
//SyntaxError  叫语法错误  语法错误是最好找的错误
```

## Number函数

```js
// 用于把其它类型转化成Nubmer类型

console.log(Number(10)); // 10
console.log(Number(010));   // 8
console.log(Number(0x10));   // 16

console.log(Number(true));  // true转number得到1
console.log(Number(false));  // false转number得到0

console.log(Number(null)); //  0

console.log(Number(undefined)); // NaN

console.log(Number("110"));  // 110
console.log(Number("010"));  // 10  去掉前面的0
console.log(Number("0x12"));  // 18

console.log(Number(""));   // 0
console.log(Number("     "));  // 0
console.log(Number("abc"));  // NaN
console.log(Number("123abc"));  // NaN
```

```js
// 对象是属性的无序集合
// 你的肉眼看到这里面没有属性
// 实际上这里面有非常多的属性
// 当你尝试把obj转化成Number是，它会尝试调用obj中的valueOf函数
var obj = {};
console.log(obj.valueOf);
console.log(obj);
console.log(Number(obj));
```

```js
var obj = {
    valueOf:function(){
        console.log("valueOf...");
        return 123
    }
};
// 这里调用的是自己的valueOf
// 打点去调用时，如果自己有，就不会再沿着原型链去原形对象上找了
console.log(obj.valueOf());//123
console.log(Number(obj));//123
```

```js
var obj = {
     num1:110,
     // 谁去调用valueOf，那么valueOf中的this就是谁
     valueOf: function () {
         return this.num1
     }
};
//obj去调用了，那么valueOf中的this表示obj
console.log(obj.valueOf());

//当把一个对象尝试转化成number时，会自动调用对象的valueOf函数
//valueOf函数，返回的数字，就是转化后的数字
console.log(Number(obj));
```

```js
//如果没有重写valueOf函数，那么它会调用toString函数
var obj = {
    num1: 110,
    toString:function(){
        return this.num1;
    }
};
console.log(Number(obj));
```

```js
var obj = {
    valueOf: function () {
        return 666
    },
    toString: function () {
        return 888
    }
};
console.log(Number(obj));
```

## 进制

- 0b开头表示二进制
- 0开头表示八进制
- 0x开头表示十六进制

```js
100 //是10进制,100
0100 //是八进制64
0b100 //是二进制 4
0x100 //是十六进制256

var x=300;
console.log(x);
console.log("8进制---"+x.toString(8)); //454
console.log("32进制---"+x.toString(32)); //9c
console.log("16进制---"+x.toString(16)); //12c
```

## 把字符串转化为数字的三种方案
- 1）Number
  特点：转化的是整体，转化不成功，得到NaN
- 2）parseInt
  特点：一个字符，一个字符去转，直到某个字符转化失败，停止转化
  parseInt转时，有进制的概念
- 3）parseFloat
  特点：一个字符，一个字符去转，直到某个字符转化失败，停止转化
  parseInt转时，有进制的概念，parseFloat没有进制的概念


```js
// string 字符串   redix是进制
// 作用：尝试把一个字符串转化成数字
//    如果第一个参数不是字符串，也会尝试转化成字符串
//    第二个参数表示进制  二进制  十进制  八进制  十六进制，如果不写，默认是10进制
parentInt(string,redix)

// 如果字符串转化不成，结果是NaN
console.log(parseInt("aaa"));

// 把字符串去转时，先从第1个字符开始，
// 第1个字符是f，f是可以转在16进制的  f --->  15
// 看第2个字符  是 g  转化不成功  后面的所有字符，就停止转化
console.log(parseInt("fg123",16));

// 先从第1个字符开始转，默认进制是10进制
// 1  6都可以转  *不能转  后面字符就停止转化
console.log(parseInt("16*2")); // 16

// 先运算16*2 得到32 把32转成字符串  然后再转成数字
console.log(parseInt(16 * 2));

// 3.1415926 先隐式转化成字符串 "3.1415926"
console.log(parseInt(3.1415926));

var arr = ["1", "2", "3", "4"];
function parseInt(string,indix){  }
// parseInt是JS内置好的函数
var res = arr.map(parseInt);
var res = arr.map(function(string,indix){
// string表示第一项   index表示索引  0 1 2 3
// 1 ===> 0   把字符串1尝试转成数字 0进制     1
// 2 ===> 1   把字符串2尝试转成数字 1进制   没有1进制  转化失败  NaN
// 3 ===> 2   把字符串3尝试转成数字 2进制   3转化成2进制，失败 NaN
// 4 ===> 3   把字符串4尝试转成数字 4进制   4转化成3进制，失败 NaN
});
console.log(res);  // [1, NaN, NaN, NaN]
```

```js
var arr1 = [1, 2, 3, 4];
// map可以对数组中的元素进行加工
// item表示数组中的每一个元素,不要问为什么，这种编程方式叫声明式编程
// 你只需要按人家的规则写代码
// map返回一个加工后的新数组
let newArr = arr1.map(function (item,index) {
return item * item
});
console.log(newArr);
```

```js
function fn(a,b){
    return a+b;
}
console.log(fn(1,2));

// cb callback 是回调的意思
// cb 形参
function fn(cb) {
	// console.log(cb(1, 2));
	return cb(1, 2)
}
// function(){} 叫实参
console.log(fn(function (a, b) {
	return a + b;
}));
```

```js
var arr = ["1", "1", "1", "1"];
var res = arr.map(parseInt); // 1 NaN 1  1
console.log(res);
```

```js
parseFloat(string);
// 没有进制的概念  尝试把一个字符串转化成小数
// 如果转化不成功，得到NaN
// 也是一位一位转，如果某一位不成功，后面就不转化了
// 如果遇到空格直接忽略了
// 对于第1个点，会解析，后面的.就不会解析了，后面就不转化了

console.log(parseFloat("2.111")); // 2.111
console.log(parseFloat("2.1abc1")); // 2.1
console.log(parseFloat("  2.1")); // 2.1
console.log(parseFloat("a2.1")); // NaN
console.log(parseFloat("2.1.2.3")); // 2.1
```

```js
// isNaN  用于判断一个数据是否是NaN
// 是ES5中提供的，但是是有问题的

// var a = "hello" * 10;
// console.log(a);

// console.log(isNaN(a));  // true

console.log(isNaN(NaN));; // true
// 会把und转化成数字，发生了隐式类型转化 und转化成数字是NaN
console.log(isNaN(undefined));; // true
console.log(isNaN({}));; // true
// 要把传入的数据转化成数字
console.log(isNaN(true));; // false true===>1
console.log(isNaN(false));; // false
console.log(isNaN(null));; // false
console.log(isNaN(1));; // false
console.log(isNaN("abc"));; // true  abc转数字是NaN
console.log(isNaN("123"));; // false
console.log(Number(null));  // 0
```

```js
// 在ES6中，在Number.isNaN(),
// 判断一个数据是否是NaN，这里不会发生类型转化

console.log(Number.isNaN(NaN));
console.log(Number.isNaN({}));
console.log(Number.isNaN("abc"));

// ES5: isNaN()  会发生隐式类型转化
// ES6：Number.isNaN()  不会发生隐式类型转化
// 后面我们判断一个数字是否是NaN,使用：Number.isNaN()
```

## String

```js
// 在JS中定义字符串的方式
//   方式一：字面量的形式  单引号和双引号是完全等效的。
var str1 = "hello";
var str2 = "world";

//   方式二：String函数   把其它类型转化成字符串
console.log(String(123)); // 把number123转化成字符串123
console.log(String(123.456)); // "123.456"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

//    方式三：new String()构造器    new后面说 
//      new的结果一定是一个对象    new String("hello")整体在你眼中就是对象
//    str对应的值是一个对象  对象是存储在堆区的
let str = new String("hello");
console.log(str);
```

```js
var str1 = "hello";  
var str2 = String("hello");  // 函数调用在你眼中是一个值
console.log(str1);
console.log(str2);
// 比较的是栈空间中的数据
console.log(str1 === str2); // true
```

```js
// new出来的都是新堆的  每一个堆都有一个唯一的地址
// === 比较的是栈中的数据  说白了，比较的是地址
var str1 = new String("hello")
var str2 = new String("hello")
console.log(str1 === str2); // false
```

```js
// 字符串的逆序输出
let str = "abcdef";

// 封装此函数的作用：字符串的逆序输出
function reverseString(str){
	// . 叫对象属性访问运算符 
	// 问：str是对象吗？
	// 答：不是对象，为什么可以打点：在你打点的瞬间会立即包装成一个对象
	// console.log(str.split("").reverse().join(""));

	return str.split("").reverse().join("");
}

let res = reverseString(str);
console.log(res); // fedcba

let str = "abcdef";
console.log(Array.from(str).reverse().join(""));
```

```js
let str = "abcdef";

function reverseString(str) {
	// charAt();
	let result = "";

	for(var i=str.length -1; i>=0; i--){
		result += str.charAt(i)
	}

	return result;
}

let res = reverseString(str);
console.log(res);
```

```js
// JS: ECMAScript  BOM   DOM 
let str = "abcdef";

function reverseString(str) {
	let newArr = [];

	let oldArr = Array.from(str);
	let oldArr2 = Array.from(str)
	// console.log(oldArr === oldArr2);

	oldArr2.forEach(function (item) {
		newArr.push(oldArr.pop())
	})

	return newArr.join("")
}

let res = reverseString(str);
console.log(res);
```

## 运算符

```js
// 在JS中，算术运算符，关系运算符，逻辑运算符，赋值运算符，位运算符，其它运算符
//  问typeof是什么？答：运算符  

// typeof 是一个运算符  in也是运算符  instanceof也是运算符  delete也是运算符...

// 全等于运算符  ===
console.log(1 === "1"); // false  运算符运算后肯定有一个值

console.log(1 === Number(1));  // true
// new Number(1) 是一个对象  堆  
console.log(1 === new Number(1));  // false
console.log("ok" === String("ok"));  // true
console.log("ok" === new String("ok"));  // false
// 比较时，只要有一方为NaN，那么比较的结果就为false
console.log(110 === NaN);  // false
console.log(NaN === NaN);  // false
console.log("abc" === "abc");  // true
console.log(null === null);  // true
console.log(null === undefined);  // false
console.log(undefined === undefined);  // true
```

```js
var a = [];
// = 赋值运算符  赋值的是栈区的地址
var b = a;
var c = [];
console.log(a === b);  // true
console.log(a === c);  // false
```

```js
// == 先发生隐式类型转化
console.log(null == undefined);  // true
// 只要是运算符，两侧的操作数的数据类型要一致，如果不一致会发生隐式类型转化

// ===> 如果比较的一方是null或und，只有在另一方是null或und的情况下才返回true,否则都是false

console.log(null == 0);  // false
console.log(Number(null));  // 0
console.log(undefined == 0);  // false

console.log(1=="1");  // true

// 在比较时，如果一方是boolean值，会把boolean进行转化，true转成1,false转成0，转化完毕后再进行比较
console.log("1"==true);  // true
console.log("2"==true);  // false
```

```js
// typeof运算符
//    typeof data
//    typeof(data)  ()中也可以有其它的运算符  typeof (1+2)
//      ()不是函数调用  不是函数调用   ()也是运算符
//    typeof(1+2)  里面有3个运算符

var a; 
console.log(typeof a);

// 没有声明的变量，使用typeof测试时，也是und
console.log(typeof ok);  // undefined 

// ok is not defined
// console.log(ok);

console.log(typeof undefined); // und

console.log(typeof true); // boolean
console.log(typeof 1.23); // number
console.log(typeof ""); // string  空串也是字符串
console.log(typeof "abc"); // string

function foo(){}
// typeof测试函数数据，非常准备，后面，判断一个数据是否是函数，放心使用typeof
console.log(typeof foo);  // function

// ------------- 使用typeof测试下面的类型，就不太准备，得到的大部分都是object
console.log(typeof ["a"]); // object
console.log(typeof {a:1}); // object
console.log(typeof Math); // object
console.log(typeof null); // object

// ------------- typeof后面可以加()
console.log(typeof(110+110));
```

```js
// 常用的判空方法
// var x = 110;
var x = "";
// x是number   !x    !一元运算符     只有一个操作数  
// !x 就可以把x转成布尔值
if (!x) {

} else {

}
```

```js
//判断变量是否为空对象
let obj = {a:1};
let obj = {};
let obj = null;

var obj;
if(obj == null){ // ==  可以判断obj为null或obj为und的情况
    console.log("ok");
}else{
    console.log("bad");
}

var obj;
if (obj === null) { // ===  只能判断obj是null的情况
    console.log("ok");
} else {
    console.log("bad");
}

var obj;
if (obj === undefined) { // ===  只能判断obj是und的情况
    console.log("ok");
} else {
    console.log("bad");
}
```

```js
let obj = {
	// 私有属性
	name: "wc",
	age: 18
}

// for in 是用来遍历对象中的属性
for(var key in obj){
	// console.log(key);
	// key是一个变量
	console.log(obj[key]);
}
```

```js
// 封装一个函数，判断一个对象是否有私有属性
// 没有私有属性，叫空对象 {}
function isEmpty(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}

// 判断obj中有没有私有属性
var obj = { name: "wc" };
// console.log(obj);

console.log(isEmpty(obj));  // false

let obj2 = {};
console.log(isEmpty(obj2));
```

```js
// 判断一个变量为空数组

// let a = "hello"; // ["h","e","l","l",o]
let a = []

if(Array.isArray(a) && a.length === 0){
	console.log("a是空数组");
}
// 判断变量为0 
let a = "0";
if(Number(a) === 0){
	console.log("a是0或‘0’");
}
```

```js
// 判断变量为0 或 NaN
// let a = "0";
// let a = 0;
// let a = NaN;
let a = "hello";
// !  最终的结果肯定要布尔类型
if (!(Number(a) && a)) {
    console.log("a是0或NaN");
}
```

```js
// 判断空串
// let str = "";
let str = "   ";
if(str === "" || str.trim().length === 0){
	console.log("a是空串或a字符串是空格~");
}
```

## switch

```js
// switch 语句 比较的时候是 全等于  ===
function getStringValue(str) {
	switch (str) {
		case "1":
			console.log("1");
			break;
		case "2":
			console.log("2");
			break;
		case "3":
			console.log("3");
			break;
		case "4":
			console.log("4");
			break;
		default:
			console.log("默认值");
	}
}

getStringValue(1)
getStringValue(2)
getStringValue(3)
getStringValue(4)
```
## 异步代码

```js
// 在JS中，代码就分两类：
//   1）同步代码
//         代码的书写顺序和代码的执行顺序一样
//         你见到的99%的代码都是同步代码
//   2）异步代码
//         代码的书写顺序和代码的执行顺序不一样
//         目前为止，你见到的异步代码就两个：
//             1）定时器   2）事件绑定   

// 代码书写顺序和代码执行顺序是一样的（同步代码）
console.log("start");
for(var i=0; i<=10; i++){
    console.log(i);
}
console.log("end");

// 代码的书写顺序和代码的执行顺序不一样
// 代码在执行时，先执行同步代码，代码执行完毕后，会在合适的时机去执行异步代码
console.log("start");
setTimeout(function(){
    console.log("setTimeout...");
},2000)
console.log("end");
```

```js
console.log("start");
// 定时器时间为0，也不会立即执行，至少时间有300ms
setTimeout(function () {
    console.log("setTimeout...");
},0)
console.log("end");
```

```js
// 代码执行，先执行同步代码，同步代码执行完毕后，才会执行异步代码
console.log("start");

while(1);

setTimeout(function(){
    console.log("setTimeout...");
},0)

console.log("end");
```

```vue
<template>
  <button>点我</button>  
</template>
<script>
    let btn = document.getElementsByTagName("button")[0];
    console.log("start");
    // 事件绑定是异步代码  
    // 异步代码只有在合适的时机才会执行
    btn.onclick = function(){
      console.log("click....");
    }
    console.log("end");
</script>
```

<git-talk />
