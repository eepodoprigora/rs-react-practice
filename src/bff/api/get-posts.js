import { transformPost } from '../transformers';

export const getPosts = async (page, limit) => {
	return fetch(`http://localhost:3005/posts?_page=${page}&_per_page=${limit}`)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => {
			return {
				posts: loadedPosts.data && loadedPosts.data.map(transformPost),
				lastPage: loadedPosts.last,
			};
		});
};
