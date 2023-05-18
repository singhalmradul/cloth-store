import { RootState } from '../store';
import { createSelector } from 'reselect';
export const selectUserReducer = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
	[selectUserReducer],
	(userSlice) => userSlice.currentUser
);
