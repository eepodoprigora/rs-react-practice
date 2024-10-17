import { setPostData } from './set-post-data';

export const addCommentAsync = (requestServer, userId, postId, content) => (dispatch) => {
	requestServer('addPostComment', userId, postId, content)
		.then((postData) => {
			if (postData && postData.res) {
				dispatch(setPostData(postData.res));
			} else {
				console.error('Ошибка: неверный формат ответа');
			}
		})
		.catch((error) => {
			console.error('Ошибка при добавлении комментария:', error);
		});
};