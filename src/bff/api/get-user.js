import { transformUser } from '../transformers';

export const getUser = async (loginToFind) => {
	try {
		return fetch(`http://localhost:3005/users?login=${loginToFind}`)
			.then((loadedUser) => loadedUser.json())
			.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
	} catch (error) {
		console.error('Error fetching user:', error);
		return null;
	}
};
