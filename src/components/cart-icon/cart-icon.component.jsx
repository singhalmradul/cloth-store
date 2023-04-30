import {
	CartIconContainer,
	ItemCount,
	ShoppingBagIcon,
} from './cart-icon.styles';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../store/cart/cart.selector';

const CartIcon = ({ onClick }) => {
	const cartItemCount = useSelector(selectCartItemCount);
	return (
		<CartIconContainer onClick={onClick}>
			<ShoppingBagIcon />
			<ItemCount>{cartItemCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
