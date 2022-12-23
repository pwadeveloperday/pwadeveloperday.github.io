<script>
  import { siteTitle } from "$lib/config";
  import PostsListHome from "$lib/components/PostsListHome.svelte";
  export let data;
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<!-- {@html data.ReadMe} -->
<div class="intro">
  渐进式 Web 应用 (Progressive Web Apps, PWA) 基于开放的 Web 标准开发，通过现代
  Web API
  构建和增强，具有可发现、可安装、可链接、可离线、可同步及可推送等等一系列特点，更具备一套代码即可触达任何人、任何设备的优势并确保安全性。<br
  /><br />为加速推动渐进式 Web 应用 (Progressive Web Apps, PWA)
  在中国的发展，微软、英特尔与谷歌携手举办中国 PWA 开发者日活动。
  该活动邀请一众业界大咖围绕 PWA 展开分享，探讨最新技术进展，以及 PWA
  生态的实践与落地。
</div>
<div class="t2022">
  <div id="agenda">
    <a href="/blog/opening">
      <div id="opening" class="touch">
        <div class="topic">
          <h1 class="title">开幕致辞</h1>
          <div class="details">
            <div class="avatar" id="icon_qi" />
            <div class="description">
              <div class="nametitle">张琦</div>
              <div class="team">资深技术总监</div>
              <div class="team">英特尔 SATG Web 平台工程</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="/blog/open-speech">
      <div id="open-speech" class="touch">
        <div class="topic">
          <h1 class="title">开场演讲 PWAs &amp; MiniApps</h1>
          <div class="details">
            <div class="avatar" id="icon_alex" />
            <div class="description">
              <div class="nametitle">Alex Russell</div>
              <div class="team">PWA 之父 全球合伙人产品经理</div>
              <div class="team">微软 Edge 浏览器团队</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="/blog/take-full-advantage-of-a-pwa">
      <div id="take-full-advantage-of-a-pwa" class="touch">
        <div class="topic">
          <h1 class="title">Take Full Advantage of a PWA</h1>
          <div class="details">
            <div class="avatar" id="icon_cecilia" />
            <div class="description">
              <div class="nametitle">丛慧君</div>
              <div class="team">高级解决方案顾问</div>
              <div class="team">Google Chrome &amp; Web Platform</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="/blog/revisiting-the-real-world-significance-of-pwa-technology">
      <div
        id="revisiting-the-real-world-significance-of-pwa-technology"
        class="touch"
      >
        <div class="topic">
          <h1 class="title">重温 PWA 技术的现实意义</h1>
          <div class="details">
            <div class="avatar" id="icon_edwin" />
            <div class="description">
              <div class="nametitle">宋青见</div>
              <div class="team">首席产品经理</div>
              <div class="team">微软 Edge · 开发者生态</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="/blog/the-world-of-pwa-tools-from-starter-to-builder">
      <div id="the-world-of-pwa-tools-from-starter-to-builder" class="touch">
        <div class="topic">
          <h1 class="title">The World of PWA Tools</h1>
          <div class="details">
            <div class="avatar" id="icon_pwabuilder" />
            <div class="description">
              <div class="nametitle">
                Justin Willis &amp; Amrutha Srinivasan
              </div>
              <div class="team">软件工程师</div>
              <div class="team">微软 PWABuilder</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="/blog/running-mini-apps-in-pwa">
      <div id="running-mini-apps-in-pwa" class="touch">
        <div class="topic">
          <h1 class="title">跑在 PWA 里的 '小程序'</h1>
          <div class="details">
            <div class="avatar" id="icon_tianjian" />
            <div class="description">
              <div class="nametitle">朱天健</div>
              <div class="team">前端技术专家</div>
              <div class="team">京东零售集团凹凸实验室</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="/blog/tencent-documentation-pwa-development-practice">
      <div id="tencent-documentation-pwa-development-practice" class="touch">
        <div class="topic">
          <h1 class="title">腾讯文档 PWA 开发实践</h1>
          <div class="details">
            <div class="avatar" id="icon_harry" />
            <div class="description">
              <div class="nametitle">彭伟宏</div>
              <div class="team">前端工程师</div>
              <div class="team">腾讯 PCG 平台与内容事业群</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a
      href="/blog/the-exploration-and-practice-of-alibaba.com-pwa-to-reduce-costs-and-increase-efficiency"
    >
      <div
        id="the-exploration-and-practice-of-alibaba.com-pwa-to-reduce-costs-and-increase-efficiency"
        class="touch"
      >
        <div class="topic">
          <h1 class="title">PWA 降本增效的探索与实践</h1>
          <div class="details">
            <div class="avatar" id="icon_yuanhong" />
            <div class="description">
              <div class="nametitle">陈远宏</div>
              <div class="team">前端工程师</div>
              <div class="team">阿里巴巴 ICBU 技术部</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="/blog/the-journey-of-web-nativeization">
      <div id="the-journey-of-web-nativeization" class="touch">
        <div class="topic">
          <h1 class="title">网页的原生化之旅</h1>
          <div class="details">
            <div class="avatar" id="icon_haoyu" />
            <div class="description">
              <div class="nametitle">王浩宇</div>
              <div class="team">前端工程师</div>
              <div class="team">抖音集团巨量千川</div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="/blog/explore-new-web-capabilities-for-your-pwa">
      <div id="explore-new-web-capabilities-for-your-pwa" class="touch">
        <div class="topic">
          <h1 class="title">新兴 Web 技术助力 PWA</h1>
          <div class="details">
            <div class="avatar" id="icon_belem" />
            <div class="description">
              <div class="nametitle">张敏</div>
              <div class="team">软件技术经理</div>
              <div class="team">英特尔 SATG Web 平台工程</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

