import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import DirectoryItem from '../../components/directory-item/directory-item.component';
import { DirectoryContainer } from './home.styles';
const Home = () => {
	const { categories } = useContext(CategoriesContext);
	return (
		<DirectoryContainer>
			{categories.map(category => (
				<DirectoryItem
					category={category}
					key={category.id}
				/>
			))}
		</DirectoryContainer>
	);
};
export default Home;
