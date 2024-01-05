# ES6

## 块级作用域

- 什么是块级作用域 
> 简单说一个{}计时一个块级作用域,常见的开机作用域有函数,循环,{}

- 为什么需要块级作用域
  - var变量 会提升 提升到函数体的最前面 
  - 同名局部变量会覆盖全局变量
  - 循环都结束了,但是循环变量还可以使用
    ```js
      // 我们希望循环结束后，循环变量是不能使用的
      for (var i = 0; i <= 10; i++) {
      console.log("i=", i);
      }
      console.log("------");
      console.log("last i=", i);
    ```

::: details if判断的{}内属于块级作用域
```js
// t是一个全局变量
// let t = "hello es6"
// console.log(t);

; (function () {
    // 即使使用了var  但是var t 是写在函数中的
    // 形成局部作用域，不会污染全局
    var t = "hello es6"
    console.log(t);
}())

var t = 666;
console.log(t);
```
:::
### 暂存性死区
```js
let t = "hello";

{
    // {} + let已经形成了块级作用域
    // let 是不能提升的
    // ReferenceError: Cannot access 't' before initialization
    // 暂存性死区
    console.log("t=", t);
    let t = "world";
}
```

## let const

### 相同点
- let、const定义的变量/常量不会提升
- 暂存性死区
```js
if(true){
    // ReferenceError: Cannot access 'num' before initialization
    num = 888;  // 把888赋值给num  找num  只能在自己的作用域中找
    // 在使用let声明变量之前，不能使用这个变量，在之前的这一片区域，叫暂时性死区
    // 说白了，使用let声明变量之前，该变量不能使用。
    let num; // let + {}形成块给作用域  num说白了，是局部变量
}
```
- 不允许重复声明
- 使用let、const声明的变量,并不会挂载到GO上的

### 不同点
- let 声明变量, const 声明常量
- const 声明是必须赋初值,且不允许修改
```js
const声明的常量
const PI = 3.14;
PI = 666;
// TypeError: Assignment to constant variable.
console.log(PI);
```

::: tip ts开发同通过as const让变量、对象变为只读
```ts
const obj = {
  name: 'John',
  age: 30,
} as const;

obj.name = 'Alice'; // Error: 无法分配到 "name" ，因为它是只读属性。
```
:::

## 结构解析赋值

### 数组结构解析赋值
- 结构解析赋值要保证两侧的数据类型要一样
```js
let [name1,name2,name3] =  ["wc", "xq", "jj"];
console.log(name1,name2,name3);
```
```ts
let [
    {
        userName,
        age
    },
    [num1, num2],
    num3
] = [
  {
    userName: 'zs',
    age: 18
  },
  [1, 3],
  6
];
console.log(userName, age, num1, num2, num3);
```
- 如果解构不成功，对应的值是und
```ts
let [num1, num2] = [666];
console.log(num1, num2); // 666 und
```
- 如果解析不成功,可以指定默认值
```ts
const [a = 5, b = 4, c, d = 88] = [66, 77]
//a:66 b:77 c:und d:88
```
- 不完全解构
```ts
let [,b,] = ['周星驰','吴孟达','王宝强'];
console.log(b);// 吴孟达
```
- 结合reset运算符解析
```ts
let [a,...b] = ['周星驰','吴孟达','王宝强'];
console.log(a,b);// '周星驰' ['吴孟达','王宝强'];
// let [...a] = ['周星驰','吴孟达','王宝强']; // ['周星驰','吴孟达','王宝强']
```

::: tip 提示
rest 元素必须位于最后
```ts
let [...a,b] = ['周星驰','吴孟达','王宝强'];
```
:::

### 使用结构解析赋值交换两个变量
```ts
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a,b); // 2 1
```


### 展开运算符和reset运算符
- 展开运算符
```ts
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]
console.log(arr3);// [1,2,3,4,5,6]
```

- reset运算符
```ts
let [a,...b] = ['周星驰','吴孟达','王宝强'];
console.log(b); // ['吴孟达','王宝强']
function fn(a,...args) {
  console.log(typeof  args, args instanceof Array) // object true
  console.log(arguments instanceof Array); // false
  console.log(a,args); // 1 [2, 3, 4, 5, 6]
}
fn(1,2,3,4,5,6);
```
### 对象结构解析赋值
- 对象解析赋值
```ts
let { userName, b } = {userName: 'wgh', age:18 };
console.log(userName,b); // wgh undefined
```
::: tip
左侧是变量名，需要保证和对象中的键要一样的,不然则解析不成功,解析不成功值为undefined
:::

- 可以给变量名起别名
```ts
let { userName: name, userAge: age } = {userName: 'wgh', userAge:18 };
console.log(name, age); // wgh 18
```
::: tip
如果起了别名，只能使用别名
:::

- 如果解构不成功，可以指定默认值
```ts
// let { name,age } = obj;
// console.log(name);
// console.log(age);  // undefined

let { name, age=18 } = obj;
console.log(name);
console.log(age);  // undefined
```

### 字符串解析赋值
```ts
// 字符串的解构赋值
let [a,b,c,d] = "wugh";
console.log(a,b,c,d); // w u g h

let {'0': e,length} = 'wgh';
console.log(a,length) // w 3
```
### 函数解析赋值
- 函数的形参列表也可以解构赋值
```ts
function foo([x,y]){
    return x+y;
}
console.log(foo([666,888]));
```
- 如果解构失败，指定默认值
```ts
function foo({
    x = 0,
    y = 0
}) {
    return x + y;
}
console.log(foo({
    x:123,
    y:456
}));
```

