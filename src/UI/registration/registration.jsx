import st from "./registration.module.css";
import { RoleSelector } from "../roleSelector/roleSelector";
import { useReducer, useState } from "react";
import { userReducer } from "./userReducer";
import { signUp } from "../../api/signUp";
import { Loading } from "../loading/loading";

export const Registration = () => {
	const [userInfo, userDispatch] = useReducer(userReducer, {
		first_name: "",
		last_name: "",
		email: "",
		role: "",
	});
	const [correctEmail, setCorrectEmail] = useState(false);
	const [fieldEmpty, setFieldEmpty] = useState(false);
	const [isSended, setIsSended] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const setUserInfo = (e, actionType, newValueName) => {
		userDispatch({
			type: actionType,
			[newValueName]: e.target.value,
		});
	};
	const isFieldEmpty = (userInfo) => {
		const isFieldsFilled =
			userInfo.first_name && userInfo.last_name && userInfo.email && userInfo.role;
		setFieldEmpty(!isFieldsFilled);
		return !isFieldsFilled;
	};

	const isEmailCorrect = (email) => {
		const re = /^\w*@?[a-zA-Z_]*?\.[a-zA-Z]{2,3}$/;
		setCorrectEmail(!re.test(email));
		return re.test(email);
	};

	const submitForm = () => {
		if (isFieldEmpty(userInfo) || !isEmailCorrect(userInfo.email)) return;

		setIsLoading(true);
		signUp(userInfo)
			.then((res) => {
				setIsLoading(false);
				setIsSended(true);
				console.log("success", res);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsSended(false);
				console.log(err);
			});
	};

	return (
		<fieldset className={st.registration}>
			<legend>
				<h2>Записаться в таблицу кандидатов</h2>
			</legend>
			<fieldset className={st.inputBlock}>
				<input
					onChange={(e) => setUserInfo(e, "setFirstName", "newFirstName")}
					type="text"
					placeholder="Ваше имя"
					className={st.inputBlock_userInput}
				/>
				<input
					onChange={(e) => setUserInfo(e, "setLastName", "newLastName")}
					type="text"
					placeholder="Ваша фамилия"
					className={st.inputBlock_userInput}
				/>
				<input
					onChange={(e) => setUserInfo(e, "setEmail", "newEmail")}
					type="text"
					placeholder="Ваш email"
					className={st.inputBlock_userInput}
				/>
				{correctEmail && <p className={st.attentionTxt}>*Некорректный формат email</p>}
			</fieldset>
			<RoleSelector setRole={setUserInfo} />
			{fieldEmpty && <p className={st.attentionTxt}>*Заполните все поля</p>}
			<div className={st.btn}>
				<button onClick={() => submitForm()} className={st.btn_submit}>
					<p>Записаться</p>
				</button>
				{isLoading && <Loading />}
				{
					isSended && (
						<img className={st.success_img} src="./success.svg" alt="Успешная операция" />
					)
					// 	: (
					// 	<img
					// 		className={st.success_img}
					// 		src="./unsuccess.svg"
					// 		alt="Неуспешная операция"
					// 	/>
					// )
				}
			</div>
		</fieldset>
	);
};
