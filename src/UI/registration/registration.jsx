import st from "./registration.module.css";
import { RoleSelector } from "../roleSelector/roleSelector";
import { useReducer, useState } from "react";
import { userReducer } from "./userReducer";

export const Registration = () => {
	const [userInfo, userDispatch] = useReducer(userReducer, {
		first_name: "",
		last_name: "",
		email: "",
		role: "",
	});
	const [isCorrectEmail, SetIsCorrectEmail] = useState(false);

	const setUserInfo = (e, actionType, newValueName) => {
		userDispatch({
			type: actionType,
			[newValueName]: e.target.value,
		});
	};

	const setEmailAttention = () => {};

	console.log(userInfo);
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
			</fieldset>
			<RoleSelector setRole={setUserInfo} />
			<div className={st.btn}>
				<button className={st.btn_submit}>
					<p>Записаться</p>
				</button>
			</div>
		</fieldset>
	);
};
