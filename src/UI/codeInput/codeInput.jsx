import st from "./codeInput.module.css";
import { useState } from "react";

export const CodeInput = ({ defaultValue, labelTxt }) => {
	const [inputType, setInputType] = useState("password");

	const changeInputType = () => {
		inputType === "password" ? setInputType("text") : setInputType("password");
	};

	return (
		<>
			<label htmlFor="code">
				<p>{labelTxt}</p>
			</label>
			<div className={st.showCode}>
				<input
					id="code"
					type={inputType}
					defaultValue={defaultValue}
					className={st.codeInput}
				/>
				<button onClick={changeInputType} className={st.showCodeBtn}>
					{inputType === "password" ? (
						<img
							className={st.hideEye}
							src="./eye-password-show.svg"
							alt="Показать пароль"
						/>
					) : (
						<img
							className={st.hideEye}
							src="./eye-password-hide.svg"
							alt="Скрыть пароль"
						/>
					)}
				</button>
			</div>
		</>
	);
};
