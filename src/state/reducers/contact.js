import { GET_CONTACT, SET_CONTACT } from "../constants/contact";

const initialState = {
	loading: false,
	user: [],
};

function contactReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CONTACT:
			return {
				user: action.payload,
			};
		case SET_CONTACT:
			return {
				...state.contact,
				...action.payload,
				loading: false,
			};
		default:
			return state;
	}
}

export default contactReducer;
