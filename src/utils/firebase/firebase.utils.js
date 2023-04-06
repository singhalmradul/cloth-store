// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth,GoogleAuthProvider,signInWithPopup,signInWithRedirect } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBY8TnWF15V4wxzuQpe4F9jCmdlP6b4Quo',
	authDomain: 'singhalmradul-cloth-shop.firebaseapp.com',
	projectId: 'singhalmradul-cloth-shop',
	storageBucket: 'singhalmradul-cloth-shop.appspot.com',
	messagingSenderId: '943362562454',
	appId: '1:943362562454:web:5fb867ff04bf79b1d3a5b7',
	measurementId: 'G-NYG44B8QNY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
