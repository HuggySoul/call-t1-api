import st from "./App.module.css";
import { Registration } from "./UI/registration/registration";
import { UserCode } from "./UI/userCode/userCode";
function App() {
	return (
		<div className={st.form}>
			<Registration />
			<UserCode />
		</div>
	);
}

export default App;
