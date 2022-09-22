---
title: "WebAssembly, Web 的新时代"
date: "2017-01-20"
updated: "2022-03-02"
categories: 
  - "WebAssembly"
  - "Wasm"
  - "PWA"
  - "SIMD"
coverImage: "/images/blog/20220302/1.png"
coverWidth: 16
coverHeight: 9
excerpt: "在浏览器之争中，Chrome 凭借 JavaScript 的卓越性能取得了市场主导地位，然而由于 JavaScript 的无类型特性，导致其运行时消耗大量的性能做为代价，这也是 JavaScript 的瓶颈之一。WebAssembly 旨在解决这一问题。本文从 WebAssembly 的起源到开发实践对其做全面探究，帮助开发者对 WebAssembly 有全面的了解。"
author: "张敏 (Belem Zhang)"
authorTitle: "软件技术经理"
authorCompany: "英特尔 SATG Web 平台工程"
authorImg: "/images/people/120/belem.png"
author2: "包婧"
authorTitle2: "资深软件工程师"
authorCompany2: "英特尔 SATG Web 平台工程"
authorImg2: "/images/people/120/wpe.png"
author3: "王红娟"
authorTitle3: "软件工程师"
authorCompany3: "英特尔 SATG Web 平台工程"
authorImg3: "/images/people/120/hongjuan.png"
---

<strong>原文刊载于 CSDN《程序员》杂志，2022 年初鲍静及王红娟两位同事基于 WebAssmebly 的最新进展作了更新。</strong>

在浏览器之争中，Chrome 凭借 JavaScript 的卓越性能取得了市场主导地位，然而由于 JavaScript 的无类型特性，导致其运行时消耗大量的性能做为代价，这也是 JavaScript 的瓶颈之一。WebAssembly 旨在解决这一问题。本文从 WebAssembly 的起源到开发实践对其做全面探究，帮助开发者对 WebAssembly 有全面的了解。

## 缘起

让我们从浏览器大战说起。Microsoft 凭借 Windows 捆绑 Internet Explorer 的先天优势击溃 Netscape 后，进入了长达数年的静默期。而 Netscape 则于 1998 年将 Communicator 开源，并由 Mozilla 基金会衍生出 Firefox 浏览器，在 2004 年发布了 Firefox 1.0 版本。从此，第二次浏览器大战拉开帷幕，由 Firefox 领衔，Safari，Opera 等也积极进取，Internet Explorer 的主导地位首次受到挑战。2008 年 Google 推出 Chrome 浏览器，不但逐步侵蚀 Firefox 的市场，更是压制了老迈的 Internet Explorer。在此次大战之后的 2012 年，StatCounter 的数据指出 Chrome 以微弱优势超越 Internet Explorer 成为世界上最流行的浏览器。 

分析 Google Chrome 浏览器战胜 Internet Explorer 的原因，除了对 Web 标准更友善的支持外，卓越的性能是其中相当重要的因素，而浏览器性能之争的本质则体现在 JavaScript 引擎。此前，JavaScript 引擎的实现方式经历了遍历语法树到字节码解释器等较为原始的方式，将每条源代码翻译成相应的机器码并执行，并不保存翻译后的机器码，使得解释执行很慢。2008 年 9 月，Google 发布了 V8 JavaScript 引擎。V8 被设计用于提高 Web 浏览器中 JavaScript 的执行性能，通过及时编译 JIT（Just-In-Time）技术，在执行时将 JavaScript 代码编译成更为高效的机器代码并保存，下次执行同一代码段时无需再编译，使得 JavaScript 获得了几十倍的性能提升。 

然而，JavaScript 是个无类型（untyped，变量没有类型）的语言，这直接导致表达式 c = a + b 有多重含义： 

- a，b 均为数字，则算术运算符+表示值相加
- a，b 为字符串，则+运算符表示字符串连接
- …

表达式执行时 JIT 编译器需要检查 a 和 b 的类型，确定操作行为。若 a，b 均为数字， JIT 编译器则将 a，b 确认为整型，而一旦某一变量变成字符串，JIT 编译器则不得不将之前编译的机器码推倒重来。由此可见，JavaScript 的无类型特性建立在消耗大量性能代价的基础之上。即便 JIT 编译器在对变量类型发生变化时已进行相应优化，但仍然有很多情况 JavaScript 引擎未进行或者无法优化，例如 for-of，try-catch，try-finally，with 语句以及复合 let，const 赋值的函数等。

