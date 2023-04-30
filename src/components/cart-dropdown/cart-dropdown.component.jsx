import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.jsx';
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(setCartOpen(false));
		navigate('/checkout');
	};
	return (
		<CartDropdownContainer>
			{cartItems.length ? (
				<CartItems>
					{cartItems.map((product) => (
						<CartItem
							key={product.id}
							product={product}
						/>
					))}
				</CartItems>
			) : (
				<EmptyMessage>cart is empty</EmptyMessage>
			)}
			<Button onClick={onClick}>checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
