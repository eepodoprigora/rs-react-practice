import { transformPost } from '../transformers';

export const getPost = async (postId) => {
	try {
		return fetch(`http://localhost:3005/posts/${postId}`)
			.then((loadedPost) => loadedPost.json())
			.then((loadedPost) => loadedPost && transformPost(loadedPost));
	} catch (error) {
		console.error('Error fetching user:', error);
		return null;
	}
};
