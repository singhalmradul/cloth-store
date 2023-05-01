import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import {
	createUserDocumentWithAuth,
	onAuthStateChangedListener,
	// addCollectionAndDocuments,
} from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { fetchCategoriesAsync } from './store/categories/categories.action';
// import SHOP_DATA from './shop-data.js';

const App = () => {
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);
	useEffect(() => {
		const unsuscribe = onAuthStateChangedListener((user) => {
			if (user) createUserDocumentWithAuth(user);
			dispatch(setCurrentUser(user));
		});
		return unsuscribe;
	}, []);
	useEffect(() => {
			dispatch(fetchCategoriesAsync());
	}, []);

	return (
		<Routes>
			<Route
				path='/'
				element={<NavigationBar />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='shop/*'
					element={<Shop />}
				/>
				<Route
					path='auth'
					element={<Authentication />}
				/>
				<Route
					path='checkout'
					element={<Checkout />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
