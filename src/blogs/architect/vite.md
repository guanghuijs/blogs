# 🛠️[vite](https://cn.vitejs.dev/)

## 什么是构建工具
我们写的代码一变化 ---> 有人帮我们自动去tsc, react-compiler, less, babel, uglifyjs全部挨个走一遍 ---> js
这个东西就叫做**构建工具**
>  打包: 将我们写的浏览器不认识的代码 交给构建工具进行编译处理的过程就叫做打包, 打包完成以后会给我们一个浏览器可以认识的文件 

一个构建工具做了什么事:
1. 模块化开发支持: 支持直接从node_modules里引入代码 + 多种模块化支持
2. 处理代码兼容性: 比如babel语法降级, less,ts 语法转换(**不是构建工具做的, 构建工具将这些语法对应的处理工具集成进来自动化处理**)
3. 提高项目性能: 压缩文件, **代码分割**
4. 优化开发体验:
   - 构建工具会帮你自动监听文件的变化, 当文件变化以后自动帮你调用对应的集成工具进行重新打包, 然后再浏览器重新运行（整个过程叫做热更新, hot replacement
   - 开发服务器: 跨域的问题, 用react-cli create-react-element vue-cli 解决跨域的问题,

## webpack的一个缺点(了解)
项目模块过多启动缓慢
- webpack的编译原理, AST 抽象语法分析的工具 分析出你写的这个js文件有哪些导入和导出操作 构建工具是运行在服务端的
- 因为webpack支持多种模块化, 他一开始必须要统一模块化代码, 所以意味着他需要将所有的依赖全部读一遍
- vite会不会直接把webpack干翻, vite是基于es modules的, 侧重点不一样, webpack更多的关注兼容性, 而vite关注浏览器端的开发体验
- vite的上手难度更低, webpack的配置是非常多的, loader, plugin

## es module的规范

## vite的基本安装和使用
vite官网搭建工程指南: https://vitejs.dev/guide/#scaffolding-your-first-vite-project
- 使用自选配置去构建vite项目:
```bash
pnpm create vite
 ```
- 构建一些具备框架功能的预设模板(不需要你自选配置)
```bash
pnpm create vite my-react-ts-app --template react-ts # 还有更多配置可以参阅官网
 ```

