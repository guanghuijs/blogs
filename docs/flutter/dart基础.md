




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

