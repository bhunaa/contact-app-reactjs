import { GET_CONTACT, SET_CONTACT } from "../constants/contact";

function getContact(data) {
	return {
		type: GET_CONTACT,
		payload: data,
	};
}

function setContact(data) {
	return {
		type: SET_CONTACT,
		payload: data,
	};
}

export { getContact, setContact };
