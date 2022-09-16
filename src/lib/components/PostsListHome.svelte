<script>
	export let posts = []
</script>


<ul class="posts-list home">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<h1>
						{post.title}
					</h1>
				</a>
			</article>

			<p>{post.excerpt}</p>
		</li>
	{/each}
</ul>