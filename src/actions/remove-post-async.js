export const removePostAsync = (requestServer, id) => () => {
	return requestServer('removePost', id).catch((error) => {
		console.error('Ошибка при удалении поста:', error);
	});
};
