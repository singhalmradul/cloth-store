import ProductCard from '../../components/product-card/product-card.component';
import { Link } from 'react-router-dom';
import {
	CategoryPreview,
	Preview,
	Title,
} from './categories-preview.styles';
import { useSelector } from 'react-redux';
import {
	selectCategoryMap,
	selectIsCategoriesLoading,
} from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
	const categoryMap = useSelector(selectCategoryMap);
	const isLoading = useSelector(selectIsCategoriesLoading);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoryMap).map((category) => (
					<CategoryPreview key={category}>
						<h2>
							<Link to={category}>
								<Title>{category}</Title>
							</Link>
						</h2>
						<Preview>
							{categoryMap[category]
								.filter((_, index) => index < 4)
								.map((product) => (
									<ProductCard
										product={product}
										key={product.id}
									/>
								))}
						</Preview>
					</CategoryPreview>
				))
			)}
		</>
	);
};

export default CategoriesPreview;
