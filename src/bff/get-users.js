export const getUsers = async () => {
	const response = await fetch('http://localhost:3005/users');
	const users = await response.json();
	return users;
};
