import { createContext, useState, useEffect } from 'react';
import {
	createUserDocumentWithAuth,
	onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
	currUser: null,
	setCurrUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currUser, setCurrUser] = useState(null);
	const value = { currUser, setCurrUser };
	useEffect(() => {
		const unsuscribe = onAuthStateChangedListener(user => {
			if (user) setCurrUser(createUserDocumentWithAuth(user));
            setCurrUser(user);
		});
		return unsuscribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
