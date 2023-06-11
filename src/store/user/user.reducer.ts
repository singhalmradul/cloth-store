import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import {
	signInFailure,
	signInSuccess,
	signOutFailure,
	signOutSuccess,
	signUpFailure,
} from './user.action';
export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};
const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
	if (signInSuccess.match(action) || signOutSuccess.match(action))
		return { ...state, currentUser: action.payload };
	if (
		signInFailure.match(action) ||
		signOutFailure.match(action) ||
		signUpFailure.match(action)
	)
		return { ...state, error: action.payload };
	return state;
};
