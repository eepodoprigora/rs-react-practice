import { transformPost } from '../transformers';

export const getPosts = async (searchPhrase, page, limit) => {
	const searchQueryMain = 'http://localhost:3005/posts';
	// Загружаем все статьи без фильтрации
	return fetch(searchQueryMain)
		.then((response) => response.json())
		.then((loadedPosts) => {
			// Фильтруем статьи по заголовку
			const filteredPosts = loadedPosts.filter((post) =>
				post.title.toLowerCase().includes(searchPhrase.toLowerCase()),
			);

			// Пагинация: выбираем нужные статьи на основе текущей страницы и лимита
			const startIndex = (page - 1) * limit;
			const paginatedPosts = filteredPosts.slice(startIndex, startIndex + limit);

			return {
				posts: paginatedPosts.map(transformPost),
				lastPage: Math.ceil(filteredPosts.length / limit),
			};
		});
};
