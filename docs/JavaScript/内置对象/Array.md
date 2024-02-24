# 数组

## 结构解析赋值

- 结构解析赋值要保证两侧的数据类型要一样

```ts
let arr = ["wc", "xq", "jj"];

// 需要保证 = 两侧的数据类型要一样
// arr是一个数组  =左侧也需要写一个数组
// 在[]，就可以写一个变量，变量的值就是解构出来的数组元素
let [name1, name2, name3] = arr;
console.log(name1, name2, name3);
```

```ts
let arr = [
    {
        userName: 'zs',
        age: 18
    },
    [1, 3],
    6
];

let [
    {
        userName,
        age
    },
    [num1, num2],
    num3
] = arr;
console.log(userName, age, num1, num2, num3);
```

- 如果解构不成功，对应的值是und

```ts
// 问：und都在哪些地方出现过？
// 答：
//      1)声明的变量，没有赋值
//      2)访问一个对象中不存在的属性
//      3)函数没有返回值，默认也是返回und
//      4)形参没有赋值，也是und
//      5)访问数组中不存在的索引，对应的元素也是und
//      6)解析不成功的，得到的也是und
let [num1, num2] = [666];
console.log(num1, num2);
```

- 如果解析不成功,可以指定默认值
```ts
const [a = 5, b = 4, c, d = 88] = [66, 77]
//a:66 b:77 c:und d:88
```

## 数组去重

### ES6 Set([...new Set(arr)])

```js
function unique(arr) {
    return Array.from(new Set(arr))
}

//这种方法还无法去掉 {} 空对象，后面的高阶方法会添加去掉重复 {} 的方法。
```

### 循环嵌套,splice(es 常用)

```js
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
```

```js
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr))
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```

### indexOf includes

> 新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则 push 进数组。

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1 /* !array.includes( arr[i]) */) {
            array.push(arr[i])
        }
    }
    return array;
}
```

### filter

```js
function unique(arr) {
    return arr.filter(function (item, index, arr) {
        //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
        return arr.indexOf(item, 0) === index;
    });
}
```

### reduce+includes

```js
function unique(arr) {
    return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}
```

## 对象数组去重

先把数组对象序列化,再用set装一遍,再放回数组中,再把元素反序列化

```js
//const uniqueArr = Array.from(new Set(arr.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
function uniqueArr(arr) {
    return [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
}
```

## 对象数组排序

- sort方法

```js
const a = [{name: 'wgh', age: 18}, {name: 'lw', age: 19}]
a.sort((m, n) => n.age - m.age)//后减前降序  [{name:'lw',age:19},{name:'wgh',age:18}]
```

## 查找递归对象中指定下标系列的对象

```js
function modifyPropertyByIndices(obj, arrProperty, indices, callBack) {
    indices.reduce((acc, cur, idx) => {
        if (idx === indices.length - 1) {
            callBack(acc, cur)
        } else {
            return acc
        }
    }, obj[arrProperty])
}
```

## Array.from

数组的form方法+mockJs造模拟数据贼方便

```js
import {mock, Random} from 'mockJs';

Array.from({length: 50}, () => ({
    name: mock('@cname'),
    age: Random.integer(18, 24)
}))
// 这表示随机生成了50条,含有name(mock随机生成名字)、年龄(18 - 24)的数据,每次刷新都不一样
```

## 数组去空

```js
test.filter(item => item && item.trim()); // 支持去除只含空格的字符串,但是数组只能包含字符串,null, undefined,不然会报错
test.filter(item => item); // 不会去除只含空格的字符串,空数组、空对象,会去除0,false,null,undefined
```

## 能改变原数组的方法可视化

- push 尾部追加元素

:::demo
```vue
<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: `${color}` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.push({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    })
  }
</script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
```
:::

- pop 尾部删除元素

:::demo
```vue
<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: `${color}` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.pop()
  }
</script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
```
:::

- unshift 头部添加元素

:::demo
```vue
<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: `${color}` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.unshift({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    })
  }
</script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
```
:::

- shift 头部删除元素

:::demo
```vue
<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: `${color}` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.shift()
  }
</script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
```
:::

- reverse 翻转数组

:::demo
```vue
<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: `${color}` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.reverse()
  }
</script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
```
:::

- sort 数组的元素进行排序

:::demo
```vue
<template>
  <AButton @click="fn">{{flag ? '降序' : '升序'}}</AButton>
  <div class="item" v-for="{ color, value } in list" :style="{ background: `${color}` }">
    {{ value }}
  </div>
</template>
<script setup lang="ts">
  import { ref, unref } from 'vue';
  import mock from 'mockjs';

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );

  const flag = ref(true);

  const fn = () => {
    list.value.sort((a, b) => unref(flag) ? a.value - b.value : b.value - a.value);
    flag.value = !flag.value;
  }
</script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }

  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
```
:::

- splice 移除或替换已存在的指定下标元素

:::demo

```vue

