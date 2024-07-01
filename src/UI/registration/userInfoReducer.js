export const userInfoReducer = (state, action) => {
	switch (action.type) {
		case "setRole": {
			return {
				last_name: state.last_name,
				first_name: state.first_name,
				email: state.email,
				role: action.newRole,
			};
		}
		case "setFirstName": {
			return {
				last_name: state.last_name,
				first_name: action.newFirstName,
				email: state.email,
				role: state.role,
			};
		}
		case "setLastName": {
			return {
				last_name: action.newLastName,
				first_name: state.first_name,
				email: state.email,
				role: state.role,
			};
		}
		case "setEmail": {
			return {
				last_name: state.last_name,
				first_name: state.first_name,
				email: action.newEmail,
				role: state.role,
			};
		}
		default: {
			throw new Error(`Unknown action: ${action.type}`);
		}
	}
};
