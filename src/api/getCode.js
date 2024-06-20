export const getCode = async (email) => {
	const url = `http://193.19.100.32:7000/api/get-code?email=${email}`;
	const response = await fetch(url);

	if (!response.ok) throw new Error(`Error getting code! ${response.statusText}`);

	return await response.json();
};
