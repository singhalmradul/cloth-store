import { createContext, useEffect, useState } from 'react';
// import SHOP_DATA from '../shop-data.js';
import {
	getCategoryDirectories,
	// addCollectionAndDocuments,
	getCategoryAndDocuments,
} from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
	categoryMap: {},
	categories:[],
});
export const CategoriesProvider = ({ children }) => {
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);
	const [categories, setCategories] = useState([]);
	const [categoryMap, setCategoryMap] = useState({});
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoryAndDocuments();
			setCategoryMap(categoryMap);
		};
		getCategoriesMap();
	}, []);
	useEffect(() => {
		const getCategories = async () => {
			const categories = await getCategoryDirectories();
			setCategories(categories);
		};
		getCategories();
	}, []);
	const value = { categoryMap,categories };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
