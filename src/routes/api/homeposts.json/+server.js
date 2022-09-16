import fetchPosts from '$lib/assets/js/fetchPosts'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const options = {
    limit: 4
  }

  const { posts } = await fetchPosts(options)
  return json(posts)
}