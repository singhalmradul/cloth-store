import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	NextOrObserver,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
	QueryDocumentSnapshot,
} from 'firebase/firestore';

import { Category } from '../../store/categories/categories.types';

const firebaseConfig = {
	apiKey: 'AIzaSyBY8TnWF15V4wxzuQpe4F9jCmdlP6b4Quo',
	authDomain: 'singhalmradul-cloth-shop.firebaseapp.com',
	projectId: 'singhalmradul-cloth-shop',
	storageBucket: 'singhalmradul-cloth-shop.appspot.com',
	messagingSenderId: '943362562454',
	appId: '1:943362562454:web:5fb867ff04bf79b1d3a5b7',
	measurementId: 'G-NYG44B8QNY',
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

const db = getFirestore();

export type ObjectToAdd = { title: string };
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
	collectionKey: string,
	objectsToAdd: T[]
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
};

export const getCategoryAndDocuments = async (): Promise<Category[]> => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);

	return querySnapshot.docs.map(
		(docSnapshot) => docSnapshot.data() as Category
	);
};

export type AdditionalDetails = { displayName?: string };

export type UserData = { displayName: string; email: string; createdAt: Date };

export const createUserDocumentWithAuth = async (
	userAuth: User,
	additionalDetails = {} as AdditionalDetails
): Promise<QueryDocumentSnapshot<UserData> | void> => {
	if (!userAuth) return;
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalDetails,
			});
		} catch (error) {
			console.log('error!:', error);
		}
	}

	return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const signUpUserUsingEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (
	email: string,
	password: string
) => await signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
	if (callback) return onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): Promise<User | null> =>
	new Promise((resolve, reject) => {
		const unsuscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsuscribe();
				resolve(userAuth);
			},
			reject
		);
	});
