import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className='cart-dropdown-container'>
			{cartItems.length ? (
				<div className='cart-items'>
					{cartItems.map(product => (
						<CartItem
							key={product.id}
							product={product}
						/>
					))}
				</div>
			) : (
				<span className='empty-message'>cart is empty :(</span>
			)}
			<Button>checkout</Button>
		</div>
	);
};

export default CartDropdown;
