# 常用命令

## cmd

- 启动cmd
  - 用户启动，`win + r` 输入cmd，`enter`
  - 管理员启动，`win + r` 输入cmd，`ctrl+shift+enter`

- 切换盘符
```bash
c:
d:
```
- 进入子目录
```bash
cd work
```
- 回到所在磁盘根目录
```bash
cd /
```
- 返回上一级
```bash
cd ..
````
- 打开文件/文件夹
```bash
start test/test.txt
```
- 新建文件/文件夹
```bash
dir test/echo 这个内容 > test.txt[echo null > test.txt]
```
- 删除文件/文件夹
```bash
del fileName.text
del *.text // 删除指定类似文件
re foldername
```
- 查看隐藏文件夹
```bash
dir /?
```
- 复制文件
```bash
copy 路径\文件名 路径\文件名
```
- 移动文件
```bash
move 路径\文件名 路径\文件名
```

## nvm

:::tip 🍍 写在最前
在前端开发中,使用npm下载依赖时,node版本过低。
此时,下载依赖包会出现下载失败的情况;
可以使用nvm版本管理工具，在电脑上同时下载多个node.js版本,以满足开发需要。
:::

- [下载](https://github.com/coreybutler/nvm-windows/releases).exe文件
```bash
# 查看本地安装的所有nodejs版本
nvm list 
# 安装指定版本
nvm install 8.17.0  
# 切换到指定版本
nvm use 8.17.0 
# 卸载指定版本
nvm uninstall 8.17.0 
# 显示当前版本
nvm current
```

## git

### ssh
- 设置用户信息
```bash
git config --global user.name 'username'
git config --global user.email 'email'
```
- 生成key
```bash
ssh-keygen -t rsa -b 4096 -C "email"
```
- 设置key快捷链接
  * [GitHub](https://github.com/settings/keys)
  * [Gitee](https://gitee.com/profile/sshkeys) 

### 常用指令
  - git init 初始化一个本地仓库，但是此时没有远程仓库与之关联
  - git status 查看当前文件状态
  - git add . 把工作区的代码扔到暂存区，此是还没有形成版本
  - git commit -m "xx" 把暂存区的代码扔到版本库中，形成版本
  - git log / git reflog 查看当前版本库中都有哪些版本
  - git reset --hard 版本号 版本之间进行切换
  - git checkout branchName 切换分支

- 检测 ssh连接
  ```bash
  ssh -T git@github.com
  ```

- ssh配置文件(config)
  ```bash
  Host github.com
  User xxxxqq.com
  Hostname ssh.github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa
  Port 443
  ```

### 跳过eslint校验提交
```bash
git commit -m "feat(m): n" --no-verify
```



### git撤销未push的commit
```bash
#退回上个版本
git reset --soft HEAD^
#退回上上版本
git reset --soft HEAD^^
```

### git reset
- mixed为默认的，可以不用带该参数
  - 用于重置暂存区的文件，此时历史记录与上一次的提交(commit)保持一致，工作区文件内容保持不变（有上次修改的内容）。移动 HEAD 指针，改变暂存区内容，但不会改变工作区
  - 原有文件内容的变更 ：修改内容还在，变成未add的状态
  - 目录结构的变更（增加或者删除文件）：
    - 新增文件： 还存在，变成未add的状态(目录结构中文件变成红色，需要执行命令git add . 再执行git commit )
    - 删除文件：目录结构中还是没有，可以直接执行git commit
- soft用于回退到某个版本
  - 仅仅移动当前 Head 指针，不会改变工作区和暂存区的内容
  - 原有文件内容的变更 ：修改内容还在，变成已add的状态（未commit）
  - 目录结构的变更（增加或者删除文件）：
    - 新增文件：还存在，变成已add的状态(目录结构中文件变成绿色，可以再次执行git commit )；
    - 删除文件：目录结构中还是没有，可以直接执行git commit
- hard 参数撤销工作区中所有未提交的修改内容
  - 将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交，当前 HEAD 指针、工作区和暂存区内容全部改变
  - 原有文件内容的变更 ：修改内容丢失（修改的代码不会变成未add的状态）
  - 目录结构的变更（增加或者删除文件）：新增文件丢失、删除的文件相当于没删

### git log

```bash
## 🏡 让我们查看提交commit history,接下来我们来一起探索git log提供的参数
git log
# ----
commit 2d16e1bfde05123354107c2a00c66da450763ff4 (HEAD -> develop, origin/develop)
Author: wuguanghui <2669670087>                                                  
Date:   Tue Jul 11 11:02:25 2023 +0800                                           
                                                                                 
    摸鱼                                                                         
                                                                                 
