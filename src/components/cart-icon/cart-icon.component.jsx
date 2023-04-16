import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
	CartIconContainer,
	ItemCount,
	ShoppingBagIcon,
} from './cart-icon.styles';
const CartIcon = ({ onClick }) => {
	const { itemCount } = useContext(CartContext);
	return (
		<CartIconContainer onClick={onClick}>
			<ShoppingBagIcon />
			<ItemCount>{itemCount}</ItemCount>
		</CartIconContainer>
	);
};
export default CartIcon;
