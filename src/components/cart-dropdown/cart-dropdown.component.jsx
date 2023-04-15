import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { Link, useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const { cartItems, setCartOpen } = useContext(CartContext);
	const navigate = useNavigate();
	const onClick = () => {
		setCartOpen(false);
		navigate('/checkout');
	};
	return (
		<div className='cart-dropdown-container'>
			{cartItems.length ? (
				<div className='cart-items'>
					{cartItems.map((product) => ( 
						<CartItem
							key={product.id}
							product={product}
						/>
					))}
				</div>
			) : (
				<span className='empty-message'>cart is empty :(</span>
			)}
			<Button onClick={onClick}>checkout</Button>
		</div>
	);
};

export default CartDropdown;
