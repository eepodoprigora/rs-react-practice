import { setPostData } from './set-post-data';

export const loadPostAsync = (requestServer, postId) => (dispatch) =>
	requestServer('fetchPost', postId).then((postData) => {
		if (postData.res) {
			console.log(postData);
			dispatch(setPostData(postData.res));
		}
		return postData;
	});
