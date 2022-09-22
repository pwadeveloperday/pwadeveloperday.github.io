export const load = async ({ url }) => {
	const postRes = await fetch(`${url.origin}/api/posts.json`)
	const posts = await postRes.json()

	const totalRes = await fetch(`${url.origin}/api/posts/count`)
	const total = await totalRes.json()

	const res = await fetch(`${url.origin}/api/categories.json`)
	let posts2 = await res.json()

	let uniqueCategories = {}

	posts2.forEach(post => {
		post.categories.forEach(category => {
			if (uniqueCategories.hasOwnProperty(category)) {
				uniqueCategories[category].count += 1
			} else {
				uniqueCategories[category] = {
					title: category,
					count: 1
				}
			}
		})
	})

	const sortedUniqueCategories = 
		Object.values(uniqueCategories)
			.sort((a, b) => a.title > b.title)

	return { posts, total, uniqueCategories: sortedUniqueCategories }
}