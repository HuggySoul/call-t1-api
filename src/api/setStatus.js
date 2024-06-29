export const setStatus = async (token) => {
	const response = await fetch("http://193.19.100.32:7000/api/set-status", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		// Преобразование данных в JSON строку
		body: JSON.stringify({
			token: token,
			status: "increased",
		}),
	});

	if (!response.ok) throw new Error(`Sign-up error: ${response.status}`);

	return await response.json();
};
