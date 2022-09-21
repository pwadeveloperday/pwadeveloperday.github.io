<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
export let data

const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories, author, authorTitle, authorCompany, authorImg, author2, authorTitle2, authorCompany2, authorImg2, author3, authorTitle3, authorCompany3, authorImg3 } = data.meta



</script>


<svelte:head>
	<title>{title} | 中国 PWA 开发者日 | China PWA Developer Day</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<div class="page">
	<article class="post">
		<h1>{ title }</h1>
		
		<div class="meta">
			<b>发布日期:</b> {date}	<b>最近更新:</b> {updated}
		</div>

		{#if coverImage}
		<img
		class="cover-image"
		src="{coverImage}"
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
		/>
		{/if}

		{@html data.PostContent}

		<div class="author">
			{#if author}
				<div class="authorlist">
					<div class="authorimage"><img src="{authorImg}" alt="{author}"></div>
					<div class="authordes">
						<div class="name">{author}</div>
						<div class="title">{authorTitle}</div>
						<div class="company">{authorCompany}</div>
					</div>
				</div>
			{/if}
			{#if author2}
			<div class="authorlist">
				<div class="authorimage"><img src="{authorImg2}" alt="{author2}"></div>
				<div class="authordes">
					<div class="name">{author2}</div>
					<div class="title">{authorTitle2}</div>
					<div class="company">{authorCompany2}</div>
				</div>
			</div>
			{/if}
			{#if author3}
				<div class="authorlist">
					<div class="authorimage"><img src="{authorImg3}" alt="{author3}"></div>
					<div class="authordes">
						<div class="name">{author3}</div>
						<div class="title">{authorTitle3}</div>
						<div class="company">{authorCompany3}</div>
					</div>
				</div>
			{/if}
		</div>

		{#if categories}
			<aside class="post-footer">
				<!--<h2>Tag: </h2>-->
				<ul>
					{#each categories as category}
						<li>
							<a href="/blog/category/{category}/">
								{ category }
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		{/if}
	</article> 
</div>