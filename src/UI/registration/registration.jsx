import st from "./registration.module.css";
import { RoleSelector } from "../roleSelector/roleSelector";
import { useReducer } from "react";
import { signUp } from "../../api/signUp";
import { Loading } from "../loading/loading";
import { formReducer } from "./formReducer";
import { userInfoReducer } from "./userInfoReducer";

export const Registration = () => {
	const [userInfo, userDispatch] = useReducer(userInfoReducer, {
		first_name: "",
		last_name: "",
		email: "",
		role: "",
	});

	const [formState, formStateDispatch] = useReducer(formReducer, {
		isFieldEmpty: false,
		isEmailIncorrect: false,
		isSendingStart: false,
		isSended: false,
		isLoading: false,
	});

	const setUserInfo = (e, actionType, newValueName) => {
		userDispatch({
			type: actionType,
			[newValueName]: e.target.value,
		});
	};

	const setFormState = (actionType, newValue, newValueName) => {
		formStateDispatch({
			type: actionType,
			[newValueName]: newValue,
		});
	};

	const isFieldEmpty = (userInfo) => {
		const isFieldsFilled =
			userInfo.first_name && userInfo.last_name && userInfo.email && userInfo.role;
		setFormState("setIsFieldEmpty", !isFieldsFilled, "isFieldEmpty");
		return !isFieldsFilled;
	};

	const isEmailCorrect = (email) => {
		const re = /^\w+(-?\w+)*@?[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
		setFormState("setIsEmailIncorrect", !re.test(email), "isEmailIncorrect");
		return re.test(email);
	};

	const submitForm = () => {
		if (isFieldEmpty(userInfo) || !isEmailCorrect(userInfo.email)) return;

		setFormState("setIsSendingStart", true, "isSendingStart");
		setFormState("setIsLoading", true, "isLoading");
		signUp(userInfo)
			.then((res) => {
				setFormState("setIsSended", true, "isSended");
				setFormState("setIsLoading", false, "isLoading");
				setFormState("setIsSendingStart", false, "isSendingStart");

				console.log("success", res);
			})
			.catch((err) => {
				setFormState("setIsLoading", false, "isLoading");
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
				{formState.isEmailIncorrect && (
					<p className={st.attentionTxt}>*Некорректный формат email</p>
				)}
			</fieldset>
			<RoleSelector setRole={setUserInfo} />
			{formState.isFieldEmpty && <p className={st.attentionTxt}>*Заполните все поля</p>}
			<div className={st.btn}>
				<button onClick={() => submitForm()} className={st.btn_submit}>
					<p>Записаться</p>
				</button>
				{formState.isLoading && <Loading />}
				{formState.isSended && (
					<img className={st.success_img} src="./success.svg" alt="Успешная операция" />
				)}
				{formState.isSendingStart && !formState.isSended && (
					<img
						className={st.success_img}
						src="./unsuccess.svg"
						alt="Неуспешная операция"
					/>
				)}
			</div>
		</fieldset>
	);
};
