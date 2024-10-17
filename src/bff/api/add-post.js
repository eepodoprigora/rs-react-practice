import { generateDate } from '../utils';

export const addPost = ({ imageUrl, title, content }) => {
	return fetch('http://localhost:3005/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			published_at: generateDate(),
			content,
		}),
	})
		.then((createdPost) => createdPost.json())
		.catch((error) => console.error('Error adding post:', error));
};