## [vite的配置文件](https://cn.vitejs.dev/config/)
::: details 查看代码
```ts
export default {
  root: process.cwd(), // 项目根目录（index.html 文件所在的位置）,
  base: '/', // 开发或生产环境服务的公共基础路径 配置引入相对路径
  mode: 'development', // 模式
  plugins: [vue()], // 需要用到的插件数组
  publicDir: 'public', // 静态资源服务的文件夹
  cacheDir: 'node_modules/.vite', // 存储缓存文件的目录
  resolve: {
    alias: [ // 文件系统路径别名
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      }
    ],
    dedupe: [], // 强制 Vite 始终将列出的依赖项解析为同一副本
    conditions: [], // 解决程序包中 情景导出 时的其他允许条件
    mainFields: [], // 解析包入口点尝试的字段列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 导入时想要忽略的扩展名列表
    preserveSymlinks: false, // 启用此选项会使 Vite 通过原始文件路径确定文件身份
  },
  css: {
    modules: {
      scopeBehaviour: 'global' | 'local',
      // ...
    },
    postcss: '', // 内联的 PostCSS 配置 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源
    preprocessorOptions: { // css的预处理器选项
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },
  json: {
    namedExports: true, // 是否支持从.json文件中进行按名导入
    stringify: false, //  开启此项，导入的 JSON 会被转换为 export default JSON.parse("...") 会禁用按名导入
  },
  esbuild: { // 最常见的用例是自定义 JSX
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  assetsInclude: ['**/*.gltf'], // 指定额外的 picomatch 模式 作为静态资源处理
  logLevel: 'info', // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
  clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  envDir: '/', // 用于加载 .env 文件的目录
  envPrefix: [], // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中
  server: {
    host: '127.0.0.1', // 指定服务器应该监听哪个 IP 地址
    port: 5000, // 指定开发服务器端口
    strictPort: true, // 若端口已被占用则会直接退出
    https: false, // 启用 TLS + HTTP/2
    open: true, // 启动时自动在浏览器中打开应用程序
    proxy: { // 配置自定义代理规则
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: true, // 配置 CORS
    force: true, // 强制使依赖预构建
    hmr: { // 禁用或配置 HMR 连接
      // ...
    },
    watch: { // 传递给 chokidar 的文件系统监听器选项
      // ...
    },
    middlewareMode: '', // 以中间件模式创建 Vite 服务器
    fs: {
      strict: true, // 限制为工作区 root 路径以外的文件的访问
      allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
      deny: ['.env', '.env.*', '*.{pem,crt}'], // 用于限制 Vite 开发服务器提供敏感文件的黑名单
    },
    origin: 'http://127.0.0.1:8080/', // 用于定义开发调试阶段生成资产的 origin
  },
  build: {
    target: ['modules'], // 设置最终构建的浏览器兼容目标
    polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
    outDir: 'dist', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态文件目录
    assetsInlineLimit: '4096', // 小于此阈值的导入或引用资源将内联为 base64 编码
    cssCodeSplit: true, // 启用 CSS 代码拆分
    cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions: {}, // 自定义底层的 Rollup 打包配置
    lib: {}, // 构建为库
    manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
    ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
    ssr: undefined, // 生成面向 SSR 的构建
    minify: 'esbuild', // 指定使用哪种混淆器
    terserOptions: {}, // 传递给 Terser 的更多 minify 选项
    write: true, // 启用将构建后的文件写入磁盘
    emptyOutDir: true, // 构建时清空该目录
    brotliSize: true, // 启用 brotli 压缩大小报告
    chunkSizeWarningLimit: 500, // chunk 大小警告的限制
    watch: null, // 设置为 {} 则会启用 rollup 的监听器
  },
  preview: {
    port: 5000, // 指定开发服务器端口
    strictPort: true, // 若端口已被占用则会直接退出
    https: false, // 启用 TLS + HTTP/2
    open: true, // 启动时自动在浏览器中打开应用程序
    proxy: { // 配置自定义代理规则
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: true, // 配置 CORS
  },
  optimizeDeps: {
    entries: [], // 指定自定义条目——该值需要遵循 fast-glob 模式
    exclude: [], // 在预构建中强制排除的依赖项
    include: [], // 可强制预构建链接的包
    keepNames: false, // true 可以在函数和类上保留 name 属性
  },
  ssr: {
    external: [], // 列出的是要为 SSR 强制外部化的依赖,
    noExternal: '', // 列出的是防止被 SSR 外部化依赖项
    target: 'node', // SSR 服务器的构建目标
  }
}
```
:::

## 环境变量

### 什么环境变量
会根据当前代码环境产生值的变化的变量就叫做环境变量

### 代码环境可能包括
1. 开发环境
2. 生产环境
3. 测试环境
4. 预发布环境
5. 灰度环境

### 环境变量文件
- .env 公用环境变量
    一般配置一些所有环境共用的变量,如项目名称,端口号,版权信息之类的之类的,百度地图sdk, 小程序的sdk根据需求也可以放到环境变量中
```bash
# 端口号
VITE_PORT = 3100
# 系统名称
VITE_GLOB_APP_NAME = 图书管理系统
# 版权信息
VITE_GLOB_DESKTOP_FOOT = Copyright © 2022 xxx | xxx
```
- .env.development 开发环境环境变量
    根据开发需求,配置http请求的基础路径(域名、端口号)
```bash
# public path
VITE_PUBLIC_PATH = /

# API_BASE_URL
VITE_PROXY = [["/basic-api","http://localhost:8080/dev"],["/upload","http://localhost:8080/upload"]]
````
- .env.production 生产环境变量
```bash
# public path
VITE_PUBLIC_PATH = /
# Delete console
VITE_DROP_CONSOLE = true
```
### vite是如何读取环境变量的
vite内置了dotenv这个第三方库,dotenv会自动读取.env文件,并解析这个文件中的对应环境变量,并将其注入到process对象下(但是vite考虑到和其他配置的一些冲突问题,他不会直接注入到process对象下)

### 客户端读取环境变量
客户端, vite会将对应的环境变量注入到import.meta.env里去
vite做了一个拦截, 他为了防止我们将隐私性的变量直接送进import.meta.env中, 所以他做了一层拦截, 如果你的环境变量不是以VITE开头的, 他就不会帮你注入到客户端中去, 如果我们想要更改这个前缀, 可以去使用envPrefix配置
补充一个小知识: 为什么vite.config.js可以书写成esmodule的形式, 这是因为vite他在读取这个vite.config.js的时候会率先node去解析文件语法, 如果发现你是esmodule规范会直接将你的esmodule规范进行替换变成commonjs规范
```ts
// 客服端读取环境变量
import.meta.env

