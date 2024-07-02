import st from "./txtInput.module.css";

export const TxtInput = ({ labelTxt, setter, actionType, newValueName }) => {
	return (
		<div className={st.inputGroup}>
			<input
				onChange={(e) => setter(e.target.value, actionType, newValueName)}
				type="text"
				className={st.inputGroup_input}
				required
				maxLength={100}
			/>
			<label className={st.inputGroup_placeholder}>
				<p className={st.inputGroup_txt}>{labelTxt}</p>
			</label>
		</div>
	);
};
