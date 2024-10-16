export const deleteSession = async (sessionId) => {
	return fetch(`http://localhost:3005/sessions/${sessionId}`, {
		method: 'DELETE',
	}).catch((error) => console.error('Error deleting session:', error));
};