<PostsListHome posts={data.posts} />

<div class="pwalist">
  <ul class="logogrid">
    <li class="logogrid__item">
      <a href="https://www.toutiao.com/" title="今日头条 PWA">
        <img
          src="https://lf9-static.bytednsdoc.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/icon_tt_192.png"
          class="logogrid__img"
          alt="今日头条 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a href="https://m.weibo.cn/beta" title="新浪微博 PWA">
        <img
          src="https://h5.sinaimg.cn/m/weibo-lite/icon-default-192.png"
          class="logogrid__img"
          alt="新浪微博 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a
        href="https://dashi.163.com/login/?from=desktop"
        title="网易邮箱大师 PWA"
      >
        <img
          src="https://dashi.163.com/logo.png"
          class="logogrid__img"
          alt="网易邮箱大师 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a href="https://www.kdocs.cn/latest?from=docs" title="金山文档 PWA">
        <img
          src="https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-180.png"
          class="logogrid__img"
          alt="金山文档 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a
        href="https://www.office.com/?ui=zh-CN&rs=CN&auth=1"
        title="Microsoft 365 PWA"
      >
        <img
          src="https://res.cdn.office.net/officehub/versionless/webmanifestimages/desktop_192.png"
          class="logogrid__img"
          alt="Microsoft 365 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a href="https://mp.toutiao.com/profile_v4/index" title="头条号 PWA">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgNzcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lkIjlubblvaLnirY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i57uI56i/IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMummlumhtS1jb3B5LTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzcwLjAwMDAwMCwgLTE3LjAwMDAwMCkiIGZpbGw9IiNGRjM3M0MiPgogICAgICAgICAgICA8ZyBpZD0idGFiIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3MC4wMDAwMDAsIDE3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ny42Mjg5MzUsNy4yNjg4MDUgTDcxLjEyODgsNy4yNjg4MDUgTDcxLjEyODgsNS4xMyBMNTcuNjI4OTM1LDUuMTMgTDU3LjYyODkzNSw3LjI2ODgwNSBaIE01My42Njg5OCwxMC42ODg4OTUgTDUzLjY2ODk4LDEuNzEwMDQ1IEw3NS4wODg3NTUsMS43MTAwNDUgTDc1LjA4ODc1NSwxMC42ODg4OTUgTDUzLjY2ODk4LDEwLjY4ODg5NSBaIE01Mi4yMjg5NjIsMTIuNzEzOTA4NSBMNzYuNTI4ODI3LDEyLjcxMzkwODUgTDc2LjUyODgyNywxNS44NjM5OTg1IEw1OS45MjA1ODcsMTUuODYzOTk4NSBMNTkuMzYxMjgyLDE3Ljg4OTEzMzUgTDc1LjYyODc4MiwxNy44ODkxMzM1IEw3NS42Mjg3ODIsMTkuNzI2NzUzNSBMNzQuMDA4NzgyLDI3LjAwMDAxMzUgTDU3LjYyODk2MiwyNy4wMDAwMTM1IEw1Ny42Mjg5NjIsMjMuNTgwMDU4NSBMNzAuODEwNjMyLDIzLjU4MDA1ODUgTDcxLjMxNjM0MiwyMS4zMDkwODg1IEw1NC45Mjg5NjIsMjEuMzA5MDg4NSBMNTQuOTI4OTYyLDE5LjU5OTA0MzUgTDU1Ljk2MDc2NywxNS44NjM5OTg1IEw1Mi4yMjg5NjIsMTUuODYzOTk4NSBMNTIuMjI4OTYyLDEyLjcxMzkwODUgWiBNMTAuODUzNzMsMi45NDM1NjcgTDEwLjg1MzczLDYuNzYwNjkyIEwyLjI0NjY3LDUuNTI3MDYyIEwyLjI0NjY3LDEuNzA5OTM3IEwxMC44NTM3MywyLjk0MzU2NyBaIE0xMC44NTM3Myw5LjQwMzA2MDUgTDEwLjg1MzczLDEzLjIyMDE4NTUgTDIuMjQ2NjcsMTEuOTg2NTU1NSBMMi4yNDY2Nyw4LjE2OTQzMDUgTDEwLjg1MzczLDkuNDAzMDYwNSBaIE0zNi4yNDExNDE1LDEzLjkxODk0NTUgTDQwLjIwMTIzMTUsMTMuOTE4OTQ1NSBMNDAuMjAxMjMxNSwxNS44NjQwMjU1IEw1MC4zOTk5NDE1LDE1Ljg2NDAyNTUgTDUwLjM5OTk0MTUsMTkuMjgzOTgwNSBMNDAuMjAxMjMxNSwxOS4yODM5ODA1IEw0MC4yMDEyMzE1LDI2Ljk5OTc3MDUgTDM2LjI0MTE0MTUsMjYuOTk5NzcwNSBMMzYuMjQxMTQxNSwxOS4yODM5ODA1IEwyNi4xMDAyMTE1LDE5LjI4Mzk4MDUgTDI2LjEwMDIxMTUsMTUuODY0MDI1NSBMMzYuMjQxMTQxNSwxNS44NjQwMjU1IEwzNi4yNDExNDE1LDEzLjkxODk0NTUgWiBNMTcuNTcyNTQ1LDAuODU1MDIyNSBDMTcuNDc0MTMsOC4xMzkzNTI1IDE3LjMzOTEzLDEyLjQ5NjM0MjUgMTYuMjgyNjIsMTUuODY0MDUyNSBMMjQuMjk5ODY1LDE1Ljg2NDA1MjUgTDI0LjI5OTg2NSwxOS4yODQwMDc1IEwxNC42OTI3MjUsMTkuMjg0MDA3NSBDMTMuMTU4NTg1LDIxLjY4MDEyMjUgMTAuNzcyNzMsMjMuODg4MzE3NSA3LjAzNTEyLDI2Ljk5OTc5NzUgTDAuOTM5MDYsMjYuOTk5Nzk3NSBDMS4yMDE3NywyNi43ODQ4Nzc1IDEuNDU4OTQ1LDI2LjU3NDY4MjUgMS43MDc2MTUsMjYuMzcxNTA3NSBDNS40NjM4NTUsMjMuMzAxNzQyNSA4LjA0NTE5LDIxLjE5MTY5MjUgOS43OTU4NywxOS4yODQwMDc1IEwtMi4zMDkyNjM4OWUtMTQsMTkuMjg0MDA3NSBMLTIuMzA5MjYzODllLTE0LDE1Ljg2NDA1MjUgTDEyLjE0MTA5LDE1Ljg2NDA1MjUgQzEzLjQ5NzE2NSwxMi44Mjk3OTI1IDEzLjYwMTc5LDguNDk4MzE3NSAxMy43MDIzNjUsMC44NTUwMjI1IEwxNy41NzI1NDUsMC44NTUwMjI1IFogTTE1Ljg3MzcwNSwyMC45OTQwNzk1IEwyMC41NDMyMiwyMC45OTQwNzk1IEwyNC4yOTYwODUsMjYuOTk5Njg5NSBMMTkuNjI2NTcsMjYuOTk5Njg5NSBMMTUuODczNzA1LDIwLjk5NDA3OTUgWiBNNDEuOTc3MzU5LDIwLjk5NDA3OTUgTDQ2LjY0Njg3NCwyMC45OTQwNzk1IEw1MC4zOTk3MzksMjYuOTk5Njg5NSBMNDUuNzMwMjI0LDI2Ljk5OTY4OTUgTDQxLjk3NzM1OSwyMC45OTQwNzk1IFogTTI2LjA5OTgzMzUsMjYuOTk5NzMgTDI5Ljg1MjU2MzUsMjAuOTk0MTIgTDM0LjUyMjA3ODUsMjAuOTk0MTIgTDMwLjc2OTM0ODUsMjYuOTk5NzMgTDI2LjA5OTgzMzUsMjYuOTk5NzMgWiBNMzIuMzUzNzM1NSw1LjEzIEMzMy43MDI3OTA1LDYuMDA4MzEgMzUuNTQ4Mzc1NSw3LjAyNTgwNSAzOC4yNzQ0MzA1LDguMDQwODcgQzQxLjAwNTM0NTUsNy4wMjQ3MjUgNDIuODI3ODQ1NSw2LjAwNzIzIDQ0LjExNzc3MDUsNS4xMyBMMzIuMzUzNzM1NSw1LjEzIFogTTUwLjM5OTcyNTUsMTQuNzQ2MzIgQzQ1LjE5NTA3MDUsMTMuODk1MjggNDEuMjMwNzk1NSwxMi44NzQ4MTUgMzguMTYyMjQ1NSwxMS44MjQzOCBDMzUuMDU1NzYwNSwxMi45MDQxMSAzMS4xMjE0NTU1LDEzLjkyNDk4IDI2LjA5OTg2MDUsMTQuNzQ0MDI1IEwyNi4wOTk4NjA1LDExLjA5NTUxNSBDMjguNzMzNzEwNSwxMC42NTIzMSAzMS4wMTQ1MzU1LDEwLjE2ODIgMzIuOTk3MjgwNSw5LjY2MzMgQzMwLjg0MjI3NTUsOC41NTczOCAyOS40NTQ4ODA1LDcuNTI3NzM1IDI4LjQwNTY2MDUsNi43NDg5MiBDMjguMjQ2MjI1NSw2LjYzMDUyNSAyNi43Nzc0MjU1LDUuNDg2MTMgMjYuNzc3NDI1NSw1LjQ4NjEzIEwzMC40NTA3NzU1LC0xLjU5ODcyMTE2ZS0xNCBMMzQuMTExODQwNSwxLjcxMDA0NSBMNDkuMDQ5ODYwNSwxLjcxMDA0NSBMNDkuMDQ5ODYwNSw1LjY4ODc2NSBDNDcuOTQyNzI1NSw2LjY4MTI4NSA0Ni4yNzIxMDA1LDguMTE1OTMgNDMuMzY0ODc1NSw5LjYyMDM3IEM0NS4zNzkzNDU1LDEwLjE0MjAxIDQ3LjcwNDA0NTUsMTAuNjQxNTEgNTAuMzk5NzI1NSwxMS4wOTcxMzUgTDUwLjM5OTcyNTUsMTQuNzQ2MzIgWiIgaWQ9IuWQiOW5tuW9oueKtiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
          class="logogrid__img"
          alt="头条号 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a
        href="https://h5.m.taobao.com/trip/home-pwa/index.html"
        title="飞猪旅行 PWA"
      >
        <img
          src="https://h5.m.taobao.com/trip/home-pwa/img/icon_192.png"
          class="logogrid__img"
          alt="飞猪旅行 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a href="https://pwa.sspai.com/" title="少数派 PWA">
        <img
          src="https://pwa.sspai.com/icons/512.png"
          class="logogrid__img"
          alt="少数派 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a
        href="https://www.yuque.com/login?goto=https%3A%2F%2Fwww.yuque.com%2Fdashboard"
        title="雨雀 PWA"
      >
        <img
          src="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*sHlLTI41kIoAAAAAAAAAAAAADvuFAQ/original"
          class="logogrid__img"
          alt="雨雀 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a href="https://www.kujiale.com/" title="酷家乐 PWA">
        <img
          src="https://qhstaticssl.kujiale.com/newt/100312/image/png/1591705870021/192x192.png"
          class="logogrid__img"
          alt="酷家乐 PWA"
        />
      </a>
    </li>
  </ul>
</div>
