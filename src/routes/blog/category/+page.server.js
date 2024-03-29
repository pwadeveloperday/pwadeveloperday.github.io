export const load = async ({ url }) => {
	const res = await fetch(`${url.origin}/api/categories.json`)
	let posts = await res.json()

	let uniqueCategories = {}

	posts.forEach(post => {
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

	return { 
		uniqueCategories: sortedUniqueCategories
	}
}
