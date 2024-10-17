export const deletePost = async (postId) => {
	return fetch(`http://localhost:3005/posts/${postId}`, {
		method: 'DELETE',
	}).catch((error) => console.error('Error deleting post:', error));
};