commit 5d04f93ed9b2e750520f2916e2d58cb3e2912fa8                                  
Author: wgh <995980020@qq.com>                                                   
Date:   Mon Jul 10 23:58:44 2023 +0800                                           
                                                                                 
    网格布局                                                                     
                                                                                 
    Signed-off-by: wgh <995980020@qq.com>                                        
                                                                                 
commit 8f298200440be2d2957963937d29e7514f4a7965                                  
Author: wgh <995980020@qq.com>                                                   
Date:   Wed Jul 5 23:55:00 2023 +0800                                            
                                                                                 
    date                                                                         
                                                                                 
    Signed-off-by: wgh <995980020@qq.com> 

## 🏡 这个命令简化git log的默认的输出,仅仅输出commit hash 前7个字符串和commit message。
git log --oneline
# output
2d16e1b (HEAD -> develop, origin/develop) 摸鱼
5d04f93 网格布局
8f29820 date
b1e6438 axios
7e653b4 axios
0d60d97 网格布局
e46380f 网格布局
8b42b06 弹性布局

# 🏡 git log 的基础上输出文件增删改的统计数据。
git log --stat

# 🏡 控制输出每个commit具体修改的内容，输出的形式以diff的形式给出。
git log -p

# 🏡 git show命令同git log -p输出类似，只不过它只显示一个commit的内容，如果不指定commit hash, 它默认输出HEAD指向commit的内容.
git show

# 🏡 这个命令用来输出汇总信息，以作者进行分类。
git git shortlog
# output
YGHHJs (1):
  Initial commit

gh (5):
  doc init
  doc config尝试
  代码格式化blog
  代码格式化blog
  代码格式化blog

wgh (110):
  代码格式化blog
  代码格式化blog
  ...

# 🏡 -s提交数量 -n提交用户名
git shortlog -s -n
# output
110  wgh
 38  wuguanghui
  5  gh
  1  YGHHJs
# 🏡 来过滤commit,限定输出给定的用户
# git log --author
git log --author='YGHHJs' --oneline
f906622 Initial commit
# 🏡 指定输出几条commit记录
# git log -n
git log -1
# output
commit 2d16e1bfde05123354107c2a00c66da450763ff4 (HEAD -> develop, origin/develop)
Author: wuguanghui <2669670087>
Date:   Tue Jul 11 11:02:25 2023 +0800

    摸鱼
    
# 🏡 指定时间范围
git log --after/--before

# 🏡 控制是否显示merge的commit
git log --merges/--no-merges
```

### git stash
:::tip 📢 提示
把未commit的修改暂存到本地,使工作模板变为干净状态
:::
```bash
# 保存当前未commit的代码
git stash

# 保存当前未commit的代码并添加备注
git stash save "备注的内容"

# 列出stash的所有记录
git stash list

# 删除stash的所有记录
git stash clear

# 应用最近一次的stash
git stash apply

# 应用最近一次的stash，随后删除该记录
git stash pop

# 删除最近的一次stash
git stash drop

# 查看stash列表
git stash list
# stash@{0}: On develop-wgh: <E9><A6><96><E9><A1><B5><E4><BF><AE><E6><94><B9>(9.21)
# stash@{1}: On develop-wgh: <E8><BD><AE><E6><92><AD><E5>BE><E6><9F><A5><E7><9C><8B><E8><AF><A6><E6><83><85>

# 应用指定stash
# 表示应用第二个stash
git stash apply 1
```

### 选错分支
:::danger 🍉 说明
代码修改完了才发现选择错了分支（代码还未提交）
:::
```bash
#先暂存到stash去
git stash
#切换目标分支
git checkout tranchName
#从stash区取出
git stash pop
```

## pnpm常用指令
* pnpm安装指令版本
```bash
npm i -g pnpm@version
```
* pnpm安装最新版本
```bash
npm i -g pnpm
npm i -g pnpm@latest
```
* pnpm查看镜像状态
```bash
pnpm config get registry
```
* pnpm设置淘宝镜像
```bash
pnpm config set registry https://registry.npm.taobao.org/
```
* 查看pnpm版本
```bash
pnpm -v
pnpm --version
```
* pnpm查看现有依赖是否出错
```bash
pnpm ls
```
* pnpm 删除指定依赖包
```bash
pnpm un/rm/remove/uninstall packageName
```


## npm 发布包
```bash
npm adduser
npm login
npm config set proxy false
npm publish
```