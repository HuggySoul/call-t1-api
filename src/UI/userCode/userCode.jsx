import st from "./userCode.module.css";
import { useEffect, useReducer, useState } from "react";
import { SubmitBtn } from "../submitBtn/submitBtn";
import { getCode } from "../../api/getCode";
import { setStatus } from "../../api/setStatus";
import { codeReducer } from "./codeReducer";
import { CodeInput } from "../codeInput/codeInput";
export const UserCode = () => {
	const [isEmailIncorrect, setIsEmailIncorrect] = useState(false);
	const [codeState, codeDispatch] = useReducer(codeReducer, {
		email: "",
		code: "",
		token: "",
	});

	useEffect(() => {
		if (codeState.code) createToken(codeState.email, codeState.code);
	}, [codeState.code]);

	const setCodeState = (actionType, newValue, newValueName) => {
		codeDispatch({
			type: actionType,
			[newValueName]: newValue,
		});
	};

	const checkEmail = (email) => {
		const re = /^\w+(-?\w+)*@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
		const isCorrect = re.test(email);

		setIsEmailIncorrect(!isCorrect);
		return !isCorrect;
	};

	const createToken = (email, code) => {
		setCodeState("setToken", btoa(`${email}:${code}`), "token");
	};

	return (
		<fieldset className={st.getCode}>
			<legend>
				<h2>Установить статус записи</h2>
			</legend>
			<input
				onChange={(e) => setCodeState("setEmail", e.target.value, "email")}
				type="text"
				placeholder="Ваш email"
				className={st.getCode_emailInput}
			/>
			{isEmailIncorrect && <p className={st.attentionTxt}>*Некорректный формат email</p>}
			<SubmitBtn
				callApi={getCode}
				postData={codeState.email}
				btnTxt={"Получить код"}
				returnCondition={() => checkEmail(codeState.email)}
				setPostAnswer={(ans) => setCodeState("setCode", ans, "code")}
			/>
			<CodeInput labelTxt={"Ваш код: "} defaultValue={codeState.code} />
			<CodeInput labelTxt={"Ваш токен: "} defaultValue={codeState.token} />
			<SubmitBtn
				callApi={setStatus}
				postData={codeState.token}
				btnTxt={"Установить статус записи"}
				returnCondition={() => !Boolean(codeState.token)}
			/>
		</fieldset>
	);
};
