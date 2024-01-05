# TS

## 什么是TS
> TypeScript是一种由微软开发的自由和开源的编程语言,它是JavaScript类型的超集。

### 为什么要用TS
- 程序更容易理解（函数或者方法输入输出的参数类型，外部条件等）；
- 效率更高，在不同代码块和定义中进行跳转，代码补全等；
- 更少的错误，编译期间能够发现大部分的错误，杜绝一些比较常见的错误；
- 好的包容性，完成兼容 JavaScript，第三方库可以单独编写类型文件；

### 环境搭建
```bash
#安装
npm install -g typescript
#编译
tsc helloworld.ts
```
*一般就是项目启动前安装到项目依赖中,构建工具自动编译*

## 常用数据类型约束
### ts基本类型约束写法
- 字符串、数值、布尔、any、null、undefined
```ts
//字符串：
let str: string = '你好呀';
//数值：
let num: number = 123;
//布尔：
let bool: boolean = true;
//any：
let an: any = true;
//any：可以是任何类型
//null:
let nu:null = null;
//undefined:
let ud:undefined  = undefined;
// 联合类型
let score: number | null = 80;
```

## 数组约束写法

- 数组每一个成员必须是xx类型
```ts
let arr1: number[] = [1,2,3,4];
let arr2: string[] = ['a','b','c'];
// 泛型写法
let arr3: Array<number> = [1,2,3];
```

- 数组中可能存在多个类型
```ts
//这个不看位置
let arr4: (string | number)[] = [1,'b'];
//这个是严格按照位置排序的
let arr5: [number,string] = [1,'b'];
```

- 元组约束
```ts
// 栗子经纬度坐标
const positon:[x,y] = [102.85076697175514, 24.89248383034783]
```

## 对象约束写法
- 基本写法
```ts
let obj1:{
	a:number;
	b:number;
	c:number;
} = {
	a:1,
	b:2,
	c:3
}
```
- 可选属性(interface同理)
```ts
type Obj = { name: string; age?: number };
// 可有
let obj: Obj = { name: '', age: 18 }
// 可无
let obj1: Obj = { name: '' }
```
- 未知属性
```ts
type Student = {
  id: string;
  name: string;
  [propName: string]: any
}

const Stu1: Student = {
  id: 'sjflsjfdlk',
  name: 'hr',
  age: 20
}
```
- 只读属性
```ts
type Student = {
  readonly id: string;
  name: string;
}
const stu1: Student = {
  id: 'sjflsjfdlk',
  name: 'hr',
  age: 20
}
// 尝试分配给常量或只读变量
stu1.id = '99999999'
```

## 函数约束

- 函数和参数返回值约束
```ts
function fun1( a:number, b: number ): number {
   return a+b;
}
```
- 函数可选参数
```ts
function fun1( a:number, b?: number ): number {
   if( b ){
      b = 123;
   }
   return a;
}
```
- 函数参数默认值
```ts
function fun3( a:number , b:number=1,c:{ name:string,age?: number } = { name:'wgh' }){
}
```
- 箭头函数形式写法约束
```ts
let fun4:(params1:number,params2:string) => string = (a:number,b:string):string =>{
   return a + b;
}
```

## interface & type

### interface
- 定义对象、函数类型约束
```ts
// 约束对象
interface Person {
  name: string;
  age: number;
}
const p: Person = {
  name: 'wgh',
  age: 18
}

// 函数约束
interface Fn {
(a, b): string;
}
const fn: Fn = (a, b) => `${a}+${b}`;

// 数组约束(一般不用)
interface NumberArr {
  [index: number]: string | number;
}
const arr: NumberArr = ['', 6];
```

### type
- 定义基本数据类型、函数、数组、元组、联合类型约束
```ts
// 定义基本数据类型约束
type name = string;
type age = string;
//定义联合类型
type sex = string | number;
// 定义元组约束
type Position = [number, number];
// 定义数组约束
type ScoreArr = number[];

// 定义对象类型约束
type Person = {
  name;
  age;
}
// 约束方法
type Fn = (a: number,b: string) => string;
```

### 相同点
- 都可以定义函数和对象约束
```ts
// 约束对象
interface Person {
  name: string;
  age: number;
}
const p: Person = {
  name: 'wgh',
  age: 18
}

// 函数约束
interface Fn {
(a, b): string;
}
const fn: Fn = (a, b) => `${a}+${b}`;

// 定义对象类型约束
type Person = {
  name;
  age;
}
// 约束方法
type Fn = (a: number,b: string) => string;
```

