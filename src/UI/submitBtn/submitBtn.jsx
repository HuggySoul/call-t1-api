import st from "./submitBtn.module.css";
import { Loading } from "../loading/loading";
import { useState } from "react";

export const SubmitBtn = ({
	callApi,
	returnCondition,
	postData,
	btnTxt,
	setPostAnswer = () => {},
}) => {
	//sendStatus = "none" | "success" | "error"| "loading";
	const [sendStatus, setSendStatus] = useState("none");

	const submitForm = () => {
		if (returnCondition()) return;
		setSendStatus("loading");
		callApi(postData)
			.then((res) => {
				setPostAnswer(res);
				setSendStatus("success");
			})
			.catch((err) => {
				setSendStatus("error");
				console.log(err);
			});
	};
	return (
		<div className={st.btn}>
			<button onClick={() => submitForm()} className={st.btn_submit}>
				<p>{btnTxt}</p>
			</button>
			{sendStatus === "loading" && <Loading />}
			{sendStatus === "success" && (
				<img className={st.success_img} src="./success.svg" alt="Успешная операция" />
			)}
			{sendStatus === "error" && (
				<img className={st.success_img} src="./unsuccess.svg" alt="Неуспешная операция" />
			)}
		</div>
	);
};
