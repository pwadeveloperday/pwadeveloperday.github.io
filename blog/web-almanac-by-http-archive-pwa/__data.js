window.__sveltekit_data = (function(a,b,c,d,e){return {type:c,nodes:[null,{type:c,data:{PostContent:"\u003Cp\u003E来自 HTTP Archive 的 Web 年鉴的任务是将 HTTP Archive 的原始统计数据和趋势与 Web 社区的专业知识结合起来。Web 年鉴是一个关于 Web 状态的年度综合报告，由真实的数据和可信的网络专家支持。2022 年版由 22 个章节组成，涵盖了页面内容、用户体验、发布和分发的各个方面。\u003C\u002Fp\u003E\n\u003Cp\u003E9 月下旬，由 \u003Ca href=\"https:\u002F\u002Falmanac.httparchive.org\u002Fen\u002F2022\u002Fcontributors#diekus\" rel=\"nofollow\"\u003EDiego Gonzalez\u003C\u002Fa\u003E 编写了 PWA 章节，涵盖了 Service Worker 的使用和功能、Web Manifest 应用清单、Lighthouse 洞察、Service Worker 库等内容。\u003C\u002Fp\u003E\n\u003Ch2 id=\"简介\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#简介\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E简介\u003C\u002Fh2\u003E\n\u003Cp\u003E在渐进式 Web 应用 PWA 的早期，有两个关键功能吸纳了现代 Web 应用的能力，离线支持和添加到主屏幕的快捷方式。\u003C\u002Fp\u003E\n\u003Cp\u003E这两个概念在安装 PWA 后启用，该过程通常从点击浏览器地址栏中出现的安装图标开始。该图标会提示用户安装该网站。Samsung Internet 和 Mozilla Firefox 等移动浏览器最早明确支持此行为，被熟知为\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FProgressive_web_apps\u002FAdd_to_home_screen\" rel=\"nofollow\"\u003E添加到主屏幕 (A2HS)\u003C\u002Fa\u003E。\u003C\u002Fp\u003E\n\u003Cp\u003E五年前，这还是一个激进的想法。一个网站能够直接从主屏启动，并与设备中其他安装的应用一起列出。这是在缩小 Web 应用的功能与特定于操作系统体验之间差距的方面取得进展的开始。\u003C\u002Fp\u003E\n\u003Cp\u003EWeb 应用的添加到主屏幕的场景已经演变为，可以完全在移动和桌面环境中安装，并深度集成到了操作系统中。在过去的 12 个月里，浏览器在确保 PWA 与桌面平台紧密集成方面取得了重要进展，今年年鉴中的许多新增内容都反映了这些变化。这是 2022 年 PWA 的最新状态。\u003C\u002Fp\u003E\n\u003Cp\u003E注：作为 Web 技术的集合，PWA 并不与 Web 平台的其余部分隔绝。前面的章节专门介绍了\u003Ca href=\"https:\u002F\u002Falmanac.httparchive.org\u002Fzh-CN\u002F2022\u002Fcapabilities\" rel=\"nofollow\"\u003E能力\u003C\u002Fa\u003E，今年我们也研究了在 PWA 中使用这些新的高级功能。\u003C\u002Fp\u003E\n\u003Ch2 id=\"service-workers\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#service-workers\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EService Workers\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FAPI\u002FService_Worker_API\" rel=\"nofollow\"\u003EService Workers\u003C\u002Fa\u003E 是 PWA 的核心技术之一，使离线应用、获取推送通知以及后台处理成为可能。Service Workers 是我们从应用中获得大多数高级体验的基石。Service Workers 还被用于定义数据更新和支持即将推出的新功能，例如 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fgithub.com\u002Faarongustafson\u002Fpwa-widgets#rich-widgets\"\u003E基于 PWA 技术的 widgets\u003C\u002Fa\u003E。\u003C\u002Fp\u003E\n\u003Cp\u003E在 Service Worker 功能支持方面，虽然各主要浏览器之间并不一致，但 Webkit 添加对\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fcaniuse.com\u002Fpush-api\"\u003E推送通知\u003C\u002Fa\u003E 的支持是一个巨大的里程碑。今年早些时候，Apple 宣布\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fwebkit.org\u002Fblog\u002F12945\u002Fmeet-web-push\u002F\"\u003E对其桌面平台进行了更改\u003C\u002Fa\u003E，以支持 \u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FAPI\u002FPush_API\" rel=\"nofollow\"\u003EPush API\u003C\u002Fa\u003E 、\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FAPI\u002FNotifications_API\" rel=\"nofollow\"\u003ENotifications API\u003C\u002Fa\u003E 以及 \u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FAPI\u002FService_Worker_API\" rel=\"nofollow\"\u003EService Workers\u003C\u002Fa\u003E 将会启用 Web Push。Apple 还宣布该功能将于 2023 年进入他们的移动平台。\u003C\u002Fp\u003E\n\u003Ch3 id=\"service-worker-的使用情况\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#service-worker-的使用情况\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EService Worker 的使用情况\u003C\u002Fh3\u003E\n\u003Cp\u003E为了比较，我们进行了与去年类似的调查，使我们能够了解 Service Worker 使用的演变。去年的章节解释了\u003Ca href=\"https:\u002F\u002Falmanac.httparchive.org\u002Fen\u002F2021\u002Fpwa#service-workers-usage\" rel=\"nofollow\"\u003E为什么找出 Service Worker 的实际使用情况并非易事\u003C\u002Fa\u003E，今年同样如此。\u003C\u002Fp\u003E\n\u003Cp\u003E看两组数据：\u003C\u002Fp\u003E\n\u003Cul\u003E\u003Cli\u003ELighthouse 检测到所有网站中有 1.6%（移动）和 1.7%（桌面）使用了 Service Worker。由于 Lighthouse 进行了\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fweb.dev\u002Fservice-worker\"\u003E额外检查\u003C\u002Fa\u003E，我们预计这些数字低于实际百分比。\u003C\u002Fli\u003E\n\u003Cli\u003E遵循去年推出的相同\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fgithub.com\u002FHTTPArchive\u002Flegacy.httparchive.org\u002Fblob\u002Fmaster\u002Fcustom_metrics\u002Fpwa.js\"\u003E指标\u003C\u002Fa\u003E， 网站中 Service Worker 的使用率在桌面端和移动端分别达到 1.63% 和 1.81%。\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F1.png\" alt=\"支持 Service Worker 的网站（按排名）\"\u003E\n图1：支持 Service Worker 的网站（按排名）\u003C\u002Fp\u003E\n\u003Cp\u003E在前 1000 个网站中，支持 Service Worker 的页面数量没有明显的变化，桌面端略有下降，而移动端的增长则更小，但所有其他类别都有所增加。如果我们遵循\u003Ca href=\"https:\u002F\u002Falmanac.httparchive.org\u002Fzh-CN\u002F2021\u002Fpwa#fig-2\" rel=\"nofollow\"\u003E去年的推理\u003C\u002Fa\u003E，即假设大型网站更快地采用先进技术，那么看到其他类别的更多增长是合理的。似乎较小的公司和开发人员已经学习并采用了从流量更多的公司案例研究和示例中分享的技术。\u003C\u002Fp\u003E\n\u003Ch3 id=\"service-worker-事件\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#service-worker-事件\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EService Worker 事件\u003C\u002Fh3\u003E\n\u003Cp\u003EService Worker 在 Web 应用、浏览器和网络之间充当代理服务器的角色。要安装 Service Worker，必须获取并注册它。注册成功后，Service Worker 将在一个\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FAPI\u002FServiceWorkerGlobalScope\" rel=\"nofollow\"\u003E特殊 Woker 容器\u003C\u002Fa\u003E中执行，该容器在主线程之外运行并且没有 DOM 访问权。这是可以处理事件的时机。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F2.png\" alt=\"最常用的 Service Worker 事件\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 2：最常用的 Service Worker 事件\u003C\u002Fp\u003E\n\u003Cp\u003E上面的图表显示了最常用的 Service Worker 事件信息。这些事件可以分类为：\u003C\u002Fp\u003E\n\u003Cul\u003E\u003Cli\u003E生命周期事件\u003C\u002Fli\u003E\n\u003Cli\u003E通知相关的事件\u003C\u002Fli\u003E\n\u003Cli\u003E后台处理事件\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\u003Ch4 id=\"生命周期事件\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#生命周期事件\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E生命周期事件\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Ccode\u003Einstall\u003C\u002Fcode\u003E 和 \u003Ccode\u003Eactivate\u003C\u002Fcode\u003E 是生命周期事件。创建资产缓存以允许在安装时离线运行应用是一种常见的做法。激活通常用于清理与之前的 Service Worker 关联的旧缓存。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F3.png\" alt=\"移动端 Service Worker 的 `install` 事件使用率\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 3：移动端 Service Worker 的 \u003Ccode\u003Einstall\u003C\u002Fcode\u003E 事件使用率\u003C\u002Fp\u003E\n\u003Cp\u003EService Worker 需要处于活动状态才能接收诸如 fetch 和 push 之类的事件。它们是 Service Workers 的基石，因此在桌面端有 63%，以及移动端有 61% 用于\u003Ccode\u003E安装\u003C\u002Fcode\u003E 和 \u003Ccode\u003E激活\u003C\u002Fcode\u003E。\u003C\u002Fp\u003E\n\u003Cp\u003E剩下约 40% 的站点可能没有活跃地使用这些事件，因为他们可以使用 Service Worker 进行通知或利用仅在站点运行时缓存发出的请求，也称为\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fweb.dev\u002Fruntime-caching-with-workbox\u002F\"\u003E运行时缓存\u003C\u002Fa\u003E。\u003C\u002Fp\u003E\n\u003Cp\u003E虽然这些仍然是最常用的事件，但正在使用的其他类型事件的增加使我们推测，有更多的 Service Worker 不（仅仅）用预缓存作为他们的主要任务。\u003C\u002Fp\u003E\n\u003Ch4 id=\"通知相关的事件\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#通知相关的事件\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E通知相关的事件\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F4.png\" alt=\"桌面端 Service Worker 的 `notificationclick` 事件使用率\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 4：桌面端 Service Worker 的 \u003Ccode\u003Enotificationclick\u003C\u002Fcode\u003E 事件使用率\u003C\u002Fp\u003E\n\u003Cp\u003E在最常用的 Service Worker 方法中，推送通知 (Push Notification) 事件紧随其后。\u003C\u002Fp\u003E\n\u003Cul\u003E\u003Cli\u003E桌面端的\u003Ccode\u003Enotificationclick\u003C\u002Fcode\u003E 高达 57%（比去年的数据\u003Cspan class=\"numeric-good\"\u003E▲11%\u003C\u002Fspan\u003E ），移动端占 51% (\u003Cspan class=\"numeric-good\"\u003E▲5 %\u003C\u002Fspan\u003E) 。\u003C\u002Fli\u003E\n\u003Cli\u003E桌面端的 \u003Ccode\u003Epush\u003C\u002Fcode\u003E 达到 56% (\u003Cspan class=\"numeric-good\"\u003E▲12%\u003C\u002Fspan\u003E) ，移动端占 50% (\u003Cspan class=\"numeric-good\"\u003E▲5%\u003C\u002Fspan\u003E)。\u003C\u002Fli\u003E\n\u003Cli\u003E桌面端的 \u003Ccode\u003Enotificationclose\u003C\u002Fcode\u003E 为 15% (\u003Cspan class=\"numeric-good\"\u003E▲9%\u003C\u002Fspan\u003E) 移动端为 16% (\u003Cspan class=\"numeric-good\"\u003E▲10%\u003C\u002Fspan\u003E) 。\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\u003Cp\u003E几个要点：2022 年桌面端 PWA 的势头继续增长，推送通知 (Push Notification) 也不例外。通知相关事件的使用量增加了约 11%。用户体验部分已经在不同的平台上进行了许多调整和修复，以确保它们与操作系统完全集成。在新宣布的\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fwebkit.org\u002Fblog\u002F12945\u002Fmeet-web-push\u002F\"\u003E支持 Webkit 的 Web 推送\u003C\u002Fa\u003E之后，我们预计这些数字将继续增长。这是许多开发人员长期以来一直要求的功能，最终在 macOS 上得到支持，希望 iOS 设备也能很快跟进，如此则可以鼓励开发人员使用该 API。\u003C\u002Fp\u003E\n\u003Ch4 id=\"后台处理事件\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#后台处理事件\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E后台处理事件\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F5.png\" alt=\"桌面端 Service Worker 的 `fetch` 事件\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 5：桌面端 Service Worker 的 \u003Ccode\u003Efetch\u003C\u002Fcode\u003E 事件\u003C\u002Fp\u003E\n\u003Cp\u003E图表中剩余的事件为后台处理事件：\u003C\u002Fp\u003E\n\u003Cul\u003E\u003Cli\u003E\u003Ccode\u003Efetch\u003C\u002Fcode\u003E：当请求发送到服务器时发生，可拦截请求并使用自定义或缓存资产进行响应，从而为 PWA 提供离线支持。桌面端的 fetch 使用率为 49%，移动端为 50%。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Esync\u003C\u002Fcode\u003E：当 UA 认为用户有连接时触发，桌面端的使用率为 6%，移动端的使用率为 5%。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Eperiodicsync\u003C\u002Fcode\u003E：允许 Web 应用在后台定期同步数据，目前在桌面和移动平台都是 0.01%。应该注意的是，\u003Ccode\u003Eperiodicsync\u003C\u002Fcode\u003E 被限制为最多每 12 小时一次。这可以人为地抑制该功能的使用。\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\u003Ch3 id=\"其他受欢迎的-service-worker-功能\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#其他受欢迎的-service-worker-功能\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E其他受欢迎的 Service Worker 功能\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F6.png\" alt=\"skipWaiting()` 方法的使用\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 6：skipWaiting()` 方法的使用\u003C\u002Fp\u003E\n\u003Cp\u003E类似于\u003Ca href=\"https:\u002F\u002Falmanac.httparchive.org\u002Fzh-CN\u002F2021\u002Fpwa#other-popular-service-worker-features\" rel=\"nofollow\"\u003E去年的数据\u003C\u002Fa\u003E，用于立即激活 Service Worker 的 \u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FAPI\u002FServiceWorkerGlobalScope\u002FskipWaiting\" rel=\"nofollow\"\u003E\u003Ccode\u003EskipWaiting\u003C\u002Fcode\u003E\u003C\u002Fa\u003E 方法在开发人员中仍然非常流行，存在于 60% 的桌面和 59% 的移动 Web 应用中。\u003C\u002Fp\u003E\n\u003Cp\u003E这些是最常用的 Service Worker 对象：\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F7.png\" alt=\"最常用的 Service Worker 对象\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 7：最常用的 Service Worker 对象\u003C\u002Fp\u003E\n\u003Cp\u003E这些是最常用的对象方法：\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F8.png\" alt=\"最常用的 Service Worker 对象方法\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 8：最常用的 Service Worker 对象方法\u003C\u002Fp\u003E\n\u003Ch2 id=\"web-应用程序清单web-app-manifest\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#web-应用程序清单web-app-manifest\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EWeb 应用程序清单（Web App Manifest）\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Cem\u003EWeb 应用程序清单（Web App Manifest）\u003C\u002Fem\u003E 是一个 JSON 文件，其中包含应用程序本身的信息。Manifest 文件是定义 PWA 的另一项主要核心技术。键值对中的数据包括与显示、推广和将应用集成到操作系统相关的信息。\u003C\u002Fp\u003E\n\u003Cp\u003EWeb 应用程序 manifest 对于通过在线存储库、提交到应用商店、利用最新的高级功能（如应用的共享目标和文件处理）至关重要。\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fgithub.com\u002Faarongustafson\u002Fpwa-widgets#how-widgets-are-represented-in-these-apis\"\u003E启用基于 PWA 技术的 Widgets\u003C\u002Fa\u003E 也植根于 manifest 中，证明了 manifest 的多功能性，并进一步用于高级平台集成。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F9.png\" alt=\"桌面端的 manifest 文件的百分比\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 9：桌面端的 manifest 文件的百分比\u003C\u002Fp\u003E\n\u003Cp\u003E我们发现，大多数情况下，在 95% 的桌面端和 94% 的移动端，manifest 是 JSON 可解析的。这表明几乎所有 Web 应用的 manifest 格式都是正确的。\u003C\u002Fp\u003E\n\u003Cp\u003E这并不表示有助于安装 Web 应用的某些字段的完整性或最低可用性。事实上，manifest 文件目前没有必需的属性。从技术上讲，空文件也是有效的 manifest 文件。\u003C\u002Fp\u003E\n\u003Cp\u003EManifest 文件在向浏览器发出安装提示方面起着关键作用，尽管提示的触发方式\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fweb.dev\u002Finstallable-manifest\u002F#in-other-browsers\"\u003E因不同的浏览器而异\u003C\u002Fa\u003E，总会涉及到 manifest 文件的一个子集。\u003C\u002Fp\u003E\n\u003Cp\u003E以下是 manifest  文件与 Service Worker 一起使用的数量。这两者结合使用通常意味着 PWA 的可安装性。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F10.png\" alt=\"Service Worker 及 Manifest 的使用率\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 10：Service Worker 及 Manifest 的使用率\u003C\u002Fp\u003E\n\u003Cp\u003E数据显示，Web 应用拥有 manifest 文件的可能性是 Service Worker 的 5 倍左右。一个促成因素是许多平台，例如内容管理系统 (CMS) 会为网站自动生成 manifest 文件。\u003C\u002Fp\u003E\n\u003Cp\u003E只有一小部分网站（桌面和移动设备上均为 0.8%）同时实现了 Service Worker 和 manifest 文件，这意味着只有不到 1% 的网站可以像原生应用一样安装到设备上。\u003C\u002Fp\u003E\n\u003Cp\u003E在本章中，我们最感兴趣的是同时具有 Service Worker 和 manifest 的站点，除非另有说明，本章中的 manifest 数据是针对 PWA 站点的。\u003C\u002Fp\u003E\n\u003Ch3 id=\"manifest-成员\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#manifest-成员\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EManifest 成员\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F11.png\" alt=\"常用 PWA manifest 成员\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 11：常用 PWA manifest 成员\u003C\u002Fp\u003E\n\u003Cp\u003E与去年相比，今年 manifest 文件中使用的顶级成员没有显著变化。\u003C\u002Fp\u003E\n\u003Cp\u003E请注意，\u003Ccode\u003Egcm_sender_id\u003C\u002Fcode\u003E 不是标准化成员。Google Developer Console 使用它来识别应用程序并启用旧版本的 Chrome 来实现依赖于 GCM 服务的 Web 推送。\u003C\u002Fp\u003E\n\u003Cp\u003E大多数 PWA（80% 桌面端，79% 移动端）没有定义首选方向（orientation）。而 manifest 中定义该成员的最常用的值是 \u003Ccode\u003Eportrait\u003C\u002Fcode\u003E，其中 13% 在桌面端，15% 用于移动网站。\u003C\u002Fp\u003E\n\u003Ch4 id=\"display-成员\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#display-成员\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Ccode\u003Edisplay\u003C\u002Fcode\u003E 成员\u003C\u002Fh4\u003E\n\u003Cp\u003E深入研究 \u003Ccode\u003Edisplay\u003C\u002Fcode\u003E 成员，我们看到以下值：\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F12.png\" alt=\"PWA manifest display 值\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 12：PWA manifest display 值\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ccode\u003Edisplay:standalone\u003C\u002Fcode\u003E 是最常见的 \u003Ccode\u003Edisplay\u003C\u002Fcode\u003E 模式，几乎 3\u002F4 定义了 \u003Ccode\u003Edisplay\u003C\u002Fcode\u003E 模式的网站都使用这个值。它也是使应用可安装的 \u003Ccode\u003Edisplay\u003C\u002Fcode\u003E 模式之一。\u003C\u002Fp\u003E\n\u003Ch4 id=\"icons-成员\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#icons-成员\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Ccode\u003Eicons\u003C\u002Fcode\u003E 成员\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F13.png\" alt=\"顶级 PWA 的 manifest 图标尺寸\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 13：顶级 PWA 的 manifest 图标尺寸\u003C\u002Fp\u003E\n\u003Cp\u003EPWA 需要生成不同的图标大小，以适应推广和显示应用的需要。很多工具支持生成桌面和移动设备所需的大量图标。Manifest 文件中最常见的两种图标大小是 \u003Ccode\u003E192x192\u003C\u002Fcode\u003E 和 \u003Ccode\u003E512x512\u003C\u002Fcode\u003E。在所分析的 manifest 文件中，这两种大小都出现的情况大约占 70%。\u003C\u002Fp\u003E\n\u003Ch4 id=\"安装和可被发现成员\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#安装和可被发现成员\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E安装和可被发现成员\u003C\u002Fh4\u003E\n\u003Cp\u003EWeb 应用 manifest 文件包含描述应用有用的数据。应用商店或其他分发机制可以使用这些属性来推广应用。\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fblog\u002Fricher-pwa-installation\u002F\"\u003E基于浏览器的富安装对话框\u003C\u002Fa\u003E的增长也在更多地利用这些字段。下面列出了manifest 文件中作为补充应用信息的一部分的相关字段：\u003C\u002Fp\u003E\n\u003Cul\u003E\u003Cli\u003E\u003Ccode\u003Edescription\u003C\u002Fcode\u003E：此成员存在于 36% 的桌面应用和 34% 的移动 Web 应用的 manifest 中。\u003Ccode\u003Edescription\u003C\u002Fcode\u003E 很重要，因为它解释了应用的功能。它通常用于为商店提供有关应用的信息。目前大约有 1\u002F3 的可安装 PWA 提供这些信息。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Escreenshots\u003C\u002Fcode\u003E：此成员提供一个或多个屏幕截图的 URL，以在应用商店或浏览器的安装提示中使用。具有此功能的 manifest 的 PWA 在桌面端占 1.12%，在移动设备中占 1.19%。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Ecategories\u003C\u002Fcode\u003E：类别用作目录或应用商店列表的提示。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Eiarc_rating_id\u003C\u002Fcode\u003E：这是一个字符串，代表 Web 应用的 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fwww.globalratings.com\u002Fhow-iarc-works.aspx\"\u003EIARC 认证代码\u003C\u002Fa\u003E。0.05% 的桌面和移动应用利用此成员来宣传其应用或游戏的评级。\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\u003Ch4 id=\"类别-categories-成员\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#类别-categories-成员\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E类别 \u003Ccode\u003Ecategories\u003C\u002Fcode\u003E 成员\u003C\u002Fh4\u003E\n\u003Cp\u003E让我们再深入研究一下 \u003Ccode\u003Ecategories\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F14.png\" alt=\"顶级 PWA 的 manifest 类别\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 14：顶级 PWA 的 manifest 类别\u003C\u002Fp\u003E\n\u003Cp\u003E除了使用 Service Worker 来定义的 “PWA 网站” 之外，下面是所有网站的数据：\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F15.png\" alt=\"顶级 manifest 类别\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 15：顶级 manifest 类别\u003C\u002Fp\u003E\n\u003Cp\u003E普通网站和 PWA 的顶级类别基本一致，但略有不同。 前三类别是购物，新闻和商业。\u003C\u002Fp\u003E\n\u003Ch4 id=\"高级功能\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#高级功能\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E高级功能\u003C\u002Fh4\u003E\n\u003Cp\u003EManifest 文件还允许激活最新的平台能力，支持操作系统的高级窗口功能或注册行为。最近已经有许多新功能得到了支持。\u003C\u002Fp\u003E\n\u003Cp\u003E由于这些功能较少使用但更高级，它们没有在\u003Ca href=\"#manifest-%E6%88%90%E5%91%98\"\u003E我们之前的顶级 manifest 属性图\u003C\u002Fa\u003E中显示，但了解它们的用法是值得的：\u003C\u002Fp\u003E\n\u003Cul\u003E\u003Cli\u003E\u003Ccode\u003Eshortcuts\u003C\u002Fcode\u003E：6.2％ 的桌面端和 4.3％ 的移动 PWA 都使用 \u003Ccode\u003Eshortcuts\u003C\u002Fcode\u003E。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Efile_handlers\u003C\u002Fcode\u003E：允许已安装的 PWA 注册自己作为特定文件扩展的处理程序。只有 0.01％ 的台式机和 0.02％ 的移动设备使用了\u003Ccode\u003Efile_handlers\u003C\u002Fcode\u003E。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Eprotocol_handlers\u003C\u002Fcode\u003E: 可以注册 PWA 为预定义或自定义协议的处理应用。当前桌面端使用率为 0％，移动端的使用率为 0.01％。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Eshare_target\u003C\u002Fcode\u003E:  5.3％ 的桌面端和 3.1％ 的移动端 PWA 能够注册并接收来自其他应用的分享数据。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fwicg.github.io\u002Fwindow-controls-overlay\u002F\"\u003E窗口控件覆盖\u003C\u002Fa\u003E：允许开发人员在桌面端将自定义内容放置在由浏览器控制的标题栏区域。该功能在 Chrome 105 启用，有 0.01％的桌面 PWA 的 manifest 包含此功能。\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Enote_taking\u003C\u002Fcode\u003E: 有 0％ 的桌面端和 0.01％ 的移动端网站正使用特殊集成的能力作为快速笔记的便利方式。\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\u003Ch4 id=\"manifest-原生偏向\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#manifest-原生偏向\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EManifest 原生偏向\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F16.png\" alt=\"移动端带有 `related_applications` 字段的 mainfest 文件\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 16：移动端带有 \u003Ccode\u003Erelated_applications\u003C\u002Fcode\u003E 字段的 mainfest 文件\u003C\u002Fp\u003E\n\u003Cp\u003EManifest 中的 \u003Ccode\u003Erelated_applications\u003C\u002Fcode\u003E 成员字段旨在将该字段列出的应用替代提供类似功能的 Web 应用。从所有 manifest 文件中分析的结果表明，桌面端有 2.3％，移动端有 2.0％ 设置了该值。\u003C\u002Fp\u003E\n\u003Ch2 id=\"fugu-apis\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#fugu-apis\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EFugu APIs\u003C\u002Fh2\u003E\n\u003Cp\u003EPWA 与 高级的 Web 能力齐头并进。这些能力通常是 Project Fugu 的一部分，而 Project Fugu 是 Chromium 项目孵化的新的 Web 平台能力的代号。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F17.png\" alt=\"大多数使用的 Fugu API（桌面端）\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 17：大多数使用的 Fugu API（桌面端）\u003C\u002Fp\u003E\n\u003Cp\u003EWeb 平台的新能力越来越多，这些是 Web 中可用于 PWA 的使用最多的 API：\u003C\u002Fp\u003E\n  \u003Ctable\u003E\u003Cthead\u003E\u003Ctr\u003E\u003Cth\u003EApi\u003C\u002Fth\u003E\n        \u003Cth\u003E桌面端\u003C\u002Fth\u003E\n        \u003Cth\u003E移动端\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\n    \u003Ctbody\u003E\u003Ctr\u003E\u003Ctd\u003EWeb 共享 (Web Share)\u003C\u002Ftd\u003E\n        \u003Ctd class=\"numeric\"\u003E8.8%\u003C\u002Ftd\u003E\n        \u003Ctd class=\"numeric\"\u003E8.4%\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\n      \u003Ctr\u003E\u003Ctd\u003E添加到主屏幕\u003C\u002Ftd\u003E\n        \u003Ctd class=\"numeric\"\u003E8.6%\u003C\u002Ftd\u003E\n        \u003Ctd class=\"numeric\"\u003E7.7%\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\n      \u003Ctr\u003E\u003Ctd\u003EService Worker\u003C\u002Ftd\u003E\n        \u003Ctd class=\"numeric\"\u003E4.2%\u003C\u002Ftd\u003E\n        \u003Ctd class=\"numeric\"\u003E3.9%\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\n      \u003Ctr\u003E\u003Ctd\u003EPush 推送\u003C\u002Ftd\u003E\n        \u003Ctd class=\"numeric\"\u003E2.0%\u003C\u002Ftd\u003E\n        \u003Ctd class=\"numeric\"\u003E1.9%\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\n\u003Cp\u003E由于有单独的章节介绍\u003Ca href=\"https:\u002F\u002Falmanac.httparchive.org\u002Fzh-CN\u002F2022\u002Fcapabilities\" rel=\"nofollow\"\u003E能力\u003C\u002Fa\u003E，因此在此我们不作过多叙述。\u003C\u002Fp\u003E\n\u003Ch2 id=\"来自-lighthouse-的-pwa-洞察\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#来自-lighthouse-的-pwa-洞察\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E来自 Lighthouse 的 PWA 洞察\u003C\u002Fh2\u003E\n\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fdocs\u002Flighthouse\u002F\"\u003ELighthouse\u003C\u002Fa\u003E 是一个开源的自动化工具，用于提升网页质量。 它可在网站中运行很多检测，特别是专用于 PWA 类别的审计。 已有数据阐明了过去 12 个月关于 PWA 的一些有趣的事实。\n\u003Ch3 id=\"lighthouse-审计\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#lighthouse-审计\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003ELighthouse 审计\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F19.png\" alt=\"桌面端 Lighthouse PWA 审计\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 19：桌面端 Lighthouse PWA 审计\u003C\u002Fp\u003E\n\u003Cp\u003E与普通的网站相比，通过 PWA 审计的 PWA 网站更多并不奇怪，尽管某些审计例如 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fweb.dev\u002Fviewport\u002F#how-to-add-a-viewport-meta-tag\"\u003Eviewport meta 标签\u003C\u002Fa\u003E 以及 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fweb.dev\u002Fapple-touch-icon\u002F#how-the-lighthouse-apple-touch-icon-audit-fails\"\u003Eapple-touch-icon\u003C\u002Fa\u003E 也经常出现在非 PWA 网站中。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F20.png\" alt=\"移动端 Lighthouse PWA 审计\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 20：移动端 Lighthouse PWA 审计\u003C\u002Fp\u003E\n\u003Cp\u003E我们看到 Lighthouse 关于移动网站一些类似的统计数据，仅用于移动端的 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fdocs\u002Flighthouse\u002Fpwa\u002Fcontent-width\u002F\"\u003Econtent-width\u003C\u002Fa\u003E 元标签都通过了。\u003C\u002Fp\u003E\n\u003Cp\u003EViewport 元标签的存在很重要，因为它在以重新缩放的方式等待双击时移除了 300-350ms 的延迟。在移动设备上，它还具有为屏幕尺寸优化应用的额外好处 。几乎所有 PWA 的网站都包含这个标签毫不奇怪。\u003C\u002Fp\u003E\n\u003Cp\u003E可安装 manifest 也在两个列表中位列前 3。 不出所料，这对 PWA 站点很有价值，无论是在桌面端（90.2％）还是移动设备（95.2％）。但对所有网站来说该数据却非常低，可能是因为开发人员不打算安装这些网站。\u003C\u002Fp\u003E\n\u003Cp\u003E最后，\u003Ccode\u003Eapple-touch-icon\u003C\u002Fcode\u003E 在与 PWA 相关的 Lighthouse 审计中排名第三。 自 iOS 1.1.3 以来，iOS Safari 支持开发人员指定用于主屏的网站或应用的图片，这主要还是移动端相关的。\u003C\u002Fp\u003E\n\u003Ch3 id=\"lighthouse-评分\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#lighthouse-评分\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003ELighthouse 评分\u003C\u002Fh3\u003E\n\u003Cp\u003E作为 Lighthouse 洞察部分的总结，让我们看看基于审计的 PWA 站点的 Lighthouse PWA 总体得分。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F21.png\" alt=\"桌面 Lighthouse 得分\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 21：桌面 Lighthouse 得分\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F22.png\" alt=\"移动端 Lighthouse 得分\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 22：移动端 Lighthouse 得分\u003C\u002Fp\u003E\n\u003Cp\u003E正如预期的那样，PWA 网站的 PWA 审计分数往往要高得多。 这些审核会检测速度、可靠性、可安装性和其他的 PWA 需求，详见他们的\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fdocs\u002Flighthouse\u002Fpwa\u002F\"\u003E文档\u003C\u002Fa\u003E。\u003C\u002Fp\u003E\n\u003Cp\u003E同样值得注意的是 PWA 站点中的审计分数范围（50-100）代表了 PWA 的差异。 相比之下，其余网站的分数范围相当一致（20-40），这反映了之前讨论的大多数网站相关的两个主要审计内容：viewport 和图标 icons。\u003C\u002Fp\u003E\n\u003Ch2 id=\"service-worker-库\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#service-worker-库\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EService Worker 库\u003C\u002Fh2\u003E\n\u003Cp\u003EService Workers 非常强大，这些 API 允许开发人员创建以前不可能实现的应用体验，例如离线体验或缓存资产以提高性能。但是，处理 Web 应用和网络之间关系的代码会带来复杂性和更多问题。下面的一些库围绕 Service Worker API 提供了更高级别的抽象，让开发人员的工作更便捷。\u003C\u002Fp\u003E\n\u003Ch3 id=\"workbox-的使用\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#workbox-的使用\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EWorkbox 的使用\u003C\u002Fh3\u003E\n\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fworkbox\u002F\"\u003EWorkbox\u003C\u002Fa\u003E 是一组库，旨在简化开发人员对 Service Worker 的使用。这些库包含在其他 Workbox 库中重用的带有 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fdocs\u002Fworkbox\u002Fmodules\u002Fworkbox-core\u002F\"\u003Eworkbox-core\u003C\u002Fa\u003E的基础知识，到更具体的任务，如\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fdocs\u002Fworkbox\u002Fmodules\u002Fworkbox-strategies\u002F\"\u003E缓存策略\u003C\u002Fa\u003E、\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fdocs\u002Fworkbox\u002Fmodules\u002Fworkbox-background-sync\u002F\"\u003E后台同步\u003C\u002Fa\u003E、\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fdocs\u002Fworkbox\u002Fmodules\u002Fworkbox-precaching\u002F\"\u003E预缓存\u003C\u002Fa\u003E 以及\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdeveloper.chrome.com\u002Fdocs\u002Fworkbox\u002Fmodules\u002F\"\u003E更多\u003C\u002Fa\u003E。\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F23.png\" alt=\"PWA 页面的 Workbox 使用率\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 23：PWA 页面的 Workbox 使用率\u003C\u002Fp\u003E\n\u003Cp\u003E与去年相比，我们看到 Workbox 的使用量出现了大幅增长。 去年，它在移动设备上的使用率为 33%，而今年为 54%，近 60% 的桌面 PWA 在一定程度上使用了 Workbox。\u003C\u002Fp\u003E\n\u003Cp\u003EService Workers 控制的页面数量的增长不在前 1000 个网站，而是在更细化的类别中。而 Workbox 使用量的增长，我们能够推断各大公司和网站内部正在采用 Workbox，他们也许在等待顶级网站采用该技术，或者不需要完全自定义的 Service Workers 实现，而是充分利用开箱即用的 Workbox。\u003C\u002Fp\u003E\n\u003Ch4 id=\"workbox-包\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#workbox-包\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EWorkbox 包\u003C\u002Fh4\u003E\n\u003Cp\u003EWorkbox 可以使开发人员根据站点的需要选择将哪些部分添加到他们的项目中。 下面显示的用法有助于我们记录开发人员目前正在实施哪些 PWA 功能。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F24.png\" alt=\"Top Workbox packages\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 24：Workbox 包\u003C\u002Fp\u003E\n\u003Cp\u003E我们还看到 \u003Ccode\u003Eworkbox-core\u003C\u002Fcode\u003E 整体使用量的增加。基础库的使用量增加了 14%。\u003Ccode\u003Eworkbox-core\u003C\u002Fcode\u003E 与 \u003Ccode\u003Eworkbox-routing\u003C\u002Fcode\u003E 和 \u003Ccode\u003Eworkbox-strategies\u003C\u002Fcode\u003E 一起用于创建缓存策略，用于在其 Web 应用中提供不同的工件以提高性能。有意义的是，它们都处于领先地位，因为它们能够为 Service Workers 带来核心利益。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ccode\u003Eworkbox-precaching\u003C\u002Fcode\u003E 的使用也有相当大的跳跃。预缓存可用于模拟打包应用的使用。使用 \u003Ccode\u003Eworkbox-precaching\u003C\u002Fcode\u003E，您可以在 Service Worker 安装时选择将要缓存的资产，以使这些资产在后续访问中加载得更快。\u003C\u002Fp\u003E\n\u003Cp\u003E令人惊讶的是 \u003Ccode\u003Eworkbox-sw\u003C\u002Fcode\u003E 使用率的上升，因为从 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fgithub.com\u002FGoogleChrome\u002Fworkbox\u002Freleases\u002Ftag\u002Fv5.0.0\"\u003EWorkbox 5\u003C\u002Fa\u003E 开始，Workbox 团队鼓励开发人员创建 Workbox 运行时的自定义包，而不是使用 \u003Ccode\u003EimportScripts()\u003C\u002Fcode\u003E 来加载 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdevelopers.google.com\u002Fweb\u002Ftools\u002Fworkbox\u002Fmodules\u002Fworkbox-sw\"\u003E\u003Ccode\u003Eworkbox-sw\u003C\u002Fcode\u003E\u003C\u002Fa\u003E（运行时）。Workbox 团队将继续支持 \u003Cem\u003Eworkbox-sw\u003C\u002Fem\u003E，但现在推荐使用新技术。 事实上，构建工具的默认设置已切换为推荐的方法。\u003C\u002Fp\u003E\n\u003Cp\u003E这个数字的增加有可能是因为使用了旧版本 Workbox 库，例如 \u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fgithub.com\u002Ffacebook\u002Fcreate-react-app\u002Fblob\u002Fv3.4.4\u002Fpackages\u002Freact-scripts\u002Fpackage.json#L82\"\u003E\u003Ccode\u003Ecreate-react-app\u003C\u002Fcode\u003E 版本 3\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"web-推送通知-push-notifications\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#web-推送通知-push-notifications\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EWeb 推送通知 Push Notifications\u003C\u002Fh3\u003E\n\u003Cp\u003E通知是与用户重新互动的有效方式。这也是我们对特定平台应用的期望之一。通知是提供及时、相关和准确信息的完美方式，它由 Web Push API 提供支持。\u003C\u002Fp\u003E\n\u003Ch4 id=\"web-推送通知-push-notifications-接受率\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#web-推送通知-push-notifications-接受率\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003EWeb 推送通知 Push Notifications 接受率\u003C\u002Fh4\u003E\n\u003Cp\u003E对于开发人员或用户来说，Web 通知的实现并不一定顺畅，但这确实是非常有用的工具。 对于日历通知、订阅更新或者游戏来说，用户可以选择何时打开它们是很重要的。\u003C\u002Fp\u003E\n\u003Cp\u003E值得重申的是，通知必须\u003Ca hreflang=\"en\" href=\"https:\u002F\u002Fdevelopers.google.com\u002Fweb\u002Ffundamentals\u002Fpush-notifications\"\u003E及时、准确和相关\u003C\u002Fa\u003E才有意义。在显示请求权限提示的那一刻，用户需要了解服务的价值。开发人员有机会分享给用户获得特定通知的好处，在用户显示浏览器权限对话框之前将其加入通知。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"\u002Fimages\u002Fblog\u002F20221003\u002F25.png\" alt=\"通知接受率\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E图 25：通知接受率\u003C\u002Fp\u003E\n\u003Cp\u003E随着通知支持的增长和不同平台用户体验的改进，在接受通知方面没有重大变化。自 2020 年初以来，桌面端接受率约为 6%，移动设备接受率为 20%。\u003C\u002Fp\u003E\n\u003Cp\u003E桌面端和移动端的通知接受率趋于一致，忽略通知是趋势。 “忽略”的总和从 2020 年 2 月的 48% 一路上升到 2022 年 6 月的 70%。对于移动平台，从 2020 年 2 月的 1.88% 上升到今年 6 月的惊人的 34%。 通知疲劳，加上越来越多的安全、隐私和高级功能提示是部分原因，相关的工作正在开展来解决这个问题，并在不同平台上提供更好的统一的用户体验。\u003C\u002Fp\u003E\n\u003Ch2 id=\"总结\"\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#总结\"\u003E\u003Cspan class=\"icon icon-link\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E总结\u003C\u002Fh2\u003E\n\u003Cp\u003E2022 年对于 PWA 来说是辉煌的一年。允许将可安装 Web 应用与桌面平台集成的功能不断增加，推动了该技术被业内知名厂商采用。在过去的一年里，协议处理（protocol handlers）、窗口控件覆盖（window controls overlay）、在系统登录时运行等高级功能已将 PWA 定位为应用开发的关键技术。虽然令人鼓舞，但这并不代表整个 Web 平台。与 2021 年的数据相比，Service Worker 的使用百分比下降到一半左右，但使用 PWA 技术构建的大型应用正在兴起。\u003C\u002Fp\u003E\n\u003Cp\u003EManifest 文件继续处于健康状态，桌面端的比例比去年略有增加，达到了 95%。这些文件的正确性非常好，但它们的完整性仍有诸多不足。目前，只有大约 0.8% 的网站符合可安装的条件。许多高级功能，如 \u003Ccode\u003Eshortcuts\u003C\u002Fcode\u003E  和 \u003Ccode\u003Eshare_target\u003C\u002Fcode\u003E 开始受到关注，出现在大约 5% 的 PWA 中。\u003Ccode\u003Eprotocol_handlers\u003C\u002Fcode\u003E 和窗口控件覆盖等功能太新，暂时无法对数据产生影响。今年还提供了许多 Fugu API 的初始快照。\u003C\u002Fp\u003E\n\u003Cp\u003E可以理解，通知疲劳仍然是一个因素，但用户也会请求并欣赏合法的通知用例。浏览器厂商正在尝试侵入性较低的权限请求，而 Web 推送通知的优势在于提供跨平台的一致体验，从而为用户提供他们所请求的与设备无关的轻推。\u003C\u002Fp\u003E\n\u003Cp\u003E我们希望这些信息能为您的 PWA 之旅提供一些启示，并帮助开发人员了解在 API 适配方面的技术趋势。\u003C\u002Fp\u003E\n\u003Cul\u003E\u003Cli\u003E阅读原文: \u003Ca href=\"https:\u002F\u002Falmanac.httparchive.org\u002Fzh-CN\u002F2022\u002Fpwa\" rel=\"nofollow\"\u003Ehttps:\u002F\u002Falmanac.httparchive.org\u002Fzh-CN\u002F2022\u002Fpwa\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E",meta:{title:"HTTP Archive 的 2022 Web 年鉴: PWA ",date:d,updated:d,categories:[e,"WebAlmanac"],coverImage:"\u002Fimages\u002Fblog\u002F20221003\u002Fhero_lg.avif",coverWidth:16,coverHeight:9,excerpt:"来自 HTTP Archive 的 Web 年鉴的任务是将 HTTP Archive 的原始统计数据和趋势与 Web 社区的专业知识结合起来。Web 年鉴是一个关于 Web 状态的年度综合报告，由真实的数据和可信的网络专家支持。2022 年版由 22 个章节组成，涵盖了页面内容、用户体验、发布和分发的各个方面。9 月下旬，由 Diego Gonzalez 编写了 PWA 章节，涵盖了 Service Worker 的使用和功能、Web Manifest 应用清单、Lighthouse 洞察、Service Worker 库等内容。",author:e,authorTitle:a,authorCompany:"中国 PWA 开发者日",authorImg:"\u002Fimages\u002Fpeople\u002F120\u002Fpwadev.png",author2:a,authorTitle2:a,authorCompany2:a,authorImg2:a,author3:a,authorTitle3:a,authorCompany3:a,authorImg3:a,slug:"web-almanac-by-http-archive-pwa"}},uses:{dependencies:b,params:["post"],parent:b,url:b}}]}}("",void 0,"data","2022-10-03","PWA"))