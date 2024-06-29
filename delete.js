// const getAPI = async () => {
// 	fetch("http://193.19.100.32:7000/api/get-code?email=artem_fedchenko_2017@mail.ru", {
// 		method: "GET",
// 	})
// 		.then((res) => res.json())
// 		.then((res) => console.log(res));
// };

// getAPI();

const Token = "17a9bdd3c8d735f5879d38c17ecbbce8";
const param = `artem_fedchenko_2017@mail.ru:${Token}`;

function encodeToBase64(email, code) {
	return btoa(`${email}:${code}`);
}
// Unit-Tests
function testEncodeToBase64_1() {
	const email = "test@example.com";
	const code = "17a9bdd3c8d735f5879d38";
	const expected = "dGVzdEBleGFtcGxlLmNvbToxN2E5YmRkM2M4ZDczNWY1ODc5ZDM4";
	const result = encodeToBase64(email, code);

	if (result !== expected) {
		console.log(`Test 1 failed: ${result} !== ${expected}`);
		return;
	}

	console.log(`Test 1 passed: ${result} === ${expected}`);
}

testEncodeToBase64_1();

// URL сервера и порт
const serverUrl = "http://193.19.100.32";
const port = 7000;
const endpoint = "/api/set-status";

// Полный URL для запроса
const url = `${serverUrl}:${port}${endpoint}`;

// Данные для отправки
const data = {
	last_name: "Федченко",
	first_name: "Артём",
	email: "artem_fedchenko_2017@mail.ru",
	role: "Разработчик JS/React",
};

const emailToken = {
	token:
		"YXJ0ZW1fZmVkY2hlbmtvXzIwMTdAbWFpbC5ydToxN2E5YmRkM2M4ZDczNWY1ODc5ZDM4YzE3ZWNiYmNlOA==",
	status: "increased",
};

// Асинхронная функция для выполнения POST-запроса
async function signUp() {
	try {
		const response = await fetch(url, {
			method: "POST", // Метод POST
			headers: {
				"Content-Type": "application/json", // Установка заголовка Content-Type
			},
			body: JSON.stringify(emailToken), // Преобразование данных в JSON строку
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json(); // Преобразование ответа в JSON
		console.log(result); // Вывод результата в консоль
	} catch (error) {
		console.error("Ошибка при выполнении запроса:", error);
	}
}
// Вызов функции для выполнения запроса
signUp();
