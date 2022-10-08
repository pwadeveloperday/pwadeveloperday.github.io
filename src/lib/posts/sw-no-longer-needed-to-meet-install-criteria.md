---
title: "Service Worker 不再是 PWA 的必要安装条件之一"
date: "2022-10-08"
updated: "2022-10-08"
categories: 
  - "PWA"
  - "PWA Summit"
  - "Service Worker"
coverImage: "/images/blog/20221008/1.png"
coverWidth: 16
coverHeight: 9
excerpt: "在 Chrome 中，渐进式 Web 应用 PWA 通常需要满足一些条件才能触发PWA 的安装流程，包括 HTTPS、manifest、Service Worker 等等。来自 Google 的资深开发者关系团队的 Adriana Jara 在她的 Expanding developer control on PWA installation 的演讲中，为全球开发者分享了 Chrome 正在试验的可安装性要求，其中提到了 Service Worker 将不再作为 PWA 的必要安装条件。"
author: "PWA"
authorTitle: ""
authorCompany: "中国 PWA 开发者日"
authorImg: "/images/people/120/pwadev.png"
author2: ""
authorTitle2: ""
authorCompany2: ""
authorImg2: ""
author3: ""
authorTitle3: ""
authorCompany3: ""
authorImg3: ""
---

渐进式 Web 应用程序 (PWA) 是利用 Web 技术构建的现代高质量应用。在 Chrome 中，渐进式 Web 应用程序通常需要满足以下条件才能触发 `beforeinstallprompt` 事件和在浏览器显示安装按钮：

- 未安装该 Web 应用
- 用户的主动参与
  - 用户至少需在页面中点击一次（任意时刻，即便在页面加载期间）
  - 用户至少需花费 30 秒的时间浏览页面
- 通过 HTTPS 提供服务
- 具有一个 Web 应用清单 (manifest.json)，其中包括：
  - `short_name` 或 `name`
  - `icons` - 必须包含一个 192 像素和一个 512 像素的图标
  - `start_ur`
  - `display` - 必须是 `fullscreen`、`standalone` 或 `minimal-ui`
  - 不能有 `prefer_related_applications`，或值为 false
- 使用 `fetch` 处理程序注册 Service Worker 进程



10 月 5-6 日，[全球 PWA 峰会 (PWA Summit 2022) ](https://pwasummit.org/)在线举行。来自 Google 的资深开发者关系团队的 [Adriana Jara](https://twitter.com/tropicadri) 在她的 Expanding developer control on PWA installation 的演讲中，为全球开发者分享了最新的 Chrome 正在试验的可安装性要求。


![default offline experience for PWAs](/images/blog/20221008/3.png)

Chrome 将会为 PWA 应用提供默认的离线体验。

![servide worker no longer needed to meet install criteria](/images/blog/20221008/2.png)

Service Worker 将不再作为 PWA 的必要安装条件。

![are service worker being deprecated](/images/blog/20221008/4.png)

当然 Service Worker 并不会被弃用，仍将在很多用户场景中被开发者使用。

![install criteria changes](/images/blog/20221008/5.png)



 