由此可见，JavaScript 的无类型是 JavaScript 引擎的性能瓶颈之一，改进方案有两种：一是设计一门新的强类型语言并强制开发者进行类型指定，二是给现有的 JavaScript 加上变量类型。

微软开发的 TypeScript 属于第一种改进方案。它是扩展了 JavaScript 特性的语言，包含了类型批注，编译时类型检查，类型推断和擦除等功能，TypeScript 开发者在声明变量时指定类型，使得 JavaScript 引擎能够更快的将这种强类型的语言编译成弱类型。

看看第二种方案：

```javascript
function add(a, b) {
  a = a | 0;
  b = b | 0;
  return (a + b) | 0;
}
```

这是带有两个参数（a 和 b）的 JavaScript 函数，和通常 JavaScript 代码不同的地方在于 a = a | 0 及b = b | 0 以及返回值后面均利用标注进行了按位 OR 操作。这么做的优点是使 JavaScript 引擎强制转换变量的值为整型执行。通过标注加上变量类型，JavaScript 引擎就能更快的编译。

既然增加变量类型能够提升 Web 性能，有没有办法将静态类型代码例如 C/C++ 等转换成 JavaScript 指令的子集呢？上面的这段代码恰恰是作为 JavaScript 子集的 asm.js，由下面的 C 编译而来：

```javascript
int add(int a, int b) {
  return a + b;
}
```

事实上，早在 1995 年起就已经有 Netscape Plugin API（NPAPI）在内的可以使用浏览器运行 C/C++ 程序的项目在开发。而 2013 年问世的 asm.js 是目前较为广泛的方案。asm.js是一种中间编程语言，允许用 C/C++ 语言编写的计算机软件作为 Web 应用程序运行，并保持更好的性能，而 Mozilla Firefox 从版本 22 起成为第一个为 asm.js 特别优化的网页浏览器。

Google 也同样在为原生代码运行在 Web 端而努力。Google Native Client（NaCl）采用沙盒技术，让 Intel x86、ARM 或 MIPS 子集的机器码直接在沙盒上运行。它能够在无需安装插件的情况下从浏览器直接运行原生可执行代码，使 Web 应用程序可以用接近于机器码运作的速度来运行。而 Google Portable Native Client（PNaCl）则稍有变化，通过一些前端编译器将 C/C++ 源代码编译成 LLVM 的中间字节码而不是 x86 或 ARM 代码，并且进行优化以及链接。

<table><tr><th>方案</th><th>年代</th><th>发起人</th><th>标准</th><th>目标大小</th><th>安全性</th><th>可移植性</th><th>载入时间</th><th>跨浏览器</th><th>性能</th><th>共享内存</th></tr><tr><td>JavaScript</td><td>1995</td><td>Netscape</td><td>ECMA</td><td>-</td><td>是</td><td>是</td><td>快</td><td>是</td><td>慢</td><td>否</td></tr><tr><td>ActiveX</td><td>1996</td><td>Microsoft</td><td>否</td><td>-</td><td>否</td><td>否</td><td>慢</td><td>否</td><td>慢</td><td>是</td></tr><tr><td>asm.js</td><td>2013</td><td>Mozilla</td><td>否</td><td>大</td><td>是</td><td>是</td><td>慢</td><td>一般</td><td>快</td><td>否</td></tr><tr><td>NaCl</td><td>2008</td><td>Google</td><td>否</td><td>小</td><td>是</td><td>一般</td><td>快</td><td>否</td><td>快</td><td>是</td></tr><tr><td>PNaCl</td><td>2013</td><td>Google</td><td>否</td><td>小</td><td>是</td><td>是</td><td>快</td><td>否</td><td>快</td><td>是</td></tr></table>

表 1：JavaScript 及原生代码支持对比

有了类型支持，第二种方案性能提升潜力远远大于第一种。

然而，无论是 asm.js 或现有 PNaCl 的解决方案，都面临着一些缺陷（例如 1KB 的 C 源码编译生成 asm.js 后的大小有 480KB）或者其他浏览器不支持的窘境，而 2016 年 10 月对 Chromium 问题跟踪代码的评论更是表明，Google Native Client 小组已被关闭。

