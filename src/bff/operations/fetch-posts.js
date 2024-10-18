import { getComments, getPosts } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (searchPhrase, page, limit) => {
	const [{ posts, lastPage }, comments] = await Promise.all([
		getPosts(searchPhrase, page, limit),
		getComments(),
	]);

	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
		lastPage: lastPage,
	};
};
