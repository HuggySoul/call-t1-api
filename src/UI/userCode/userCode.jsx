import st from "./userCode.module.css";
import { useEffect, useReducer, useState } from "react";
import { SubmitBtn } from "../submitBtn/submitBtn";
import { getCode } from "../../api/getCode";
import { setStatus } from "../../api/setStatus";
import { codeReducer } from "./codeReducer";
import { CodeInput } from "../codeInput/codeInput";
import { TxtInput } from "../txtInput/txtInput";
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

	const setCodeState = (newValue, actionType, newValueName) => {
		codeDispatch({
			type: actionType,
			[newValueName]: newValue,
		});
	};

	const checkEmail = (email) => {
		const re = /^\w+(-?\w+)*@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
		const isCorrect = re.test(email);
		console.log(email);
		setIsEmailIncorrect(!isCorrect);
		return !isCorrect;
	};

	const createToken = (email, code) => {
		setCodeState(btoa(`${email}:${code}`), "setToken", "token");
	};

	return (
		<fieldset className={st.getCode}>
			<legend>
				<h2>Установить статус записи</h2>
			</legend>
			<TxtInput
				labelTxt={"Ваш email"}
				setter={setCodeState}
				actionType={"setEmail"}
				newValueName={"email"}
			/>
			{isEmailIncorrect && <p className={st.attentionTxt}>*Некорректный формат email</p>}
			<SubmitBtn
				callApi={getCode}
				postData={codeState.email}
				btnTxt={"Получить код"}
				returnCondition={() => checkEmail(codeState.email)}
				setPostAnswer={(ans) => setCodeState(ans, "setCode", "code")}
			/>
			<CodeInput labelTxt={"Ваш код: "} receivedValue={codeState.code} />
			<CodeInput labelTxt={"Ваш токен: "} receivedValue={codeState.token} />
			<SubmitBtn
				callApi={setStatus}
				postData={codeState.token}
				btnTxt={"Установить статус записи"}
				returnCondition={() => !Boolean(codeState.token)}
			/>
		</fieldset>
	);
};
