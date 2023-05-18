import {
	CartIconContainer,
	ItemCount,
	ShoppingBagIcon,
} from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCartItemCount,
	selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
	const cartItemCount = useSelector(selectCartItemCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();
	const onClick = () => dispatch(setCartOpen(!isCartOpen));
	return (
		<CartIconContainer onClick={onClick}>
			<ShoppingBagIcon />
			<ItemCount>{cartItemCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