- 都可以被继承
  - interface继承interface
  ```ts
  interface A {
    name:string
  }
  interface B extends A{
    age:number
  }
  const p: B = {
    name: '',
    age: 18
  }
  ```
  - interface继承type
  ```ts
  type A = {
    name:string
  }
  
  interface B extends A {
    age: number
  }
  ```
  - type继承type
  ```ts
  type A = {
    name:string
  }
  
  type B = A & {
    age: number
  }
  ```
  - type继承interface
  ```ts
  interface A  {
    name:string
  }
  
  type B = A & {
    age: number
  }
  ```

- 都能实现implements
```ts
// interface
interface ICat{
    setName(name:string): void;
}
class Cat implements ICat{
    setName(name:string):void{
        // todo
    }
}
 
// type 
type ICat = {
    setName(name:string): void;
}
 
class Cat implements ICat{
    setName(name:string):void{
        // todo
    }
}

// todo
type Person = { name: string } | { setName(name: string): void };
// 无法对联合类型Person进行实现
// error: A class can only implement an object type or intersection of object types with statically known members.
class Student implements Person {
  name = '张三';
  setName(name: string): void {
    // todo
  }
}
```

### 不同点

- 定义写法、继承写法不一样
```ts
interface A {}
type A = {}

interface B extends A {}
type B  = A & {}
```
- type可以定义基本数据类型约束
- type可以定义联合类型约束
```ts
type TestUniteType = string | { name: string }
```
- type可以定义元组约束
```ts
type Tuple = [string,string]
```
以上都是interface做不到的,接下来记录type做不到的
- interface可以申明合并
> 如果你多次声明一个同名的接口，TypeScript 会将它们合并到一个声明中，并将它们视为一个接口。这称为声明合并。
```ts
interface Person { name: string }
interface Person { age: number }
 
let user: Person = {
    name: "Tolu",
    age: 0,
}

type People = { name: string };
type People = { age: number }

// 初始值设定项类型 {name: string, age: string} 不可分配给变量类型 People
const p: People = {
  name: '',
  age: '',
};
```

- 索引签名问题
```ts
// todo
interface propType{
    [key: string] : string
}
 
let props: propType
 
type dataType = {
    title: string
}
interface dataType1 {
    title: string
}
const data: dataType = {title: "订单页面"}
const data1: dataType1 = {title: "订单页面"}
props = data
// Error:类型“dataType1”不可分配给类型“propType”; 类型“dataType1”中缺少索引签名 
props = data1
```
### 总结
- 官方推荐用 interface，其他无法满足需求的情况下用 type。
- 但其实，因为 联合类型 和 交叉类型 是很常用的，所以避免不了大量使用 type 的场景，一些复杂类型也需要通过组装后形成类型别名来使用。 所以，如果想保持代码统一，还是可选择使用 type。通过上面的对比，类型别名 其实可涵盖 interface 的大部分场景。
- 对于 React 组件中 props及 state，使用 type ，这样能够保证使用组件的地方不能随意在上面添加属性。如果有自定义需求，可通过 HOC二次封装。
- 编写三方库时使用interface，其更加灵活自动的类型合并可应对未知的复杂使用场景。
### 参考[博客](https://blog.csdn.net/xgangzai/article/details/123267280?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168666707416800213096707%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168666707416800213096707&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-1-123267280-null-null.142^v88^control_2,239^v2^insert_chatgpt&utm_term=interface%E5%92%8Ctype%E7%9A%84%E5%8C%BA%E5%88%AB&spm=1018.2226.3001.4187)

## 类
### 定义类
```ts
class Person {
   userName:string;
   userAge:number;
   constructor( name:string, age:number ){
      this.userName = name;
      this.userAge = age;
   }
   run( a:number, b:number ):number {
      return a+b;
   }
}
new Person( '张三' , 18 ).run(1,2);
```
### 修饰符
- readonly 只读
- public 公开的，在任何地方都可以访问
- protected 受保护的，只能在当前类和当前类的子类内部使用
- private 私有的，当前类的内部使用
### 抽象类
> 不完成具体的功能 抽象类不能new 抽象类可以继承，如果要继承，就必须实现该类的抽象方法
```ts
abstract class Person{
    abstract run():void;
    abstract change():void;
}

abstract class Person{
    abstract run():void;
    abstract change():void;
}
```
### implements对于类的约束
```ts
interface IAnimal{
  name:string;
  age:number;
}

interface IAnimalDo{
  eat():void;
}

class Cat implements IAnimal,IAnimalDo{
  name: string;
  age: number;
  eat():void{};
  constructor(name:string,age:number) {
    this.name = name;
    this.age = age;
  }
}
```
## 泛型
### 什么是泛型
> 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
### 函数的泛型写法
```ts
function fun<T>(arg:T):T{
  return arg
}
fun<string>('wgh');
fun<number>(5);

function fun2<T,U>(a:U,b:T) {
  return `${a},今年+${b}岁`;
}
fun2<number,string>('wgh',25);
```
### 接口的泛型写法
```ts
// - 接口的泛型写法
interface IData {
  length:number
}

function fun5<I extends IData>(arg: T): number {
  return arg.length;
}
fun5<number[]>([1,2,3,4,5,6]);
fun5<string>('my name is wgh');
fun5<string[]>(['1','2']);
fun5<HTMLCollection>(document.querySelectorAll('div'));
```
### class的泛型写法
```ts
class Person<T,U,I>{
  name:T;
  age:U;
  fun<I>(){}
  constructor(name:T,age:U) {
    this.name = name;
    this.age = age;
  }
}
const p1 = new Person<string,number,number[]>('wgh',25)
```

