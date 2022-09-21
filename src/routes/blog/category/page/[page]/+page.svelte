<!-- Renders posts listed by category -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let data
  const { page, totalPosts, posts } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog Tags - {page}</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>


<div class="page">
{#if posts.length}
	<h1 class="tag"><span>{lowerBound}-{upperBound} / {totalPosts}</span></h1>

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} />
{:else}
	<h1>嗯...</h1>

	<p>没有博客文章</p>

	<a href="/blog">返回 Blog</a>
{/if}
</div>