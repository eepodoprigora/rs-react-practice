export const getUser = async (loginToFind) => {
	try {
		const response = await fetch(`http://localhost:3005/users?login=${loginToFind}`);
		const users = await response.json();
		return users[0];
	} catch (error) {
		console.error('Error fetching user:', error);
		return null;
	}
};
