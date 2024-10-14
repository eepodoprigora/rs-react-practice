export const deleteUser = (userId) => {
	return fetch(`http://localhost:3005/users/${userId}`, {
		method: 'DELETE',
	}).catch((error) => console.error('Error adding user:', error));
};
