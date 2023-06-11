import { useNavigate } from 'react-router-dom';
import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from './directory-item.styles';
import { CategoryInfo } from '../../store/categories/categories.types';

type DirectoryItemProps = { category: CategoryInfo };
const DirectoryItem = ({ category }: DirectoryItemProps) => {
	const navigate = useNavigate();
	const { title, imageUrl, route } = category;
	const onClick = () => {
		navigate(route);
	};
	return (
		<DirectoryItemContainer onClick={onClick}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>shop now</p>
			</Body>
		</DirectoryItemContainer>
	);
};
export default DirectoryItem;
