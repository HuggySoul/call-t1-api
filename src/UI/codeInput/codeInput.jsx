import st from "./codeInput.module.css";
import { useEffect, useState } from "react";

export const CodeInput = ({ receivedValue, labelTxt }) => {
	const [inputType, setInputType] = useState("password");
	const [value, setValue] = useState("");
	useEffect(() => {
		setValue(receivedValue);
	}, [receivedValue]);

	const changeInputType = () => {
		inputType === "password" ? setInputType("text") : setInputType("password");
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<>
			<label>
				<p>{labelTxt}</p>
			</label>
			<div className={st.showCode}>
				<input
					type={inputType}
					value={value}
					onChange={handleChange}
					className={st.codeInput}
					readOnly
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
