import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

const DirectoryItem = ({ category }) => {
	const navigate = useNavigate();
	const { title, imageUrl, route } = category;
		const onClick = () => {
			navigate(route);
		};
	return (
		<DirectoryItemContainer onClick={onClick}>
			<BackgroundImage imageUrl={imageUrl}/>
			<Body>
				<h2>{title}</h2>
				<p>shop now</p>
			</Body>
		</DirectoryItemContainer>
	);
};
export default DirectoryItem;
