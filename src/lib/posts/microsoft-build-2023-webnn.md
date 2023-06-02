---
title: "Microsoft 2023 Build: 用于浏览器推理的 ONNX Runtime Web 框架及 WebNN 整合"
date: "2023-05-30"
updated: "2023-05-30"
categories:
  - "WebNN"
  - "WebML"
coverImage: "/images/blog/20230530/webnn_build1.png"
coverWidth: 16
coverHeight: 9
excerpt: "在 Microsoft 2023 Build 大会上，Panos Panay 宣布 ONNX Runtime 作为 Windows AI 的 Gateway。 ONNX Runtime 可以跨 CPU、GPU、NPU 或与 Azure 混合在任何 Windows 或其他设备上运行 AI 模型。 微软提到还支持使用 ONNX Runtime Web 在浏览器中进行推理，并正在与合作伙伴英特尔合作整合 WebNN。"
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

在 Microsoft 2023 Build 大会上，Panos Panay 宣布 ONNX Runtime 作为 Windows AI 的 Gateway。 ONNX Runtime 可以跨 CPU、GPU、NPU 或与 Azure 混合在任何 Windows 或其他设备上运行 AI 模型。 微软还推出了 Olive 工具链，旨在减轻开发人员为各种 Windows 和其他设备优化模型的负担。 ONNX Runtime 和 Olive 都有助于加快将 AI 模型部署到应用中的速度。

在多个演讲中，微软提到还支持使用 ONNX Runtime Web 在浏览器中进行推理，并正在与伙伴英特尔合作整合 WebNN。

![1](/images/blog/20230530/webnn_build2.png)


微软 Principal PM Jeff Mendenhall 提到：

> We're also working on a WebNN so that you can continue with Web ORT that exists today. 
> It can do local inferencing in-browser. 
> We're also implementing the WebNN standard, and we're working with Intel so once all of code changes get approved, it's coming soon at this point. 

> 我们还在开发 WebNN，以便您可以继续使用目前存在的 ONNX Runtime Web。
> 它可以在浏览器中进行本地推理。
> 我们也在实施 WebNN 标准，我们正在与英特尔合作，因此一旦所有代码更改获得批准，它很快就会出现。

![1](/images/blog/20230530/webnn_build3.png)

微软 CVP Pavan Davuluri 在 Microsoft Build 2023 第二天的演讲中提到, 除了 CPU, GPU 之外, 专有的 NPU AI 硬件加速器正在不断地进入到 Windows 生态，多家厂商均进行了支持，而支持 NPU 的 WebNN API 也将很快到来。

## 演讲回放

- [Unlocking the end-to-end Windows AI developer experience using ONNX runtime and Olive](https://blogs.windows.com/windowsdeveloper/2023/05/23/unlocking-the-end-to-end-windows-ai-developer-experience-using-onnx-runtime-and-olive/)
- [Deliver AI-powered experiences across cloud and edge, with Windows](https://build.microsoft.com/en-US/sessions/0ea15726-1273-4a7c-a71a-efc635172a3b?source=sessions)
- [Shaping the future of work with AI](https://www.youtube.com/watch?v=R5YmXKB5Z5o&t=5796s)
