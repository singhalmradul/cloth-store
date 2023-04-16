import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { Link } from 'react-router-dom';
import './categories-preview.styles.jsx';
import { CategoryPreview, Preview, Title } from './categories-preview.styles.jsx';
const CategoriesPreview = () => {
	const { categoryMap } = useContext(CategoriesContext);
	return (
		<>
			{Object.keys(categoryMap).map(category => (
				<CategoryPreview key={category}>
					<h2>
						<Link to={category}>
							<Title>{category}</Title>
						</Link>
					</h2>
					<Preview>
						{categoryMap[category]
							.filter((_, index) => index < 4)
							.map(product => (
								<ProductCard
									product={product}
									key={product.id}
								/>
							))}
					</Preview>
				</CategoryPreview>
			))}
		</>
	);
};
export default CategoriesPreview;
