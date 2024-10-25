import { request } from '../utils';

export const removePostAsync = (id) => () => {
	return request(`/posts/${id}`, 'DELETE').catch((error) => {
		console.error('Ошибка при удалении поста:', error);
	});
};
