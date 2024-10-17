import { setPostData } from './set-post-data';

export const savePostAsync = (requestServer, newPostData) => (dispatch) =>
	requestServer('savePost', newPostData).then((postData) =>
		dispatch(setPostData(postData.res)),
	);
