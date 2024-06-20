import st from "./roleSelector.module.css";
import { getRoles } from "../../api/getRoles";
import { useEffect, useState } from "react";

export const RoleSelector = () => {
	const [roles, setRoles] = useState([]);

	useEffect(() => {
		getRoles()
			.then((res) => {
				setRoles(res.roles);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className={st.roleSelector}>
			<fieldset>
				<legend>Выберете роль</legend>
				{roles.map((role, id) => {
					return (
						<div>
							<input type="radio" id={id} name="role" value={role} />
							<label for={id}>{role}</label>
						</div>
					);
				})}
			</fieldset>
		</div>
	);
};
