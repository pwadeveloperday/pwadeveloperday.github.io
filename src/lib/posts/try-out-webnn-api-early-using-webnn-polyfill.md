---
title: "通过 WebNN Polyfill 体验 WebNN API"
date: "2022-12-08"
updated: "2022-12-08"
categories:
  - "WebNN"
  - "Polyfill"
coverImage: "/images/blog/20221208/1.png"
coverWidth: 16
coverHeight: 9
excerpt: "在浏览器之争中，Chrome 凭借 JavaScript 的卓越性能取得了市场主导地位，然而由于 JavaScript 的无类型特性，导致其运行时消耗大量的性能做为代价，这也是 JavaScript 的瓶颈之一。WebAssembly 旨在解决这一问题。本文从 WebAssembly 的起源到开发实践对其做全面探究，帮助开发者对 WebAssembly 有全面的了解。"
author: "林万铭"
authorTitle: "软件工程师"
authorCompany: "英特尔 SATG Web 平台工程"
authorImg: "/images/people/120/wanming.png"
author2: "戴峰"
authorTitle2: "软件工程师"
authorCompany2: "英特尔 SATG Web 平台工程"
authorImg2: "/images/people/120/bruce.png"
author3: ""
authorTitle3: ""
authorCompany3: ""
authorImg3: ""
---

[W3C][w3c] [Web Neural Network API (WebNN)][wn] 是一种新的 W3C Web 标准，允许 Web 应用和 Web 框架在客户端通过 GPU、CPU 或专用 AI 加速器来加速深度神经网络。

JavaScript Polyfill 通常用来为浏览器提供尚未原生支持的较新的功能，WebNN Polyfill 也是如此，可以通过它提前体验 WebNN 的新功能。现在，[WebNN Polyfill][polyfill] 已发布到 NPM。它是 WebNN API 的 JavaScript 实现，基于 [TensorFlow.js][tfjs]，支持 Web 浏览器和 Node.js 的多个后端。

有了这个 polyfill，Web 开发人员能够在 WebNN API 在浏览器中正式发布之前尽早体验 WebNN API。 同时，它可以作为一个独立的实现来帮助验证 WebNN 规范的可行性和稳定性。

## 使用

通过 NPM 导入 或者使用 script 标签。

- NPM

```js
import "@webmachinelearning/webnn-polyfill";
```

- script 标签

```html
<script src="https://cdn.jsdelivr.net/npm/@webmachinelearning/webnn-polyfill/dist/webnn-polyfill.js"></script>
```

在使用 WebNN API 之前，请设置相应后端以启用 TensorFlow.js。目前 WebNN Polyfill 支持 3 种后端：`CPU`、`WebGL` 和 `WASM`。 `CPU` 后端具有更高的数值精度，而 `WebGL` 后端提供更好的性能。更新的 `WebGPU` 后端正在开发中。

```js
const backend = "webgl"; // or 'cpu', 'wasm'
const context = await navigator.ml.createContext();
const tf = context.tf;
await tf.setBackend(backend);
await tf.ready();
```

## 示例

您可以访问并体验 [WebNN samples][samples]，这些示例展示了由 WebNN API 支持的多种神经网络流行用例。在浏览器支持 WebNN API 之前，它可以回退到浏览器中的 WebNN Polyfill 支持的 Wasm 或者 WebGL 后端。

## 愿景

我们将不断开发 WebNN Polyfill 以使其与 WebNN API 规范保持一致。 同时，英特尔 Web 团队在 [W3C Web Machine Learning 工作组][w3c]与 Google 及微软的相关团队一道，共同推进 [Chromium][webnn in chromium] 中 WebNN API 的实现。我们希望 WebNN API 能够尽早为 Web 开发者带来 AI 硬件加速的访问能力。

[polyfill]: https://www.npmjs.com/package/@webmachinelearning/webnn-polyfill
[tfjs]: https://github.com/tensorflow/tfjs
[samples]: https://webmachinelearning.github.io/webnn-samples-intro/
[webnn in chromium]: https://bugs.chromium.org/p/chromium/issues/detail?id=1273291
[wn]: https://webmachinelearning.github.io/webnn-intro/
[w3c]: https://www.w3.org/groups/wg/webmachinelearning
