import st from "./roleSelector.module.css";
import { getRoles } from "../../api/getRoles";
import { useEffect, useState } from "react";
import { Loading } from "../loading/loading";

export const RoleSelector = ({ setRole }) => {
	const [roles, setRoles] = useState([]);

	useEffect(() => {
		getRoles()
			.then((res) => {
				setRoles(res.roles);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<fieldset className={st.roles}>
			<legend className={st.roles_legend}>
				<h2>Выберете свою роль: </h2>
			</legend>
			{roles.length > 0 ? (
				roles.map((role, id) => {
					return (
						<div key={id} className={st.roles_role}>
							<label htmlFor={id}>
								<div className={st.roles_roleCard}>
									<input
										onChange={(e) => setRole(e.target.value, "setRole", "newRole")}
										type="radio"
										id={id}
										name="role"
										value={role}
									/>
									<p>{role}</p>
									<img
										src="./active-radio-btn.svg"
										alt="role selected"
										className={st.roles_roleImage}
									/>
								</div>
							</label>
						</div>
					);
				})
			) : (
				<Loading />
			)}
		</fieldset>
	);
};
