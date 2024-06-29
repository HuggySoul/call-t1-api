export const signUp = async (userData) => {
	const response = await fetch("http://193.19.100.32:7000/api/sign-up", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		// Преобразование данных в JSON строку
		body: JSON.stringify(userData),
	});

	if (!response.ok) throw new Error(`Sign-up error: ${response.status}`);

	return await response.json();
};
