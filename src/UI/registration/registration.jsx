import st from "./registration.module.css";
import { RoleSelector } from "../roleSelector/roleSelector";

export const Registration = () => {
	return (
		<fieldset className={st.registration}>
			<legend>
				<h2>Записаться в таблицу кандидатов</h2>
			</legend>
			<fieldset className={st.inputBlock}>
				<input type="text" placeholder="Ваше имя" className={st.inputBlock_userInput} />
				<input
					type="text"
					placeholder="Ваша фамилия"
					className={st.inputBlock_userInput}
				/>
				<input type="text" placeholder="Ваш email" className={st.inputBlock_userInput} />
			</fieldset>
			<RoleSelector />
			<div className={st.btn}>
				<button className={st.btn_submit}>
					<p>Записаться</p>
				</button>
			</div>
		</fieldset>
	);
};
