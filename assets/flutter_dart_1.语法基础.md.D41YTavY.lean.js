import{_ as i,V as a,as as n,U as l}from"./chunks/framework.KSLWugjt.js";const o=JSON.parse('{"title":"基本语法","description":"","frontmatter":{},"headers":[],"relativePath":"flutter/dart/1.语法基础.md","filePath":"flutter/dart/1.语法基础.md","lastUpdated":1725693536000}'),e={name:"flutter/dart/1.语法基础.md"};function t(p,s,h,r,k,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h1><h2 id="入口" tabindex="-1">入口 <a class="header-anchor" href="#入口" aria-label="Permalink to &quot;入口&quot;">​</a></h2><ul><li>main函数是dart入口</li><li>dart当中打印信息使用print函数</li></ul><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; args) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // List&lt;String&gt; args -&gt; 列表&lt;String&gt; - 泛型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结尾必须加;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 单行注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 多行注释 */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// 文档注释</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="语法基础" tabindex="-1">语法基础 <a class="header-anchor" href="#语法基础" aria-label="Permalink to &quot;语法基础&quot;">​</a></h2><ul><li>注释语法与JS 一致</li><li>声明函数不需要关键字 (js中通过function关键字来声明函数)</li><li>函数和参数前面都有类型声明,void表示没有返回值,int是整型数字</li><li>打印使用print(JS使用console.log())</li><li>每行代码结束时,必须写结束分号</li><li>字符串通过引号包起来,支持模板字符串</li><li>main是入口函数,Dart应用程序总是从main函数开始执行</li><li>用var声明的变量,其数据类型是动态的</li></ul><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><h3 id="明确的声明" tabindex="-1">明确的声明 <a class="header-anchor" href="#明确的声明" aria-label="Permalink to &quot;明确的声明&quot;">​</a></h3><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; args) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;渣渣辉&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="类型推导-var-final-const" tabindex="-1">类型推导(var final const) <a class="header-anchor" href="#类型推导-var-final-const" aria-label="Permalink to &quot;类型推导(var final const)&quot;">​</a></h3><blockquote><p>类型推导的方式虽然没有明确的指定变量的类型, 但是变量是有自己的明确的类型</p></blockquote><ul><li>var声明变量</li></ul><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; args) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // age = &quot;abc&quot;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  dunamic </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>final声明常量</li></ul><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.88</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// height = 2.00; 编译不通过</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>const声明常量</li></ul><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> address </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;广州市&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// address = &quot;北京市&quot;; 编译不通过</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>final和const的区别</li></ul><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// const必须赋值 常量值(编译期间需要有一个确定的值)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// final可以通过计算/函数获取一个值(运行期间来确定一个值)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// const date1 = DateTime.now(); 编译不通过</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> date2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DateTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>final用的更多一点。dart声明变量大小写敏感(例如: age与Age是两个不同的变量)。 dart变量默认值是null;dart变量值不会隐式转换;(强类型语言)</p></div><h3 id="dart-数据类型" tabindex="-1">dart 数据类型 <a class="header-anchor" href="#dart-数据类型" aria-label="Permalink to &quot;dart 数据类型&quot;">​</a></h3><ul><li>Number</li><li>String</li><li>Boolean</li><li>List</li><li>Set</li><li>Map</li></ul>`,24)]))}const g=i(e,[["render",t]]);export{o as __pageData,g as default};
