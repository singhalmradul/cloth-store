import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.jsx';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
	const { cartItems, setCartOpen } = useContext(CartContext);
	const navigate = useNavigate();
	const onClick = () => {
		setCartOpen(false);
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