作为 Web 浏览器性能和代码重用的解决方案，asm.js 及 PNaCl 都没能被普遍接受，那么有没有上述表格中的特性全部占优，且跨厂商的解决方案呢

## 新时代

WebAssembly 旨在解决这个问题。

WebAssembly（简称 Wasm）是一种适合于编译到Web的，新的可移植的，大小和加载时间高效的格式。这是一个新的平台无关的二进制代码格式，目标是解决 JavaScript 性能的问题。这个新的二进制格式远小于 JavaScript，可由浏览器的 JavaScript 引擎直接加载和执行，这样可节省从 JavaScript 到字节码，从字节码到执行前的机器码所花费的及时编译 JIT（Just-In-Time）时间。 作为一种低级语言，它定义了一个抽象语法树（Abstract Syntax Tree，AST），开发人员可以以文本格式进行调试。

WebAssembly 描述了一个内存安全的沙箱执行环境，可以在现有的 JavaScript 虚拟机中实现。 当嵌入到 Web 中时，WebAssembly 将强制执行浏览器的同源和权限安全策略。因此，和经常出现安全 漏洞的 Flash 插件相比，WebAssembly 是一个更加安全的解决方案。

WebAssembly 可由 C/C++ 等语言编译而来。此外，WebAssembly 由 Google，Mozilla，Microsoft 以及 Apple 牵头的 W3C 社区组共同努力，基本覆盖主流的浏览器厂商，因此其可移植性相较 Silverlight 等有极大提升，平台兼容问题将不复出现。

在 Web 平台的很多项目中，对于原生新功能的支持需要 Web 浏览器或者 Runtime 提供复杂的标准化的 API 来实现，但是 JavaScript API 往往较慢。使用 WebAssembly，这些标准API 可以更简单，并且操作在更低的水平。例如，对于一个面部识别的 Web 项目，对于访问数据流我们可以由简单的 JavaScript API 实现，而把面部识别原生 SDK 做的事情交由 WebAssembly 实现。

需要了解的是，WebAssembly 不是将 C/C++ 等其他语言编译到 JavaScript，更不是一种新的编程语言。

## 探究

### wast 文本文件

上文的C语言求和代码经由编译器生成 add.wasm, 将add.wasm 代码转换为WebAssembly的文本格式 add.wast（转换工具见本文工具链章节）： 

```javascript
(module
  (type (;0;) (func (result i32)))
  (type (;1;) (func))
  (type (;2;) (func (param i32 i32) (result i32)))
  (type ...)
  (func (;0;) (type 1) nop)
   (func (;1;) (type 2) (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add)
  (func ...)
  (table (;0;) 2 2 funcref)
  (memory (;0;) 256 256)
   (global (;0;) (mut i32) (i32.const 5243920))
  (export "memory" (memory 0))
  (export "add" (func 1))
  (export ...)
  (elem (;0;) (i32.const 1) func 0)
)
```

WebAssembly 中代码的可装载和可执行单元被称为一个模块（module）。在运行时，一个模块可以被一组 import 值实例化，多个模块实例能够访问相同的共享状态。目前文本格式中的 module 主要用 S 表达式来表示。

Module 主体解读：

1. type：声明函数类型
2. func：声明函数
3. table：用于存储对象引用，可以实现函数指针的功能
4. memory：声明内存
5. global：声明全局变量
6. import/export：声明导入/导出函数和变量等
7. elem：用于初始化 table

一个单一的逻辑函数定义包含两个部分：功能部分声明在模块中每个内部函数定义的签名，代码段部分包含由功能部分声明的每个函数的函数体。WebAssembly 是带有返回值的静态类型，并且所有参数都含有类型。上面的 add.wast 中func (;1;) 可以解读为：

1. 声明了一个索引为 1 的函数（export 为 add）
2. 包含两个参数，都是 32 位整型
3. 结果是一个 32 位整型
4. 函数体是一个 32 位的加法: 上面是得到第一个局部变量的值, 下面是得到第二个局部变量的值

### 二进制 Wasm 文件

![Wasm 文件源码](/images/blog/20220302/1.png)

图1： wasm 文件源码

由 C 语言求和代码经过编译生成二进制文件，通读文件可以找到相应的头部，类型，导入、函数以及代码段等等。通过 JavaScript API 载入 Wasm 二进制文件后，最终转换到机器码执行。

