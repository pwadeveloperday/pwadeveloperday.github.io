---
title: "Web 通用传感器 (Generic Sensors)"
date: "2018-04-08"
updated: "2022-07-06"
categories: 
  - "PWA"
  - "Fugu"
  - "传感器"
coverImage: "/images/blog/20220706/4.png"
coverWidth: 16
coverHeight: 9
excerpt: "今天，传感器数据被用于许多原生应用程序，以实现诸如沉浸式游戏，健身追踪，AR，VR 等用例。如果能有一个 Web 传感器 API 去缩小原生和 Web 应用程序之间的差距是不是很酷？Generic Sensor API，就是为 Web 而诞生的！Generic Sensor API 提供了一套接口把传感器设备暴露到 Web 平台。该 API 由基础 Sensor 接口和一组构建于上方的具体传感器类组成。拥有基础接口可以简化具体传感器类的实现和规范流程。"
author: "林万铭"
authorTitle: "软件工程师"
authorCompany: "英特尔 SATG Web 平台工程"
authorImg: "/images/people/120/wanming.png"
author2: ""
authorTitle2: ""
authorCompany2: ""
authorImg2: ""
author3: ""
authorTitle3: ""
authorCompany3: ""
authorImg3: ""
---

<strong>英特尔 SATG Web 团队一直致力于推进和实现 Web 前沿技术以及在 W3C 的标准化。</strong>

今天，传感器数据被用于许多原生应用程序，以实现诸如沉浸式游戏，健身追踪，AR，VR 等用例。如果能有一个 Web 传感器 API 去缩小原生和 Web 应用程序之间的差距是不是很酷？Generic Sensor API，就是为 Web 而诞生的！

什么是 Generic Sensor API?

Generic Sensor API 提供了一套接口把传感器设备暴露到 Web 平台。该 API 由基础 Sensor 接口和一组构建于上方的具体传感器类组成。拥有基础接口可以简化具体传感器类的实现和规范流程。比如你可以看一下 Gyroscope 类，它非常的简短！核心功能由基础 Sensor 接口提供，Gyroscope 类仅用了三个代表角速度的属性扩展它。通常，具体的传感器类代表平台上的实际传感器，例如加速计或陀螺仪。但是，在某些情况下，传感器类的实现会融合来自多个平台传感器的数据，并以便捷的方式向用户展示结果。例如，AbsoluteOrientation 传感器基于从加速度计，陀螺仪和磁力计获得的数据提供即用型 4x4 旋转矩阵。

您可能认为 Web 平台已经提供了一些传感器数据接口，例如，DeviceMotion 和 DeviceOrientation 事件暴露运动传感器数据，还有一些其他实验性 API 提供来自环境传感器的数据。那么，为什么我们还需要这个新的 API 呢？

与现有传感器接口相比，Generic Sensor API 有许多优势：

- Generic Sensor API 是一个传感器框架，可以使用新的传感器类轻松扩展，并且每个类都将保留通用接口。为一种传感器类型编写的客户端代码可以重新用于另一种，只需很少的修改！
- 您可以配置传感器，例如，设置适合您应用需求的采样频率。
- 您可以检测平台上是否有对应传感器。
- 传感器读数具有高精度时间戳，可以更好地与应用程序中的其他活动同步。
- 传感器数据模型和坐标系统明确定义，允许浏览器供应商实现可互操作的解决方案。
- Generic Sensor 的基础接口没有绑定到 DOM（Navigator 和 Window 对象），为将来在 Service Workers 中使用相同的 API 或在 Headless JS 运行时实现 Generic Sensor API（例如在嵌入式设备上）开辟了的机会。
- 与传统的传感器API相比，安全性和隐私方面是 Generic Sensor API 的首要任务，并且提供了更好的安全级别。目前已经集成了 Permissions API。
- 自动的屏幕坐标同步目前可于 Accelerometer，Gyroscope，LinearAccelerationSensor，AbsoluteOrientationSensor，RelativeOrientationSensor和Magnetometer。

Chrome 支持以下几种传感器。

## 运动传感器（Motion sensors）

- 加速度计（Accelerometer）
- 陀螺仪（Gyroscope)
- 线性加速度传感器（LinearAccelerationSensor）
- 绝对方向传感器（AbsoluteOrientationSensor）
- 相对方向传感器（RelativeOrientationSensor）
  
## 环境传感器（Environmental sensors）

- 环境光传感器（AmbientLightSensor）
- 磁力计（Magnetometer）

您可以通过打开功能标志 chrome://flags/#enable-generic-sensor-extra-classes 来启用环境传感器API以用于开发目的。

