<!-- Renders posts listed by category -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription, postsPerPage } from '$lib/config'

	export let data
	const { page, category, totalPosts, posts } = data 

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog 标签 {category} - {page}</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>

<div class="page">
	<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
	{#if posts && posts.length}
		<h1 class="tag"><a href="/blog/category">Tag</a> <span>{category} {lowerBound}-{upperBound} / {totalPosts}</span></h1>
		<PostsList {posts} />

		<Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page" />
	{:else}
		<h1>嗯...</h1>

		<p>没有文章</p>

		<a href="/blog">返回 Blog</a>
	{/if}
</div>