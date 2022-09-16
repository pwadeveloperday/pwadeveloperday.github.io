---
title: "W3C TPAC 2022 - Fugu API 更新"
date: "2022-09-15"
updated: "2022-09-15"
categories: 
  - "W3C"
  - "Fugu"
  - "PWA"
  - "Progressive Web Applications"
  - "Progressive Web Apps"
coverImage: ""
coverWidth: 16
coverHeight: 9
excerpt: "W3C 全球技术大会 (TPAC) 是 W3C 的年度重要技术会议之一。 W3C TPAC 2022 在 9 月 12-16 日以线上及线下的混合形式召开。线下会议在加拿大温哥华举办。与此同时，W3C 中国特别设立中国分会场，为中国区参会者举办围绕特定主题的线下面对面会议。Google、微软及英特尔等代表在大会作了分组话题分享，特别是自上届 TPAC 会议以来 Fugu API 等在过去一年的最新进展。"
author: "张敏"
authorTitle: "软件技术经理"
authorCompany: "英特尔 SATG Web 平台工程"
authorImg: "/images/people/120/belem.png"
author2: ""
authorTitle2: ""
authorCompany2: ""
authorImg2: ""
author3: ""
authorTitle3: ""
authorCompany3: ""
authorImg3: ""
---

[W3C 全球技术大会 (TPAC)](https://www.w3.org/2022/09/TPAC/Overview.html) 是 W3C 的年度重要技术会议之一。 W3C TPAC 2022 在 9 月 12-16 日以线上及线下的混合形式召开。线下会议在加拿大温哥华举办。本届大会涵盖小组会议、全球分组话题讨论以及其他会议环节。与此同时，W3C 中国特别设立[中国分会场](https://tpac2022-china-hub.netlify.app/#/)，为中国区参会者举办围绕特定主题的线下面对面会议。

Google、微软及英特尔等代表在大会作了分组话题分享，特别是自上届 TPAC 会议以来 Fugu API 等在过去一年的最新进展。

## Project Fugu

代号为 Project Fugu 的项目是一项跨公司之间的合作工作，其目标是让 Web 应用特别是 PWA 可以做到任何平台的原生应用能够做到的事情。

来自 Microsoft、Intel、Google 的如下专家进行了关于 Project Fugu API 最新进展的演讲 - Project Fugu 🐡：我们启用了什么。

- [Kenneth Rohde Christiansen](https://twitter.com/kennethrohde) (Intel)
- [Alex Russell](https://twitter.com/slightlylate) & [Diego González](https://twitter.com/diekus) (Microsoft)
- [Ben Morss](https://twitter.com/benmorss) & [Thomas Steiner](https://twitter.com/tomayac) (Google)

### 已经完成的新特性

- Chromium 94: 空闲检测 (Idel Detection)
- Chromium 95: 滴管 (EyeDropper)
- Chromium 96: PWA 应用图标快捷方式 (macOS, Linux), PWA URL 协议处理 (URL Protocol Handler)
- Chromium 97: WebTransport
- Chromium 98: 系统 PWA 应用卸载
- Chromium 99: Web NFC: NDEFReader makeReadOnly(), 多屏窗口放置 (Multi-Screen Window Placement), HIDDevice forget()
- Chromium 100: Multi-Screen Window Placement
- Chromium 101: USBDevice forget(), Web USB sameObject behavior
- Chromium 102: 已安装桌面 PWA 窗口控件覆盖 (Window Controls Overlay), 文件处理 (File Handling), Origin Private File System extension: AccessHandle
- Chromium 103: SerialPort forget(), 本地字体访问 (Local Font Access)
- Chromium 104: 异步剪贴板 (Async Clipboard): Web 自定义格式支持

### 进行中的工作

- 多屏 (Multiple screens)
- 屏幕刷新率 (Screen refresh rate)
- BLE 扫描 (BLE scanning), 蓝牙串口 (Serial over Bluetooth)
- 更好的高级存储 (Better advanced storage)
- 文件系统访问 (File system access)
- 低延迟音频 (Low-latency audio)

## File System

文件系统访问 (File System Access) API 使开发人员能够构建功能强大的 Web 应用，与用户本地设备上的文件进行交互。来自 Google 的 Austin Sullivan 介绍了该 API 的历史的现状。

## Device APIs (Bluetooth, HID, Serial, USB)

很多前端开发者对于目前在 Web 中的设备访问能力依然不太了解，来自 Google 的 Fugu 项目 TLM [Vincent Scheib](https://twitter.com/Vincent_Scheib) 专门在 W3C TPAC 2022 进一步讲解了WebUSB, WebBluetooth, WebHID, WebSerialAPI 等等的 API，这些 API 允许使用低级协议与外围设备和其他设备通信, 希望开发者们可以利用 Web 的好处完成日常计算任务。

[Vincent Scheib](https://twitter.com/Vincent_Scheib) 分享了大量的借助 Fugu Device API 的使用场景，例如教培行业、开发板、健康、工具开发等等，这些 API 能够高效的跨平台开发并易于使用和分发，为开发者带来了无限可能。

针对社区和开发者关心的安全性问题，[Vincent Scheib](https://twitter.com/Vincent_Scheib) 分享了一些原则，例如安装具有多设备、多 API 访问权限的 Windows/Mac 等等应用程序和 Web 浏览器限制访问权限之间的风险权衡：

- 需要安全上下文
- 将一台设备授予一个站点的权限，最小特权原则
- 阻止列表设备或属性
- 当设备被访问时通知用户

## 演示文档下载

- Project Fugu: [Google Drive](https://goo.gle/project-fugu-tpac2022), [百度网盘](https://pan.baidu.com/s/1E0CRe7C6RZx0G8YMcxh26A?pwd=ipwa) -&gt; PWA 开发者日 -&gt; 2022 TPAC -&gt; Project Fugu at TPAC2022.pdf

- File System: [Google Drive](https://docs.google.com/presentation/d/12jqBnFuTxnTCrmKsUIZJxQyxAsf0yc6Uz7nKF15JzPw/edit?resourcekey=0-3xJaumMcgsko818iftYRcA#slide=id.p), [百度网盘](https://pan.baidu.com/s/1E0CRe7C6RZx0G8YMcxh26A?pwd=ipwa) -&gt; PWA 开发者日 -&gt; 2022 TPAC -&gt; [TPAC 2022] File System.pdf

- Device APIs (Bluetooth, HID, Serial, USB): [Google Drive](http://goo.gle/tpac2022-device-apis), [百度网盘](https://pan.baidu.com/s/1E0CRe7C6RZx0G8YMcxh26A?pwd=ipwa) -&gt; PWA 开发者日 -&gt; 2022 TPAC -&gt; 2022 TPAC Device APIs.pdf
