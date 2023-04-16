import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from '../shop-data.js';
import {
	addCollectionAndDocuments,
	getCategoryAndDocuments,
} from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
	categories: [],
	setCategories: () => null,
});
export const CategoriesProvider = ({ children }) => {
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoryAndDocuments();
			console.log(categoryMap);
			setCategories(categoryMap);
		};
		getCategoriesMap();
	}, []);
	const [categories, setCategories] = useState([]);
	const value = { categories };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
