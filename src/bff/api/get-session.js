import { transformSession } from '../transformers';

export const getSession = async (hash) => {
	try {
		return fetch(`http://localhost:3005/sessions?hash=${hash}`)
			.then((loadedSession) => loadedSession.json())
			.then(([loadedSession]) => loadedSession && transformSession(loadedSession));
	} catch (error) {
		console.error('Error fetching user:', error);
		return null;
	}
};