## 工具链

开发人员现在可以使用相应的工具链从 C/C++ 源文件编译 WebAssembly 模块。WebAssembly 由许多工具支持，以帮助开发人员构建和处理源文件和生成的二进制内容。

### Emscripten

Emscripten 是其中无法回避的工具之一。

![Emscripten 工具链流程图](/images/blog/20220302/2.png)

图2：Emscripten 工具链流程图

Emscripten SD K管理器（emsdk）用于管理多个 SDK 和工具，并且指定当前正被使用到编译代码的特定 SDK 和工具集。

Emscripten 的主要工具是 Emscripten 编译器前端（emcc），它是例如 gcc 的标准编译器的简易替代实现。

Emcc 使用 Clang 和 LLVM 将 C/C++ 编译成 WebAssembly 二进制格式，并生成 JavaScript 文件为编译后的 WebAssembly 提供 API 支持，输出的 JavaScript 可以由 Node.js 执行，或者嵌入 HTML 在浏览器中运行。这带来的直接结果就是，C 和 C++ 程序经过编译后可在 Javascript 上运行，无需任何插件。

### WABT 及 Binaryen

除此之外，对于想要使用由其他工具（如 Emscripten）生成的 WebAssembly 二进制文件感兴趣的开发者，目前官方额外提供了另外两组不同的工具： 

- WABT - WebAssembly 二进制工具包
- Binaryen - 编译器和工具链

WABT 工具包支持将二进制 WebAssembly 格式转换为可读的文本格式。其中 wasm2wat 命令行工具可以将 WebAssembly 二进制文件转换为可读的文本文件。而 wat2wasm 命令行工具则执行完全相反的过程。

Binaryen 则是一套更为全面的工具链，是用 C++ 编写的用于 WebAssembly 的编译器和工具链基础结构库。它具有 C API 和一套自己的逻辑程序的中间表示 (IR)，可以极其轻松快速地编译为 WebAssembly，因为它本质上是 WebAssembly 的一个子集，并可以在 IR 上执行一些优化，支持代码合并等。它旨在使编译 WebAssembly 容易，快速，有效。

通过 Binaryen，可以进行编译、优化，它提供了一系列工具，可以解释 WebAssembly 代码，汇编和反汇编。比如可以使用 wasm-opt 编译器优化 WebAssembly 文件更小更快，也可以使用编译器 wasm2js 将 WebAssembly 文件编译成 JavaScript 文件等等。

由此可见，Emscripten 提供了完整的 C/C++ 到 WebAssembly 的解决方案。而 WABT 和 Binaryen 则帮助提升了 WebAssembly 的工具链生态。

由于 WebAssembly 正处于活跃开发阶段，各项编译步骤和编译工具会有大幅变更和改进，相信最终的编译工具和步骤会趋于便捷，需要留意官方网站的最新动态。

## 实战

Linux 平台编译原生代码到 WebAssembly 可由如下步骤实现：

### 编译环境准备

操作系统必须有可以工作的编译器工具链，因此需要安装 gcc、cmake 环境，此外 Python 也是需要的（本文使用了 Ubuntu 20.04, 自带 Python 3.8）。

```shell
  $ sudo apt-get update
  $ sudo apt-get install build-essential cmake
  $ sudo apt-get install git
```

### 安装 emscripten

```shell
  $ git clone https://github.com/emscripten-core/emsdk.git
  $ cd emsdk
  $ git pull
  $ ./emsdk install latest
  $ ./emsdk activate latest
  $ source ./emsdk_env.sh
```

### 开始编译程序

现在一个完整的工具链已经具备，我们可以使用它来编译简单的程序到 WebAssembly。但是，还有一些其他注意事项： 除了 Wasm 二进制文件和 JavaScript wrapper，如果还希望emscripten 生成一个可直接运行的程序的HTML页面，则必须指定一个扩展名为 .html 的输出文件。

在编译之前，首先准备一个最基本的 add.c 程序。

```c  
  #include <stdio.h>
  int add(int a, int b)
  {
    return a + b;
  }
  int main()
  {
    printf("%d", add(1, 2));
  }
```

按如下的命令编辑好 add.c 程序并编译：

```shell
  $ vim add.c
  $ emcc add.c -o add.html
```

默认情况下，Emscripten 设置 EXIT_RUNTIME=0，这意味着我们不包含关闭运行时的代码，浏览器可能会报如下错误：

