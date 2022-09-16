<!-- This file handles any /blog/page/x route for pagination -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage, siteDescription } from '$lib/config'

	export let data
	const { page, totalPosts, posts } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog - {page}</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts.length}
	<h1 class="tag"><span>Blog: {lowerBound}-{upperBound} / {totalPosts}</span></h1>

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} />
{:else}
	<h1>嗯...</h1>

	<p>没有文章</p>

	<a href="/blog">返回 Blog</a>
{/if}