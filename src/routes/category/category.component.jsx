import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
	const { categoryMap } = useContext(CategoriesContext);
	const { category } = useParams();
	const [products, setProducts] = useState(categoryMap[category]);
	useEffect(() => {
		setProducts(categoryMap[category]);
	}, [category, categoryMap]);
	return (
		<>
			<CategoryTitle>{category}</CategoryTitle>
			<CategoryContainer>
				{products &&
					products.map(product => (
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
