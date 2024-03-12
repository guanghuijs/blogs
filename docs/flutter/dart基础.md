# dart基本语法

## 入口

- main函数是dart入口
- dart当中打印信息使用print函数

```dart
main(List<String> args) {
  // List<String> args -> 列表<String> - 泛型
  print("Hello World");// 结尾必须加;
}
```

## 注释

```dart
// 单行注释
/* 多行注释 */
/// 文档注释
```

## 语法基础

- 注释语法与JS 一致
- 声明函数不需要关键字 (js中通过function关键字来声明函数)
- 函数和参数前面都有类型声明,void表示没有返回值,int是整型数字
- 打印使用print(JS使用console.log())
- 每行代码结束时,必须写结束分号
- 字符串通过引号包起来,支持模板字符串
- main是入口函数,Dart应用程序总是从main函数开始执行
- 用var声明的变量,其数据类型是动态的

## 变量

### 明确的声明
```dart
main(List<String> args) {
  String name = "渣渣辉";
}
```

### 类型推导(var final const)
> 类型推导的方式虽然没有明确的指定变量的类型, 但是变量是有自己的明确的类型

- var声明变量

```dart
main(List<String> args) {
  var age = 20;
  // age = "abc";
  age = 30;
  dunamic Age = 18;
}
```
- final声明常量
```dart
final height = 1.88;
// height = 2.00; 编译不通过
```

- const声明常量
```dart
const address = "广州市";
// address = "北京市"; 编译不通过
```
- final和const的区别
```dart
// const必须赋值 常量值(编译期间需要有一个确定的值)
// final可以通过计算/函数获取一个值(运行期间来确定一个值)
// const date1 = DateTime.now(); 编译不通过
final date2 = DateTime.now();
```
:::tip 提示
final用的更多一点。dart声明变量大小写敏感(例如: age与Age是两个不同的变量)。
dart变量默认值是null;dart变量值不会隐式转换;(强类型语言)
:::


### dart 数据类型
- Number
- String
- Boolean
- List
- Set
- Map

## Number
- num 可以声明是整数,也可以是浮点数
- int 只能声明整数
- double 只能声明浮点数

```dart
main() {
  int cont = 6;
  // cont = 6.3;

  double core = 90;
  print(core); // 90.0

  num age = 18;
  num sum = 20.9;
}
```

- 常用api

```dart
main() {
  int cont = 6;
  // cont = 6.3;

  double core = 90;
  print(core); // 90.0

  num age = 18;
  num sum = 20.9;

  print(core.toString()); // '90.0'
  print(age.toDouble()); // 18.0
  print(sum.toInt()); // 20 向下取整

  print(3.1415926.round()); //3 四舍五入
  print(3.6.round()); //4 四舍五入
  print(3.1415926.toStringAsFixed(5)); // 3.14159 四舍五入指定小数位数

  print(10.remainder(4)); // 2 取余

  // 比较: a.compareTo(b); a = b 返回：0; a > b 返回: 1; a < b 返回: -1;
  print(10.compareTo(10)); // 0
  print(10.compareTo(8)); // 1
  print(10.compareTo(20)); // -1

  // 最大公约数
  print(10.gcd(16)); // 2
  print(12.gcd(16)); // 4

  // 科学计数法
  print(1000.toStringAsExponential(2)); // 1.00e+3
  print(1000.toStringAsExponential(1)); // 1.0e+3
}
```

## [字符串](https://api.dart.cn/stable/3.3.1/dart-core/String-class.html)

- 字符串声明
```dart
// 单引号声明
var str1 = 'hello';
// 双引号声明
var str2 = "world";
// 三个引号可声明多行的字符串,单双均可以,要成对出现
String str4 = """我系
渣渣辉""";
String str5 = '''你洗
古天乐''';
```
- 字符串拼接
```dart
var str1 = 'hello';
String str5 = '''你洗
古天乐''';
print(str1 + str5);
// hello你洗
// 古天乐
```
- 字符串常用api
```dart
print('abcdefg'.split('')); // [a, b, c, d, e, f, g]

// 去除首位空格
print('  123 '.trim()); // 123

// 判空
print(''.isEmpty); // true
print(''.isNotEmpty); // false

// 替换
print('hello java'.replaceAll('java', 'dart')); // hello dart
print('1s5f15t1rg1gh5r1g1r1h5rt1h5r'.replaceAll(RegExp(r'\d+'), '_')); // _s_f_t_rg_gh_r_g_r_h_rt_h_r

// 判断是否是手机号
print(RegExp(r'^1\d{10}$').hasMatch('13312580490')); // true

// 查找字符串
print('hello'.contains('e')); // true

// 定位字符串
print('hello'.indexOf('e')); // 1
print('hello'.lastIndexOf('o')); // 3
```
- 模板字符串
```dart

```


