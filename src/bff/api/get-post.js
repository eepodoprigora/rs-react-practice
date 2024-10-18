import { transformPost } from '../transformers';

export const getPost = async (postId) => {
	try {
		return fetch(`http://localhost:3005/posts/${postId}`)
			.then((res) => {
				if (res.ok) {
					return res;
				}
				const error =
					res.status === 404 ? 'Страница не существует' : 'Что-то пошло не так';

				return Promise.reject(error);
			})
			.then((loadedPost) => loadedPost.json())
			.then((loadedPost) => loadedPost && transformPost(loadedPost));
	} catch (error) {
		console.error('Error fetching user:', error);
		return null;
	}
};
