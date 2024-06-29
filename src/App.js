import st from "./App.module.css";
import { Registration } from "./UI/registration/registration";
import { UserCode } from "./UI/userCode/userCode";
function App() {
	return (
		<form className={st.form}>
			<Registration />
			<UserCode />
		</form>
	);
}

export default App;