## 使用泛型和keyof约束参数

```ts
function fn<T extends object, K extends keyof T>(obj: T, props: K) {}
fn({name: 'wgh', age: 18}, 'name');
```

## 类型断言
- 语法:值 as 类型
- 将一个联合类型断言为其中一个类型
```ts
type Fish = {
  name: string;
  swim(): void;
}

type Cat = {
  name: string;
  run(): void;
}

const fnLogName = (animal:Fish|Cat) => {
  console.log(animal.name);
}

const fnDo = (animal:Fish|Cat) => {
  (animal as Fish).swim()
}

const tom:Cat = {
  name:'汤姆',
  run() {
    console.log(this.name + '会跑');
  }
}

const swim = (animal:Fish|Cat) => {
  (animal as Fish).swim();
}

swim(tom);//编译不报错,运行报错
```

- 将一个父类断言为更加具体的子类
```ts
class TypeError extends Error{
  code: number = 0;
}

class HttpError extends  Error{
  statusCode:number = 200;
}

const isApiError = (code:Error):string|undefined => {
  if((code as HttpError).statusCode == 200){
    return 'apiError';
  }
}
```

- 将任何一个类型断言为any
```ts
(tom as any).left;//编译报错
```
- 将any断言为一个具体的类型
```ts
const Luca:any = {
  name:'路西',
  run: () => {}
};
(Luca as Cat).run();
```
- 类型断言限制
  - 联合类型可以被断言为其中一个类型
  - 父类可以被断言为子类
  - 任何类型都可以被断言为any
  - any可以被断言为任何类型

- 双重断言
```ts
let cont: number = 1;
(cont as any as string).length;
// 但这么做反而会导致一系列问题，所以，不到万不得已，最好不要这么做。
```

## 命名空间
- ECMAScript 2015开始 在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内
- 命名空间:内部模块，主要用于组织代码，避免命名冲突。
- 模块: ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。
```ts
namespace B {
   class Animal {}
}
namespace B {
   class Animal {}
}
```

~## 装饰器~

## 枚举
> 用于定义命名常量集合的数据类型。

### 定义枚举
```ts
// 数据枚举 默认从0开始自增
enum Color {
  red,// 0
  blue,// 1
  yellow // 2
}

// 也可以指定初值
enum Animal {
  dog = -99, // -99
  cat, // -98
  pig // -97
}
```

### 枚举访问
```ts
enum Color {
  red,// 0
  blue,// 1
  yellow // 2
}
const color = Color.red; // 0
```

### 字符串枚举
```ts
// 从值为字符串项开始,不会自增
enum Color {
  RED, // 0
  BLUE = 'blue', // 'blue'
  YELLOW // und
}
```

## 操作符和操作符
- 非空(!)、可选链(?)操作符
```ts
// 非空操作符(!)
const obj: {
  name?: string;
  age?: null | { a: number };
  [propName: string]: any;
} = {};
// 用在赋值的内容后时，使null和undefined类型可以赋值给其他类型并通过编译，表示该变量值可空
const b: string = null!;
const a: number = obj.age!;
// 当一个对象的某个属性可能为空和und和对象时,感叹号指明该对象属性不为null和und(即:该属性为对象),方便再操作该属性的属性
obj.age!.a = 6

formSchema.find((item) => item?.props?.field === "weeks")!.props!.columns = semesterCalWeek(
        startAt,
        endAt,
);
```
- 布尔类型转化(!!)、空值合并(??)运算符
```ts
!!0 // false
!!1 // true
!!undefined // false
!!null // false
!!NaN // false

// ??前面表达式不为null、undefined则值为??后面的
undefined ?? 1 // 1
null ?? 1 // 1
NaN ?? 1 // NaN
```
- 类型叠加(&)、联合类型(|)
```ts
type a = {
  name: number
}
type b = a & {
  age: number
}

const a:string | number = 1
```
- 数字分割符(_)
```ts
 const a = 1_0000_0000;
console.log(a); // 100000000
```

<git-talk />