![浏览器加载Wasm文件错误](/images/blog/20220302/3.png)

图3：浏览器加载 Wasm 文件错误

重新编译应用程序，设置 EXIT_RUNTIME=1:

```javascript
  $ emcc add.c -s EXIT_RUNTIME=1 -o add.html
```

### 运行 WebAssembly 应用

以Chrome 浏览器为例，如果直接在浏览器内本地打开 HTML 文件，会有如下错误：

![XMLHttpRequest 本地访问的跨域请求错误](/images/blog/20220302/4.png)

图4：XMLHttpRequest 本地访问的跨域请求错误

由于 XMLHttpRequest 跨域请求不支持 file:// 协议，必须经由 HTTP 实际输出，可以由 Python3 的 http.server 改进：

```shell
  $ python3 -m http.server > /dev/null 2>&1 &
```

在浏览器中输入 http://127.0.0.1:8000 并打开 add.html，就能直接看到转换成 WebAssembly 的应用程序输出结果。

### 创建独立WebAssembly

默认情况下，emcc 会创建 JavaScript 文件和 WebAssembly 的组合，其中 JS 加载包含编译代码的 WebAssembly。 对于 C/C++ 开发人员，他们可能更倾向于创建独立的 WebAssembly，用于 JavaScript 开发人员调用。为了简便，我们使用下面的 C 文件的内容进行编译：

```c
  int add(int a, int b) {
    return a + b;
  }
```

并执行以下编译命令后即可得到独立的 Wasm 文件：

```shell
  $ emcc add.c -Os -s STANDALONE_WASM=1 -s EXPORTED_FUNCTIONS="['_add']" -Wl, --no-entry -o add.wasm
```

### JavaScript API 调用

从 C/C++ 程序编译获得一个 .wasm 模块之后，JavaScript 开发人员可以通过如下方式进行载入 .wasm 文件并执行。

```javascript  
<script>
  WebAssembly.instantiateStreaming(fetch("add.wasm", {})).then(proj => {
    console.log(proj.instance.exports.add(1, 2));
  });
</script>
```

最后一行调用导出的 WebAssembly 函数，最终执行 add(1, 2)，并且在控制台获得期望的结果输出。

![WebAssembly 求和函数在控制台的输出](/images/blog/20220302/5.png)

图5：WebAssembly 求和函数在控制台的输出
      


## 性能

那么，WebAssembly 的真实性能如何呢？我们用一直被用来作为 CPU 基准测试的斐波那契（Fibonacci）数列来进行对比，这里使用的是性能较差的递归算法，在 Chrome 环境下，能够看到 WebAssembly 性能优势越发明显。

<table><tr><th></th><th>JavaScript (ms)</th><th>WebAssembly (ms)</th></tr><tr><td>fibonacci (25) </td><td>0.53</td><td>0.15</td></tr><tr><td>fibonacci (31) </td><td>6.82</td><td>2.91</td></tr><tr><td>fibonacci (37) </td><td>123.13</td><td>52.18</td></tr><tr><td>fibonacci (41) </td><td>830.55</td><td>355.13</td></tr><tr><td>fibonacci (43) </td><td>2201.65</td><td>930.31</td></tr></table>

表2：斐波那契（Fibonacci）数列性能对比

尽管重复测试时结果不尽相同，重启浏览器并多次测试取平均值后依然可以看到 WebAssembly 的运算量比 JavaScript 快了近一个量级。

## 应用

现阶段已经有很多 WebAssembly 的应用，比如 AutoCAD Web、Google Earth、Unity 3d、Unreal Engine、eBay 等，包括 Google Meet 也借助 WebAssembly 实现了视频背景的实时虚化和替代。

![Google Earth](/images/blog/20220302/6.png)

图6：Google Earth

目前包括 Chrome、Safari、Edge、Firefox 在内的大多数主流浏览器都已经支持 WebAssembly，直接打开浏览器就可以体验 WebAssembly 的强大性能。

## 开发者

WebAssembly 对于 Web 有显著的性能提升，对于开发者尤其是前端或者 JavaScript 开发人员而言，并不意味着 WebAssembly 将会取代 JavaScript。

![WebAssembly 与JavaScript 引擎的关系](/images/blog/20220302/7.png)

