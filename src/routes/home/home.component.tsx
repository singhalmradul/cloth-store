import DirectoryItem from '../../components/directory-item/directory-item.component';
import { DirectoryContainer } from './home.styles';
import {
	selectCategory,
	selectIsCategoriesLoading,
} from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';

const Home = () => {
	const categories = useSelector(selectCategory);
	const isLoading = useSelector(selectIsCategoriesLoading);

	return (
		<DirectoryContainer>
			{isLoading ? (
				<Spinner />
			) : (
				categories.map((category) => (
					<DirectoryItem
						category={category}
						key={category.id}
					/>
				))
			)}
		</DirectoryContainer>
	);
};

export default Home;
