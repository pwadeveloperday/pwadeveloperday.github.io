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
      <a href="https://douyin.com" title="抖音 PWA">
        <img
          src="https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/pwa_v3/192_192.png"
          class="logogrid__img"
          alt="抖音 PWA"
        />
      </a>
    </li>
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
      <a href="https://www.dongchedi.com/" title="懂车帝 PWA">
        <img
          src="https://p3.dcarimg.com/img/tos-cn-i-dcdx/7da0e85f6f8c4081822b39e248626712~192x192.png"
          class="logogrid__img"
          alt="懂车帝 PWA"
        />
      </a>
    </li>
    <li class="logogrid__item">
      <a href="https://www.ixigua.com/" title="西瓜视频 PWA">
        <img
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/hbnpe_lm_wpn/ljhwZthlaukjlkulzlp/xigua_pc/logo/192.png"
          class="logogrid__img"
          alt="西瓜视频 PWA"
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
