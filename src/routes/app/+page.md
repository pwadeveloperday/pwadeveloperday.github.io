<svelte:head>

<title>PWA 应用 | 中国 PWA 开发者日 | China PWA Developer Day</title>
</svelte:head>

<div class="page">
<h1>PWA 应用</h1>

<main id="apps">
		<div id="douyin"><a href="https://douyin.com" title="抖音"><span>抖音</span></a></div>
    <div id="toutiao"><a href="https://www.toutiao.com/" title="今日头条"><span>今日头条</span></a></div>
		<div id="dongchedi"><a href="https://www.dongchedi.com/" title="懂车帝"><span>懂车帝</span></a></div>
		<div id="ixigua"><a href="https://www.ixigua.com/" title="西瓜视频"><span>西瓜视频</span></a></div>
    <div id="weibo"><a href="https://m.weibo.cn/beta" title="新浪微博"><span>新浪微博</span></a></div>
    <div id="qq"><a href="https://xw.qq.com/" title="腾讯网"><span>腾讯网</span></a></div>
    <div id="office"><a href="https://www.office.com/?ui=zh-CN&rs=CN&auth=1" title="Microsoft 365"><span>Microsoft 365</span></a></div>
    <div id="kdocs"><a href="https://www.kdocs.cn/latest?from=docs" title="金山文档"><span>金山文档</span></a></div>
    <div id="dashi"><a href="https://dashi.163.com/login/?from=desktop" title="网易邮箱大师"><span>网易邮箱大师</span></a></div>
    <div id="sspai"><a href="https://pwa.sspai.com/" title="少数派"><span>少数派</span></a></div>
    <div id="toutiaomp"><a href="https://mp.toutiao.com/profile_v4/index" title="头条号"><span>头条号</span></a></div>
    <div id="feizhu"><a href="https://h5.m.taobao.com/trip/home-pwa/index.html" title="飞猪旅行"><span>飞猪旅行</span></a></div>
    <div id="kujiale"><a href="https://www.kujiale.com/" title="酷家乐"><span>酷家乐</span></a></div>
    <div id="tiktok"><a href="https://www.tiktok.com/?lang=zh" title="Tiktok"><span>Tiktok</span></a></div>
    <div id="iqiyi"><a href="https://www.iq.com/?lang=zh_cn" title="iQiyi"><span>iQiyi</span></a></div>

  <div id="yuque"><a href="https://www.yuque.com/login?goto=https%3A%2F%2Fwww.yuque.com%2Fdashboard" title="雨雀"><span>雨雀</span></a></div>
</main>

</div>

