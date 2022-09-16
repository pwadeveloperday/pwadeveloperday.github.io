<script>
	import MainNav from './MainNav.svelte'
	import { siteTitle, siteURL } from '$lib/config'
</script>

<footer>
	<div>
		<p class="copy">&copy;{new Date().getFullYear()} <a href="https://{siteURL}">{siteTitle}</a></p>
		<p class="cp"><a href="/api/rss.xml" rel="external">RSS</a> <a href="https://{siteURL}/code-of-conduct" title="行为准则">行为准则</a> <a href="https://{siteURL}/privacy" title="隐私条款">隐私条款</a> <a href="https://{siteURL}/about" title="关于中国 PWA 开发者日">关于</a></p>
	</div>
</footer>