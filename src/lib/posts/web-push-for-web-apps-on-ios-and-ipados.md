---
title: "iOS 新增 Web Push 及添加到主屏幕支持"
date: "2023-02-16"
updated: "2023-02-16"
categories:
  - "Fugu"
  - "PWA"
coverImage: "https://webkit.org/wp-content/uploads/Web_Push_on_iOS-1024x576.png"
coverWidth: 16
coverHeight: 9
excerpt: "Apple 于 2 月 16 日发布了 iOS 和 iPadOS 16.4 beta 1，其中 Safari 新增 Web Push 以及添加到主屏幕的功能。Web Push 使 Web 开发人员可以通过使用 Push API、Notifications API 和 Service Workers 一起工作来向他们的用户发送推送通知。"
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

Apple 于 2 月 16 日发布了 iOS 和 iPadOS 16.4 beta 1 版本，其中 Safari 新增 Web Push 以及添加到主屏幕的 Web 应用功能。Web Push 使 Web 开发人员可以通过使用 Push API、Notifications API 和 Service Workers 一起工作来向他们的用户发送推送通知。

当然，Apple 仍然没有提到 PWA 这个词，他们继续使用“添加到主屏幕的 Web 应用”这样的名称。

iOS 及 iPadOS 16.4 b1 中的 Safari 新增功能:

- 💌 Web Push!－⚠️ 只对已安装的 PWA 应用生效
- 🔢 Badging
- 🆔 Manifest ID with a twist
- ⬇️ 从第三方浏览器安装 PWA
- 👁️ Screen Wake Lock
- 🌄 Screen Orientation
- 🧑‍🦰 User Activation
- 🎥 Web Codecs

这些变化正在赋能“添加到主屏幕的 Web 应用”，但仍然存在许多用户体验方面问题，例如：

- 无法从 UI 触发安装
- 无法知道图标是否已安装
- 任意网站都支持“添加到主屏幕”，无论是否是 PWA

原文参见:

- [Web Push for Web Apps on iOS and iPadOS](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)
