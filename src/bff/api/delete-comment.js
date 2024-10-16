export const deleteComment = async (commentId) => {
	return fetch(`http://localhost:3005/comments/${commentId}`, {
		method: 'DELETE',
	}).catch((error) => console.error('Error deleting comment:', error));
};