- 定义字符串
```dart
var str1 = 'abc';
var str2 = "abc";
var str3 = "";

```
- 字符串和表达式进行拼接

```dart
var name = "why";
var age = 19;
var height = 1.88;
```

::: tip
强调: ${变量}, ${}可以省略
```dart
var message1 = "my name is $name, age is $age, height is $height";
var message2 = "name is $name, type is ${name.runtimeType}";
print(message1);
print(message2);
```
:::

## 集合类型
```dart
main(List<String> args) {
  // 1.列表List: [];
  var names = ["abc", "cba", "nba", "cba"];
  names.add("mba");

  // 2.集合Set: {}; 
  var movies = {"星际穿越", "大话西游", "盗梦空间"};
  names = Set<String>.from(names).toList();
  print(names);

  // 3.映射Map
  var info = {
    "name": "why",
    "age": 18
  };
}
```

## 函数
- 基本使用
```dart
main(List<String> args) {
    print(sum(20, 30));
}

// 返回值的类型是可以省略(开发中不推荐)
int sum(int num1, int num2) {
  return num1 + num2;
}
```
- 可选参数
```dart
main(List<String> args) {
  sayHello1("why");

  sayHello2("why", 18, 1.88);

  sayHello3("why", height: 1.88);
}

// 必选参数: 必须传
void sayHello1(String name) {
  print(name);
}

// dart中没有函数的重载
// 可选参数: 位置可选参数 - 命名可选参数
// 注意: 只有可选参数才可以有默认值
// 位置可选参数: [int age, double height]
// 实参和形参在进行匹配时, 是根据位置的匹配
void sayHello2(String name, [int age = 10, double height = 2]) {

}

// 命名可选参数
void sayHello3(String name, {int age = 10, double height = 3.14}) {

}
```
- 函数是一等公民
```dart
main(List<String> args) {
  // 1.直接找到另外一个定义的函数传进去
  // test(bar);

  // 2.匿名函数 (参数列表) {函数体};
  test(() {
    print("匿名函数被调用");
    return 10;
  });

  // 3.箭头函数: 条件, 函数体只有一行代码
  test(() => print("箭头函数被执行")); 
}

// 函数可以作为另外一个函数的参数
void test(Function foo) {
  var result = foo();
}


void bar() {
  print("bar函数被调用");
}
```
[//]: # (todo)
- 高阶函数

## 运算符
- ??=
> 当原来的变量有值时, 那么??=不执行,原来的变量为null, 那么将值赋值给这个变量
```dart
var name = null;
name ??= "lilei"; // lilei
```
- ??
> ??前面的数据有值, 那么就使用??前面的数据,??前面的数据为null, 那么就使用后面的值
```dart
var name = null;
var temp = name ?? "lilei"; // lilei
```

- 级联运算符
```dart
main(List<String> args) {
  // var p = Person();
  // p.name = "why";
  // p.run();
  // p.eat();

  // 级联运算符
  var p = Person()
            ..name = "why"
            ..eat()
            ..run();
}

class Person {
  String name;

  void run() {
    print("running");
  }

  void eat() {
    print("eating");
  }
}
```

- 循环
```dart
main(List<String> args) {
  // 1.基础for循环
  for (var i = 0; i < 10; i++) {
    print(i);
  }

  // 2.遍历数组
  var names = ["why", "cba", "cba"];
  for (var i = 0; i < names.length; i++) {
    print(names[i]);
  }

  for (var name in names) {
    print(name);
  }
}
```

## 面向对象

## flutter

