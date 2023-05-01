import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles';
import { useSelector } from 'react-redux';
import {
	selectCategoryMap,
	selectIsCategoriesLoading,
} from '../../store/categories/cateogories.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
	const categoryMap = useSelector(selectCategoryMap);
	const { category } = useParams();
	const [products, setProducts] = useState(categoryMap[category]);
	const isLoading = useSelector(selectIsCategoriesLoading);
	useEffect(() => {
		setProducts(categoryMap[category]);
	}, [category, categoryMap]);
	return isLoading ? (
		<Spinner />
	) : (
		<>
			<CategoryTitle>{category}</CategoryTitle>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard
							product={product}
							key={product.id}
						/>
					))}
			</CategoryContainer>
		</>
	);
};
export default Category;
