import st from "./registration.module.css";
import { RoleSelector } from "../roleSelector/roleSelector";
import { useReducer } from "react";
import { signUp } from "../../api/signUp";
import { formReducer } from "./formReducer";
import { userInfoReducer } from "./userInfoReducer";
import { SubmitBtn } from "../submitBtn/submitBtn";
import { TxtInput } from "../txtInput/txtInput";

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
	});

	const setUserInfo = (newValue, actionType, newValueName) => {
		userDispatch({
			type: actionType,
			[newValueName]: newValue,
		});
	};

	const setFormState = (newValue, actionType, newValueName) => {
		formStateDispatch({
			type: actionType,
			[newValueName]: newValue,
		});
	};

	const isFieldEmpty = (userInfo) => {
		const isFieldsEmpty =
			!userInfo.first_name || !userInfo.last_name || !userInfo.email || !userInfo.role;
		setFormState(isFieldsEmpty, "setIsFieldEmpty", "isFieldEmpty");
		return isFieldsEmpty;
	};

	const isEmailInCorrect = (email) => {
		const re = /^\w+(-?\w+)*@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
		setFormState(!re.test(email), "setIsEmailIncorrect", "isEmailIncorrect");
		return !re.test(email);
	};

	const submitBunCondition = () => {
		return isFieldEmpty(userInfo) || isEmailInCorrect(userInfo.email);
	};

	return (
		<fieldset className={st.registration}>
			<legend>
				<h2>Записаться в таблицу кандидатов</h2>
			</legend>
			<fieldset className={st.inputBlock}>
				<TxtInput
					labelTxt={"Ваше имя"}
					setter={setUserInfo}
					actionType={"setFirstName"}
					newValueName={"newFirstName"}
				/>
				<TxtInput
					labelTxt={"Ваша фамилия"}
					setter={setUserInfo}
					actionType={"setLastName"}
					newValueName={"newLastName"}
				/>
				<TxtInput
					labelTxt={"Ваш email"}
					setter={setUserInfo}
					actionType={"setEmail"}
					newValueName={"newEmail"}
				/>
				{formState.isEmailIncorrect && (
					<p className={st.attentionTxt}>*Некорректный формат email</p>
				)}
			</fieldset>
			<RoleSelector setRole={setUserInfo} />
			{formState.isFieldEmpty && <p className={st.attentionTxt}>*Заполните все поля</p>}
			<SubmitBtn
				callApi={signUp}
				postData={userInfo}
				btnTxt={"Записаться"}
				returnCondition={submitBunCondition}
			/>
		</fieldset>
	);
};
