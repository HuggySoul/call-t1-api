export const codeReducer = (state, action) => {
	switch (action.type) {
		case "setEmail": {
			return {
				email: action.email,
				code: state.code,
				token: state.token,
			};
		}
		case "setCode": {
			return {
				code: action.code,
				email: state.email,
				token: state.token,
			};
		}
		case "setToken": {
			return {
				email: state.email,
				code: state.code,
				token: action.token,
			};
		}
		default: {
			throw new Error(`Unknown action: ${action.type}`);
		}
	}
};
