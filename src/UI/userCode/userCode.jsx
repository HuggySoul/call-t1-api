import st from "./userCode.module.css";

export const UserCode = () => {
	return (
		<fieldset className={st.getCode}>
			<legend>
				<h2>Установить статус записи</h2>
			</legend>
			<input type="text" placeholder="Ваш email" className={st.getCode_emailInput} />
			<button className={st.getCode_submit}>
				<p>Получить код</p>
			</button>
			<div className={st.showCode}>
				<label htmlFor="code">
					<p>Ваш код:</p>
				</label>
				<input
					id="code"
					type="password"
					className={`${st.getCode_emailInput} ${st.getCode_codeInput}`}
				/>
			</div>
			<div className={st.showCode}>
				<label htmlFor="code">
					<p>Ваш токен:</p>
				</label>
				<input
					id="code"
					type="password"
					className={`${st.getCode_emailInput} ${st.getCode_codeInput}`}
				/>
			</div>
			<button className={st.getCode_submit}>
				<p>Установить статус записи</p>
			</button>
		</fieldset>
	);
};
