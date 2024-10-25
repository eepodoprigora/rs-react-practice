import { request } from '../utils';
import { addComment } from './add-comment';

export const addCommentAsync = (postId, content) => (dispatch) => {
	request(`/posts/${postId}/comments`, 'POST', { content })
		.then((comment) => {
			if (comment && comment.data) {
				dispatch(addComment(comment.data));
			} else {
				console.error('Ошибка: неверный формат ответа');
			}
		})
		.catch((error) => {
			console.error('Ошибка при добавлении комментария:', error);
		});
};
