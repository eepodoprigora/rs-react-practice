import { setPostData } from './set-post-data';

export const removeCommentAsync = (requestServer, postId, id) => (dispatch) => {
	requestServer('removePostComment', postId, id)
		.then((postData) => {
			if (postData && postData.res) {
				dispatch(setPostData(postData.res));
			} else {
				console.error('Ошибка: неверный формат ответа');
			}
		})
		.catch((error) => {
			console.error('Ошибка при удалении комментария:', error);
		});
};