<style>
	#douyin {
		background-image: url('https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/pwa_v3/192_192.png');
	}

	#dongchedi {
		background-image: url('https://p3.dcarimg.com/img/tos-cn-i-dcdx/7da0e85f6f8c4081822b39e248626712~192x192.png');
	}

	#ixigua {
		background-image: url('https://lf3-static.bytednsdoc.com/obj/eden-cn/hbnpe_lm_wpn/ljhwZthlaukjlkulzlp/xigua_pc/logo/192.png');
	}

	#weibo {
		background-image: url('https://h5.sinaimg.cn/m/weibo-lite/icon-default-192.png');
	}

	#toutiao {
		background-image: url('https://lf9-static.bytednsdoc.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/icon_tt_192.png');
	}

	#toutiaomp {
		background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgNzcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lkIjlubblvaLnirY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i57uI56i/IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMummlumhtS1jb3B5LTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzcwLjAwMDAwMCwgLTE3LjAwMDAwMCkiIGZpbGw9IiNGRjM3M0MiPgogICAgICAgICAgICA8ZyBpZD0idGFiIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3MC4wMDAwMDAsIDE3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ny42Mjg5MzUsNy4yNjg4MDUgTDcxLjEyODgsNy4yNjg4MDUgTDcxLjEyODgsNS4xMyBMNTcuNjI4OTM1LDUuMTMgTDU3LjYyODkzNSw3LjI2ODgwNSBaIE01My42Njg5OCwxMC42ODg4OTUgTDUzLjY2ODk4LDEuNzEwMDQ1IEw3NS4wODg3NTUsMS43MTAwNDUgTDc1LjA4ODc1NSwxMC42ODg4OTUgTDUzLjY2ODk4LDEwLjY4ODg5NSBaIE01Mi4yMjg5NjIsMTIuNzEzOTA4NSBMNzYuNTI4ODI3LDEyLjcxMzkwODUgTDc2LjUyODgyNywxNS44NjM5OTg1IEw1OS45MjA1ODcsMTUuODYzOTk4NSBMNTkuMzYxMjgyLDE3Ljg4OTEzMzUgTDc1LjYyODc4MiwxNy44ODkxMzM1IEw3NS42Mjg3ODIsMTkuNzI2NzUzNSBMNzQuMDA4NzgyLDI3LjAwMDAxMzUgTDU3LjYyODk2MiwyNy4wMDAwMTM1IEw1Ny42Mjg5NjIsMjMuNTgwMDU4NSBMNzAuODEwNjMyLDIzLjU4MDA1ODUgTDcxLjMxNjM0MiwyMS4zMDkwODg1IEw1NC45Mjg5NjIsMjEuMzA5MDg4NSBMNTQuOTI4OTYyLDE5LjU5OTA0MzUgTDU1Ljk2MDc2NywxNS44NjM5OTg1IEw1Mi4yMjg5NjIsMTUuODYzOTk4NSBMNTIuMjI4OTYyLDEyLjcxMzkwODUgWiBNMTAuODUzNzMsMi45NDM1NjcgTDEwLjg1MzczLDYuNzYwNjkyIEwyLjI0NjY3LDUuNTI3MDYyIEwyLjI0NjY3LDEuNzA5OTM3IEwxMC44NTM3MywyLjk0MzU2NyBaIE0xMC44NTM3Myw5LjQwMzA2MDUgTDEwLjg1MzczLDEzLjIyMDE4NTUgTDIuMjQ2NjcsMTEuOTg2NTU1NSBMMi4yNDY2Nyw4LjE2OTQzMDUgTDEwLjg1MzczLDkuNDAzMDYwNSBaIE0zNi4yNDExNDE1LDEzLjkxODk0NTUgTDQwLjIwMTIzMTUsMTMuOTE4OTQ1NSBMNDAuMjAxMjMxNSwxNS44NjQwMjU1IEw1MC4zOTk5NDE1LDE1Ljg2NDAyNTUgTDUwLjM5OTk0MTUsMTkuMjgzOTgwNSBMNDAuMjAxMjMxNSwxOS4yODM5ODA1IEw0MC4yMDEyMzE1LDI2Ljk5OTc3MDUgTDM2LjI0MTE0MTUsMjYuOTk5NzcwNSBMMzYuMjQxMTQxNSwxOS4yODM5ODA1IEwyNi4xMDAyMTE1LDE5LjI4Mzk4MDUgTDI2LjEwMDIxMTUsMTUuODY0MDI1NSBMMzYuMjQxMTQxNSwxNS44NjQwMjU1IEwzNi4yNDExNDE1LDEzLjkxODk0NTUgWiBNMTcuNTcyNTQ1LDAuODU1MDIyNSBDMTcuNDc0MTMsOC4xMzkzNTI1IDE3LjMzOTEzLDEyLjQ5NjM0MjUgMTYuMjgyNjIsMTUuODY0MDUyNSBMMjQuMjk5ODY1LDE1Ljg2NDA1MjUgTDI0LjI5OTg2NSwxOS4yODQwMDc1IEwxNC42OTI3MjUsMTkuMjg0MDA3NSBDMTMuMTU4NTg1LDIxLjY4MDEyMjUgMTAuNzcyNzMsMjMuODg4MzE3NSA3LjAzNTEyLDI2Ljk5OTc5NzUgTDAuOTM5MDYsMjYuOTk5Nzk3NSBDMS4yMDE3NywyNi43ODQ4Nzc1IDEuNDU4OTQ1LDI2LjU3NDY4MjUgMS43MDc2MTUsMjYuMzcxNTA3NSBDNS40NjM4NTUsMjMuMzAxNzQyNSA4LjA0NTE5LDIxLjE5MTY5MjUgOS43OTU4NywxOS4yODQwMDc1IEwtMi4zMDkyNjM4OWUtMTQsMTkuMjg0MDA3NSBMLTIuMzA5MjYzODllLTE0LDE1Ljg2NDA1MjUgTDEyLjE0MTA5LDE1Ljg2NDA1MjUgQzEzLjQ5NzE2NSwxMi44Mjk3OTI1IDEzLjYwMTc5LDguNDk4MzE3NSAxMy43MDIzNjUsMC44NTUwMjI1IEwxNy41NzI1NDUsMC44NTUwMjI1IFogTTE1Ljg3MzcwNSwyMC45OTQwNzk1IEwyMC41NDMyMiwyMC45OTQwNzk1IEwyNC4yOTYwODUsMjYuOTk5Njg5NSBMMTkuNjI2NTcsMjYuOTk5Njg5NSBMMTUuODczNzA1LDIwLjk5NDA3OTUgWiBNNDEuOTc3MzU5LDIwLjk5NDA3OTUgTDQ2LjY0Njg3NCwyMC45OTQwNzk1IEw1MC4zOTk3MzksMjYuOTk5Njg5NSBMNDUuNzMwMjI0LDI2Ljk5OTY4OTUgTDQxLjk3NzM1OSwyMC45OTQwNzk1IFogTTI2LjA5OTgzMzUsMjYuOTk5NzMgTDI5Ljg1MjU2MzUsMjAuOTk0MTIgTDM0LjUyMjA3ODUsMjAuOTk0MTIgTDMwLjc2OTM0ODUsMjYuOTk5NzMgTDI2LjA5OTgzMzUsMjYuOTk5NzMgWiBNMzIuMzUzNzM1NSw1LjEzIEMzMy43MDI3OTA1LDYuMDA4MzEgMzUuNTQ4Mzc1NSw3LjAyNTgwNSAzOC4yNzQ0MzA1LDguMDQwODcgQzQxLjAwNTM0NTUsNy4wMjQ3MjUgNDIuODI3ODQ1NSw2LjAwNzIzIDQ0LjExNzc3MDUsNS4xMyBMMzIuMzUzNzM1NSw1LjEzIFogTTUwLjM5OTcyNTUsMTQuNzQ2MzIgQzQ1LjE5NTA3MDUsMTMuODk1MjggNDEuMjMwNzk1NSwxMi44NzQ4MTUgMzguMTYyMjQ1NSwxMS44MjQzOCBDMzUuMDU1NzYwNSwxMi45MDQxMSAzMS4xMjE0NTU1LDEzLjkyNDk4IDI2LjA5OTg2MDUsMTQuNzQ0MDI1IEwyNi4wOTk4NjA1LDExLjA5NTUxNSBDMjguNzMzNzEwNSwxMC42NTIzMSAzMS4wMTQ1MzU1LDEwLjE2ODIgMzIuOTk3MjgwNSw5LjY2MzMgQzMwLjg0MjI3NTUsOC41NTczOCAyOS40NTQ4ODA1LDcuNTI3NzM1IDI4LjQwNTY2MDUsNi43NDg5MiBDMjguMjQ2MjI1NSw2LjYzMDUyNSAyNi43Nzc0MjU1LDUuNDg2MTMgMjYuNzc3NDI1NSw1LjQ4NjEzIEwzMC40NTA3NzU1LC0xLjU5ODcyMTE2ZS0xNCBMMzQuMTExODQwNSwxLjcxMDA0NSBMNDkuMDQ5ODYwNSwxLjcxMDA0NSBMNDkuMDQ5ODYwNSw1LjY4ODc2NSBDNDcuOTQyNzI1NSw2LjY4MTI4NSA0Ni4yNzIxMDA1LDguMTE1OTMgNDMuMzY0ODc1NSw5LjYyMDM3IEM0NS4zNzkzNDU1LDEwLjE0MjAxIDQ3LjcwNDA0NTUsMTAuNjQxNTEgNTAuMzk5NzI1NSwxMS4wOTcxMzUgTDUwLjM5OTcyNTUsMTQuNzQ2MzIgWiIgaWQ9IuWQiOW5tuW9oueKtiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
	}

	#feizhu {
		background-image: url('https://h5.m.taobao.com/trip/home-pwa/img/icon_192.png');
	}

	#kujiale {
		background-image: url('https://qhstaticssl.kujiale.com/newt/100312/image/png/1591705870021/192x192.png');
	}

	#qq {
		background-image: url('https://mat1.gtimg.com/qqcdn/xw/20211215/images/192.png');
	}

	#office {
		background-image: url('https://res.cdn.office.net/officehub/versionless/webmanifestimages/desktop_192.png');
	}

	#kdocs {
		background-image: url('https://qn.cache.wpscdn.cn/kdocs/mobile/touch/apple-180.png');
	}

	#dashi {
		background-image: url('https://dashi.163.com/logo.png');
	}

	#sspai {
		background-image: url('https://pwa.sspai.com/icons/512.png');
	}

	#tiktok {
		background-image: url('/images/app/tiktok.png');
	}

	#iqiyi {
		background-image: url('/images/app/iqiyi.svg');
	}

	#yuque {
		background-image: url('https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*sHlLTI41kIoAAAAAAAAAAAAADvuFAQ/original');
	}
</style>