如需了解浏览器实现状态的更多信息，请访问 [chromestatus.com](https://chromestatus.com/feature/5298357018820608)。

## 这些传感器是什么？我们如何使用它们？

传感器是一个相当特殊的领域，可能需要简单介绍。如果您熟悉传感器，则可以直接跳到开始编码章节。否则，我们来详细了解每个支持的传感器。

## 加速度和线性加速度

![测量加速度传感器](/images/blog/20220706/1.gif)

图1: 测量加速度传感器

加速度传感器测量三个轴（X，Y 和 Z）上承载传感器的设备的加速度。这个传感器是一个惯性传感器，这意味着当设备处于线性自由落体时，总测得的加速度为 0m/s2，当一个设备平躺在桌子上时，向上方向（Z轴）的加速度将会等于地球的重力，即 g≈+9.8m/s2，因为它测量的是桌子向上推动设备的力。如果将设备推向右侧，则X轴上的加速度为正，如果设备从右侧加速至左侧，则加速度为负。

加速度计可用于如下步骤：步数计算，动作感应或简单的设备定向。通常情况下，加速度计测量结合其他来源的数据，以创建融合传感器，如方向传感器。

线性加速度传感器测量装置传感器的设备的加速度，不包括的重力的作用。例如，当设备处于静止状态时，传感器在三个轴上测量的加速度 ≈0m/2。

## 陀螺仪

![测量陀螺仪传感器](/images/blog/20220706/2.gif)

图2: 测量陀螺仪传感器

陀螺仪传感器测量设备在偏转，倾斜时相对于 X，Y 和 Z 轴的角速度（rad/s）。大多数消费类设备都有机械（MEMS）陀螺仪，它们是基于惯性科里奥利力来测量旋转速率的惯性传感器。MEMS 陀螺仪容易产生漂移，这是由传感器的重力灵敏度引起的，这会使传感器的内部机械系统变形。陀螺仪以相对高的频率振荡，例如 10kHz，因此与其他传感器相比可能消耗更多的功率。

## 方向传感器

![测量绝对方向传感器](/images/blog/20220706/3.gif)

图3: 测量绝对方向传感器

绝对方向传感器是一种的融合传感器，测量设备相对于地球坐标系的旋转，而相对方向传感器则提供设备相对于固定的参考坐标系统的旋转数据。

所有现代 3D JavaScript 框架均支持四元数和旋转矩阵来表示旋转。但是，如果你直接使用 WebGL，方向传感器接口提供了便捷的方法用于 WebGL 兼容的旋转矩阵。这里有几个代码示例：

```js
three.js

let torusGeometry = new THREE.TorusGeometry(7, 1.6, 4, 3, 6.3);
let material = new THREE.MeshBasicMaterial({ color: 0x0071C5 });
let torus = new THREE.Mesh(torusGeometry, material);
scene.add(torus);

// 使用四元数更新网格旋转。
const sensorAbs = new AbsoluteOrientationSensor();
sensorAbs.onreading = () => torus.quaternion.fromArray(sensorAbs.quaternion);
sensorAbs.start();

// 使用旋转矩阵更新网格旋转。
const sensorRel = new RelativeOrientationSensor();
let rotationMatrix = new Float32Array(16);
sensor_rel.onreading = () => {
  sensorRel.populateMatrix(rotationMatrix);
  torus.matrix.fromArray(rotationMatrix);
}
sensorRel.start();
```

```js
BABYLON

const mesh = new BABYLON.Mesh.CreateCylinder("mesh", 0.9, 0.3, 0.6, 9, 1, scene);
const sensorRel = new RelativeOrientationSensor({frequency: 30});
sensorRel.onreading = () => mesh.rotationQuaternion.FromArray(sensorRel.quaternion);
sensorRel.start();
```

```js
WebGL

// 当有新的读数时，初始化传感器和更新模型矩阵。
let modMatrix = new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
const sensorAbs = new AbsoluteOrientationSensor({frequency: 60});
sensorAbs.onreading = () => sensorAbs.populateMatrix(modMatrix);
sensorAbs.start();

// Somewhere in rendering code, update vertex shader attribute for the model
gl.uniformMatrix4fv(modMatrixAttr, false, modMatrix);
```

方向传感器支持各种用例，如沉浸式游戏，AR 和 VR。

如果你想了解运动传感器的更多信息，比如高级用例和需求说明等，请参考运动传感器解释文档。

## 屏幕坐标系同步

默认情况下，空间传感器的读数将在绑定到设备的本地坐标系中解析，并且不考虑屏幕方向。

![设备坐标系](/images/blog/20220706/4.png)

图4: 设备坐标系

但是，许多使用案例（如游戏，AR 和 VR）都需要传感器读数在绑定于屏幕方向的坐标系中解析。

![屏幕坐标系](/images/blog/20220706/5.png)

图5: 屏幕坐标系

以前，传感器读数重新映射到屏幕坐标必须在 JavaScript 中实现。这种方法效率低下，并且也极大地增加了 Web 应用程序代码的复杂性：Web 应用程序必须监视屏幕方向更改并执行传感器读数的坐标转换，这对欧拉角或四元数来说并不是简单的事情。

Generic Sensor API 提供了更简单可靠的解决方案！本地坐标系对于所有定义的空间传感器类都是可配置的： Accelerometer、Gyroscope、LinearAccelerationSensor、AbsoluteOrientationSensor、RelativeOrientationSensor 和 Magnetometer。通过将 referenceFrame 选项传递给传感器对象构造函数，用户可以定义返回的读数是否将在设备或屏幕坐标中解析。

```js
// 当有新的读数时，初始化传感器和更新模型矩阵。
// 或者,可以写成 RelativeOrientationSensor({referenceFrame: "device"}).
const sensorRelDevice = new RelativeOrientationSensor();

// 传感器读数在屏幕坐标系统中得到解析。不需要手动重新映射！
const sensorRelScreen = new RelativeOrientationSensor({referenceFrame: "screen"});

```

## 开始编码!

Generic Sensor API 非常容易上手！Sensor 接口提供了 start() 和 stop() 方法来控制传感器状态和事件处理用于接收传感器状态，错误和新的可用的读数的通知。具体的传感器类通常将其特定的读取属性添加到基类里。

## 开发环境

在开发过程中，您可以通过 localhost 去使用 Sensor 接口，最简单的方法是使用 Web Server for Chrome 来为您的 Web 应用程序提供服务。如果您是在移动设备上开发，需要为本地服务器设置端口转发，然后你就可以开始编码了！

当您的代码准备好后，将其部署在支持 HTTPS 的服务器上。GitHub Pages 可以提供 HTTPS 服务，将是您分享 Demo 的好地方。

## 3D 模型旋转

在下列简单的例子中，我们使用绝对方向传感器的数据来修改 3D 模型的旋转四元数。代码中的 model 是 three.js 的 Object3D 类的一个实例，具有 quaternion 属性。手机定向 demo 中的以下代码片段解释了绝对定位传感器如何用于旋转 3D 模型。

```js
function initSensor() {
  sensor = new AbsoluteOrientationSensor({frequency: 60});
  sensor.onreading = () => model.quaternion.fromArray(sensor.quaternion);
  sensor.onerror = event => {
    if (event.error.name == 'NotReadableError') {
      console.log("Sensor is not available.");
    }
  }
  sensor.start();
}
```

设备的方向将反映在 model 的 3D 旋转的 WebGL 场景内。

![传感器更新3D模型的方向](/images/blog/20220706/6.png)

图6: 传感器更新 3D 模型的方向

## Punchmeter

下面的代码片段是从 punchmeter demo 提取出来的，解释了如何使用线性加速度传感器来计算设备在初始化为静止状态的最大速度。

```js
this.maxSpeed = 0;
this.vx = 0;
this.ax = 0;
this.t = 0;

function onreading() {
  let dt = (this.accel.timestamp - this.t) * 0.001; // In seconds
  this.vx += (this.accel.x + this.ax) / 2 * dt;
  let speed = Math.abs(this.vx);

  if (this.maxSpeed < speed) {
    this.maxSpeed = speed;
  }

  this.t = this.accel.timestamp;
  this.ax = this.accel.x;
}

....

this.accel.addEventListener('reading', onreading);

```

当前速度计算为近似加速度函数的积分。

![测量冲压速度](/images/blog/20220706/7.png)

图7: 测量冲压速度

## 隐私和安全

传感器读数是敏感数据，可能受到来自恶意网页的各种攻击。Chrome 对 Generic Sensor API 的实现做了一些限制，以减轻潜在的安全和隐私风险。打算使用 Generic Sensor API 的开发人员必须考虑到这些限制，下面让我们简单地列出它们。

## 只允许运行在 HTTPS

由于 Generic Sensor API 是一项强大的功能，因此 Chrome 只允许在安全的情况下使用。实际上，这意味着要使用 Generic Sensor API，您需要通过HTTPS访问您的页面。在开发过程中，您可以通过http://localhost 进行此操作，但对于最终产品，您需要在服务器上部署 HTTPS。

## Feature Policy 集成

Generic Sensor API 集成了 Feature Policy 用于控制在 frame 上访问传感器数据。

默认情况下，Sensor 对象只允许在主 frame 或同一个域的子 frame 内创建，从而防止未经授权的跨域 iframe 读取传感器数据。您还可以通过明确地启用或禁用相应的策略控制功能来修改此默认行为。


下面的代码片段说明了如何授予加速度计数据访问跨域 iframe 的权限，这意味着 Accelerometer 或 LinearAccelerationSensor 对象可以在跨域 iframe 里创建。

```html
<iframe src="https://third-party.com" allow="accelerometer" />
```

备注: Feature Policy 集成在 Chrome 65 或更高版本中。在早期版本的 Chrome 中，Sensor 对象只能在主 frame 内创建。

传感器读数传送可以被暂停。

传感器读数只能通过可见网页访问，即用户实际上正在与之交互时。而且，如果用户聚焦到跨域子 frame 传感器读数传送将会在父页面上被暂停，以防止在跨域子 frame 中的第三方软件窃取到用户信息。

由于 Generic Sensor 框架具有很强的可扩展性，我们可以预见更多代表各种传感器类型的新类的出现，并为 PWA 及 Web 带来更多功能。


- 英文作者：Alexander Shalamov, Mikhail Pozdnyakov / 英特尔
- 译者：林万铭
      