图7：WebAssembly 与 JavaScript 引擎的关系

WebAssembly 被设计为对 JavaScript 的补充，而不是替代，是为了提供一种方法来获得应用程序的关键部分接近原生性能。随着时间的推移，虽然 WebAssembly 将允许多种语言（不仅仅是 C/C++）被编译到 Web，但是 JavaScript 的发展势头不会因此被削弱，并且仍然将保持 Web 的单一动态语言。此外，由于 WebAssembly 构建在 JavaScript 引擎的基础架构上，JavaScript 和 WebAssembly 将在许多场景中配合使用。 

那么 WebAssembly 是不是仅仅面向 C/C++ 开发者呢？答案依旧是否定的。WebAssembly 最初实现的重点是 C, C++，目前对由 Mozilla 主导开发的 Rust 语言的支持也比较成熟，对 C#、Go、TypeScript 等许多语言的支持也在逐步完善中，相信未来还会继续增加其他语言的支持。

```javascript  
<script>
  import add from 'add.wasm';
  console.log("1 + 2 = " + add(1, 2));
</script>
```
通过 ES6 模块接口与 JavaScript 集成，Web 开发人员并不需要编写 C++，而是可以直接利用其他人编写的库，重用模块化 C++ 库可以像使用 JavaScript 中的 modules 一样简单。

## 进展

2017 年，Chrome, Edge, Firefox 和 Safari 一致宣布，已经完成对 WebAssembly MVP（最小化可行产品）版本的发布。2019 年， WebAssembly 核心规范 1.0 成为正式的 Web 标准。

与此同时，社区在确保后向兼容的同时，也在积极探索更多的 post-MVP 的特性。其中包括：

- SIMD：SIMD 即单指令流多数据流，允许程序并行处理数据块里的多个数据。它使得 WebAssembly 能充分利用硬件的 SIMD 指令，极大提升游戏开发、机器学习等应用的性能。2021 年 7 月，WebAssembly SIMD 提案进入 Phase 5 阶段，意味着 128 位 SIMD 标准已经趋于完善，并在多种浏览器和工具链中得到支持。社区还在讨论更大宽度的 SIMD 和更多指令。
- 多线程：多线程特性能够充分利用现代多核 CPU，同样有助于程序的并行计算能力。目前 Chrome、Firefox 都支持多线程特性。
- 异常处理：许多语言都会用到异常处理，然而 WebAssembly 目前还没有对异常处理的支持，需要在编译时模拟。目前社区和浏览器正在积极实现这一特性。
- ...

浏览器之外的 WebAssembly 也在蓬勃发展，2019 年社区宣布了一个名为 WASI（WebAssembly 系统接口）的项目，用于提供标准化的 WebAssembly 与不同操作系统之间的交互，专注于安全性和可移植性，引起了业界的广泛兴趣。

## 社区

包含所有主要浏览器厂商代表的 W3C WebAssembly 社区组于 2015 年 4 月底成立，而相应的工作组于 2017 年 8 月成立。目前工作组的任务是，标准化大小和加载时间高效的格式和运行环境，允许编译到 Web 并在各种实现中行为一致。 2019年12月， W3C 宣布 WebAssembly 核心规范 1.0 成为正式的 Web 标准，为Web带来继 HTML、CSS、JavaScript 之后支持代码在浏览器中运行的第四种语言。

随着 WebAssembly 在服务端和云端的逐渐应用，2019年底， Mozilla, Fastly, Intel, Red Hat 宣布成立字节码联盟 Bytecode Alliance，以完善 WebAssembly 在浏览器之外的生态。字节码联盟致力于建立一个有能力、安全的平台，允许软件开发者和服务提供者在任何基础设施、操作系统或设备上安全运行不受信任的代码，以利用在浏览器世界数十年的相关经验。2021 年 4 月，字节码联盟宣布成为 501(c)(6) 非营利组织，并新增微软、谷歌和Arm等成员。

## 展望

目前主要的浏览器厂商对 WebAssembly 表现积极，均已支持 MVP 版本，并在努力实现和推进 post-MVP 的各项特性，以求在 Web 中高性能需求的应用例如在线游戏、音乐、视频流、AR 及 VR、平台模拟、虚拟机、远程桌面、压缩及加密等都能够获得接近于原生的性能。相信 WebAssembly 将会开创 Web 的新时代。
      