<template>
  <div>
    <AButton @click='fn2'>替换1号下标元素</AButton>
    <AButton @click='fn'>移除1号下标元素</AButton>
  </div>
  <div class='item' v-for='{ color, value } in list' :style='{ background: `${color}` }'>
    {{ value }}
  </div>
</template>
<script setup lang='ts'>
  import { ref } from 'vue';
  import mock from 'mockjs';

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );

  const flag = ref(false);

  const fn = () => {
      list.value.splice(1, 1);
  }

  const fn2 = () => {
    list.value.splice(1, 1, { value: mock.Random.integer(0, 50), color: mock.mock('@color') });
  }
</script>

<style lang='less' scoped>
  .opt {
    margin-bottom: 10px;
  }

  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
```
:::

## 常用方法

## 部分常用方法底层实现

### forEach(遍历)
```js
Array.prototype.each = function(fn){
	for(let i = 0; i < this.length; i++){
		fn(this[i],i,this);
	}
}
```

### push(尾部添加一个或多个，返回数组长度)
```js
Array.prototype.push = function(){
    for(item in arguments){
        this[this.length] = item;
    }
    return this.length;
}
```

### pop(尾部删除一个元素，返回删除元素)
```js
Array.prototype.pop = function(){
  if(this.length == 0){
    return;
  }
  let value = this[this.length - 1];
  this.length -= 1;
  return value;
}
```

### unshift(头部添加)
```js
Array.prototype.unshift = function(){
	let result = [];
	for(let index in arguments){
		result[index] = arguments[index];
	}
	for(let item of this){
		result[result.length] = item;
	}
	this.length = 0;
	for(let index in result){
		this[index] = result[index];
	}
	return this.length;
}
```

### shift(头部删除)
```js
Array.prototype.shift = function(){
	let temp = [];
	for(let index in this){
		temp[index] = this[index];
	}
	this.length = 0;
	console.log(temp[0],'temp')
	for(let i = 0; i < temp.length - 1; i++){
		this[i] = temp[i + 1];
	}
	return temp[0];
}
```

### every(判断数组元素是否都满足指定的函数)
```js
Array.prototype.every = function(fn){
	for(let i = 0;i < this.length; i++){
		if(!fn(this[i],i,this)) return false;
	}
	return true;
}
```

### some(判断数组是否有元素满足指定的元素)
```js
Array.prototype.some = function(fn){
	for(let i = 0;i < this.length;i++){
		if(fn(this[i],i,this)) return true;
	} 
	return false;
}
```

### filter(过滤)
```js
Array.prototype.filter = function(fn){
	let reuslt = [];
	for(let i = 0;i < this.length;i++){
		if(fn(this[i])) reuslt.push(this[i]);
	}
	return reuslt;
}
```

### isArray(判断某对象是否是数组)
```js
Array.prototype.isArray = function(){
	return Object.prototype.toString.call(value) === '[object Array]';
}
```

### concat(数组拼接)
```js
Array.prototype.concat = function(){
	let reuslt = this;
	if(arguments.length != 0){
		for(let item of arguments){
			if(Object.prototype.toString.call(item) === '[object Array]'){
				for(let items of item){
					reuslt[reuslt.length] = items;
				}
			}else{
				reuslt[reuslt.length] = item;
			}
		}
	}
	console.log(reuslt)
	return reuslt;
}
```

### copyWithin(把数组的一部分元素拷贝到另一部分位置上)
```js
Array.prototype.copyWithin = function(targt,star = 0,end = this.length){
	for(let i = targt;i <= (end - star);i++){
		this[i] = this[star];
		star++;
	}
	return this;
}
```

### fill (固定值填充数组)
```js
Array.prototype.fill = function(value,star = 0,end = this.length){
	for(let i = star;i < (end - star); i++){
		this[i] = value;
	}
	return this;
}
```

### find(返回数组中满足提供的测试函数的第一个元素的值。否则返回undefined )
```js
Array.prototype.find = function(fn){
  for(let i = 0; i < this.length;i++){
    if(fn(this[i],i,this)) return this[i];
  }
  return;
}
```

### findIndex(返回满足第一个指定函数元素的下标)
```js
Array.prototype.find = function(fn){
	for(let i = 0; i < this.length;i++){
		if(fn(this[i],i,this)) return i;
	}
	return -1;
}
```

### includes(数组是否包含一个指定值)
```js
Array.prototype.includes = function(value, fromIndex = 0){
	for(let i = fromIndex; i < this.length; i++){
		if(this[i] === value){
			return true;
		}
	}
	return false;
}
```

### join
```js
Array.prototype.join = function(separator){
	if(!this.length){
		return ''
	}else if(this.length === 1){
		console.log(1)
		return this[0].toString();
	}else{
		let str = '';
		for (var i = 0; i < this.length; i++) {
			str += this[i] + `${i < this.length - 1 ? separator : ''}`;
		}
		return str;
	};
}
```

<git-talk />
