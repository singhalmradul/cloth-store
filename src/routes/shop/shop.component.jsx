import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';
import { Route, Routes } from 'react-router-dom';
import CategoryPreview from '../category-preview/category-preview.component';
import Category from '../category/category.component';

const Shop = () => {
	return (
		<Routes>
			<Route
				index
				element={<CategoryPreview />}
			/>
			<Route
				path=':category'
				element={<Category />}
			/>
		</Routes>
	);
};
export default Shop;
