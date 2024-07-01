export const formReducer = (state, action) => {
	switch (action.type) {
		case "setIsFieldEmpty": {
			return {
				isFieldEmpty: action.isFieldEmpty,
				isEmailIncorrect: state.isEmailIncorrect,
			};
		}
		case "setIsEmailIncorrect": {
			return {
				isFieldEmpty: state.isFieldEmpty,
				isEmailIncorrect: action.isEmailIncorrect,
			};
		}
		default: {
			throw new Error(`Unknown action: ${action.type}`);
		}
	}
};