## 箭头函数

### 箭头函数定义
```ts
let f = (x, y) => {
  return x + y;
}
console.log(f(1, 2));

// 如果只有一个形参，()可以不写
let f1 = x => {
  return x/3;
}
console.log(f(9));

// 如果函数体只有一条语句，{}和return都可以不写
let f2 = x =>  x / 3;
console.log(f(9));
```

### 箭头函数使用细节

```ts
// 函数返回对象
let f = () => {
    return { name:"wc" }
};
// 如果返回的是对象，对象需要使用()包起来
// 如果不包，对象的{}会当成函数的{}
let f1 = () => ({ name: "wc" })
console.log(f());
```

### 箭头函数与函数的区别
- 写法不同，箭头函数使用箭头定义，写法简洁。 普通函数使用function定义。
- 箭头函数都是匿名函数，而普通函数既可以是匿名函数，也可以是具名函数。
- 箭头函数不能作为构造函数来使用，普通函数可以用作构造函数，以此来创建一个对象的实例。
- this指向不同，箭头函数没有this，在声明的时候，捕获上下文的this供自己使用，一旦确定不会再变化。在普通函数中，this指向调用自己的对象，如果用在构造函数，this指向创建的对象实例。普通函数可以使用call，apply，bind改变this的指向。
- 箭头函数没有arguments（实参列表，类数组对象），每一个普通函数在调用后都有一个arguments对象，用来存储实际传递的参数。
- 箭头函数没有原型，而普通函数有。

### 箭头函数不合适的场景

- 不能作为类（构造器）,不能new
- 没有prototype显示原型
- 如果给原型对象上添加方法,方法最好不要写成箭头函数
```ts
function Cat(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

Cat.prototype.sayHello = function(){
  console.log(this.name);
}

Dog.prototype.sayHello = () => {
  console.log(this.name);
}

let cat = new Cat("小咪");
let dog = new Dog("旺财");

cat.sayHello();// 小咪
dog.sayHello();// und
```

::: tip 思考
```ts
var name = "二哈"
let p = {
    name: "旺财",
    getName: function () {
        console.log(this.name);
        return () => {
            console.log(this.name);
        }
    }
}
p.getName()(); // 旺财 旺财
```
:::

## 对象扩展

### 属性和方法的简写
```ts
let uName = "wc";
let uAge = 18;
let person = {
	uName,
	uAge,
	sayHello() {
		console.log("sayHello...");
	}
}
console.log(person.uName);
console.log(person.uAge);
person.sayHello();
```

### Object.assign

- 同名属性，后面的覆盖前面的。
```ts
const dog1 = { name:"旺财", age: 2 };
const dog2 = Object.assign(dog1, { name: '二哈' });
console.log(dog2); // { name:"二哈", age: 2 }
```

- 使用api给对象添加属性
```ts
const dog1 = { age: 2 };
Object.defineProperty(dog1, 'name', {
  value: '二哈',
  enumerable: false, // 是否可枚举
  configurable: false // 是否可(配置)删除
})
```

- Object.assign 只能copy可枚举的属性

```ts
const dog1 = { age: 2 };
Object.defineProperty(dog1, 'name', {
  value: '二哈',
  enumerable: false, // 是否可枚举
  configurable: false, // 是否可(配置)删除
})
Object.assign({},dog1); // { age: 2 }
```


### 封装一个可以实现深copy的方法
```ts
function deepClone(source) {
	let newObj = {};
	for(let key in source){
		if(typeof source[key] == "object"){
			newObj[key] = deepClone(source[key])
		}else{
			newObj[key] = source[key]
		}
	}
	return newObj;
}
let obj1 = { name: "wc", address: { city: "bj" } }
let obj2 = deepClone(obj1);
obj1.address.city = "sh";
console.log(obj2.address.city); // bj
```

## Symbol

## Proxy
```ts
let obj = {
	name: "wc",
	age: 18
}
let objProxy = new Proxy(obj, {
	// 访问属性时，走get，获取值时的捕获器
	get(target, key) {
		console.log(`监听到了obj对象的${key}属性被访问了`);
		return target[key]
	},
	// 设置值时的捕获器
	set(target, key, newValue) {
		console.log(`监听到了obj对象的${key}属性被设置了`);
		target[key] = newValue;
	},
	// 监听delete的捕获器
	deleteProperty(target, key) {
		console.log(`监听到了obj对象的${key}属性被删除了`);
	},
	// 监听in的捕获器
	has(target, key) {
		console.log(`监听到了obj对象的${key}属性in操作`);
		return key in target;
	},
	// 还有其它的捕获器
});
objProxy.name; // 监听到了obj对象的name属性被访问了
```
## Set

- Set创建及基本操作
```ts
 const set = new Set();
 set.add(1);
 set.size; // 1
 set.has(1); // true
 set.clear();
 // delete entries values keys
```
- Set会自动去除重复元素
```ts
 const set = new Set();
 set.add(1);
 set.add(1);
// Set(1) {1}

// 数组去重
let arr = [1, 1, 2, 2, 3, 3];
console.log(Array.from(new Set(arr)));
```

## Map

- Map基本操作
```ts
const map = new Map();
map.set(name,'旺财');
map.get('name');
map.delete(name);
map.clear()
```


<git-talk />

