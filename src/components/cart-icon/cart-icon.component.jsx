import { useContext } from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';
const CartIcon = ({ onClick }) => {
	const { itemCount } = useContext(CartContext);
	return (
		<div
			className='cart-icon-container'
			onClick={onClick}
		>
			<ShoppingBagIcon className='shopping-bag-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};
export default CartIcon;
