export const formReducer = (state, action) => {
	switch (action.type) {
		case "setIsFieldEmpty": {
			return {
				isFieldEmpty: action.isFieldEmpty,
				isEmailIncorrect: state.isEmailIncorrect,
				isSended: state.isSended,
				isLoading: state.isLoading,
				isSendingStart: state.isSendingStart,
			};
		}
		case "setIsEmailIncorrect": {
			return {
				isFieldEmpty: state.isFieldEmpty,
				isEmailIncorrect: action.isEmailIncorrect,
				isSended: state.isSended,
				isLoading: state.isLoading,
				isSendingStart: state.isSendingStart,
			};
		}
		case "setIsSendingStart": {
			return {
				isFieldEmpty: state.isFieldEmpty,
				isEmailIncorrect: state.isEmailIncorrect,
				isSended: state.isSended,
				isLoading: state.isLoading,
				isSendingStart: action.isSendingStart,
			};
		}
		case "setIsSended": {
			return {
				isFieldEmpty: state.isFieldEmpty,
				isEmailIncorrect: state.isEmailIncorrect,
				isSended: action.isSended,
				isLoading: state.isLoading,
				isSendingStart: state.isSendingStart,
			};
		}
		case "setIsLoading": {
			return {
				isFieldEmpty: state.isFieldEmpty,
				isEmailIncorrect: state.isEmailIncorrect,
				isSended: state.isSended,
				isLoading: action.isLoading,
				isSendingStart: state.isSendingStart,
			};
		}
		default: {
			throw new Error(`Unknown action: ${action.type}`);
		}
	}
};