// 配置环境变量前缀
export default defineConfig({
  // ...
  envPrefix: ["TEST", "VITE_"],
  // ...
})
```

::: details
```ts
import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "node:url";
import type { UserConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const envResolver = {
  build: (): UserConfig => {
    console.log("生产环境");
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
    };
  },
  serve: (): UserConfig => {
    console.log("开发环境");
    const { VITE_PROXY } = loadEnv("development", "./env", "");
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      envDir: "./env",
      envPrefix: ["TEST", "VITE_"],
      server: {
        proxy: {
          "/api": {
            target: JSON.parse(VITE_PROXY)[1],
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
    };
  },
};

export default defineConfig(({ command, mode }) => {
  console.log(
    "\x1b[31m%s\x1b[0m",
    "\n当前处于开发测试阶段，还会有大量更新，仅供参考，请勿用于实际项目！\n"
  );
  // 配置文件路径
  const envDir = resolve(process.cwd(), "env"); //绝对路径
  // ./env 相对路径
  // process.cwd()项目根路径 D:\work\ghstudy
  console.log(mode);
  const env = loadEnv(mode, envDir, "");
  console.log(env);
  return envResolver[command]();
});

// 文件名不能写错
// .env.development
// .env.production
```
:::

## vite的插件
```ts
export default {
  // ...
  plugins: [vue()],
  // ...
}
```

### 路径别名
```ts
import { fileURLToPath, URL } from "node:url";

export default {
  // ...
  resolve: { //这里也不算是插件,是vite的一个配置项
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // ...
}
```

### 自动识别.vue文件生成路由

```ts
// vite.config.ts
// pnpm i vite-plugin-pages
import Pages from 'vite-plugin-pages';

export default {
  // ...
  plugins: [Pages({
    dirs: './src/views', //指定生成路由的目录
    extensions: ['vue'], //文件后缀
    exclude: ['**/src/*.vue'], //可以排除指定目录
    })
  ],
  // ...
}
```

```ts
// router.ts
// @ts-ignore
import routes from "~pages";
console.log(routes);
```

## 跨域处理

- 开发时态:我们一般就利用构建工具或者脚手架或者第三方库的proxy 代理配置，或者我们自己搭一个开发服务器来解决这个问题
```ts
export default {
  // ...
  server: {
    proxy: {
      //配置http代理,可多个
      [JSON.parse(VITE_PROXY)[0]]: {
        target: JSON.parse(VITE_PROXY)[1],
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(new RegExp(`^${JSON.parse(VITE_PROXY)[0]}`), ""),
      },
      "/api": { //把以/api开头的api拼接target属性
        target: JSON.parse(VITE_PROXY)[1],
        changeOrigin: true, //开启同源策略
        rewrite: (path) => path.replace(new RegExp(`^/api`), ""),
      },
    },
  },
  // ...
}
```
- 生产时态我们一般是交给后端去处理跨域的:
  - ngnix:代理服务
  - 配置身份标记

## vite中处理css, 静态资源怎么去做

## vite与ts的结合

## vite打包
```ts
const build = {
  target: ['modules'], // 设置最终构建的浏览器兼容目标
    polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
    outDir: 'dist', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态文件目录
    assetsInlineLimit: '4096', // 小于此阈值的导入或引用资源将内联为 base64 编码
    cssCodeSplit: true, // 启用 CSS 代码拆分
    cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions: {}, // 自定义底层的 Rollup 打包配置
    lib: {}, // 构建为库
    manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
    ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
    ssr: undefined, // 生成面向 SSR 的构建
    minify: 'esbuild', // 指定使用哪种混淆器
    terserOptions: {}, // 传递给 Terser 的更多 minify 选项
    write: true, // 启用将构建后的文件写入磁盘
    emptyOutDir: true, // 构建时清空该目录
    brotliSize: true, // 启用 brotli 压缩大小报告
    chunkSizeWarningLimit: 500, // chunk 大小警告的限制
    watch: null, // 设置为 {} 则会启用 rollup 的监听器
}
```
