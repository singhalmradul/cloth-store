import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles';
import { useSelector } from 'react-redux';
import { selectCategoryMap } from '../../store/categories/cateogories.selector';

const Category = () => {
	const categoryMap = useSelector(selectCategoryMap);
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
