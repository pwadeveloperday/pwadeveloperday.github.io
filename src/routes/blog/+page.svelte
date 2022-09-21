<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>


<svelte:head>
	<title>Blog | 中国 PWA 开发者日 | China PWA Developer Day</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<div class="page">
	<h1 class="tag"><span>Blog</span></h1>
	<PostsList posts={data.posts} />

	<Pagination currentPage={1} totalPosts={data.total} />
</div>