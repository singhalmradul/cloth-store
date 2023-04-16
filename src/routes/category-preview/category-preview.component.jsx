import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category-preview.styles.scss';
import { Link } from 'react-router-dom';
const CategoryPreview = () => {
	const { categories } = useContext(CategoriesContext);
	return (
		<div className='category-preview-container'>
			{Object.keys(categories).map(category => (
				<div key={category}>
					<h2>
						<Link to={category }>
							<span className='title'>{category}</span>
						</Link>
					</h2>
					<div className='preview'>
						{categories[category].map(product => (
							<ProductCard
								product={product}
								key={product.id}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
export default CategoryPreview;
