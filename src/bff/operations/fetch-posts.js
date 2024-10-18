import { getComments, getPosts } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (page, limit) => {
	const [{ posts, lastPage }, comments] = await Promise.all([
		getPosts(page, limit),
		getComments(),
	]);

	console.log(posts, lastPage, 'posts, lastPage');

	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
		lastPage: lastPage,
	};
};
