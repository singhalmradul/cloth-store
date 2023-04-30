import DirectoryItem from '../../components/directory-item/directory-item.component';
import { DirectoryContainer } from './home.styles';
import { selectCategory } from '../../store/categories/cateogories.selector';
import { useSelector } from 'react-redux';

const Home = () => {
	const categories = useSelector(selectCategory);
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItem
					category={category}
					key={category.id}
				/>
			))}
		</DirectoryContainer>
	);
};
export default Home;
