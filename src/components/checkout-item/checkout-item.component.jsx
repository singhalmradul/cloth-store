import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';
const CheckoutItem = ({ item }) => {
	const { name, quantity, price, imageUrl } = item;
	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);
	if (!item) return;
	const increase = () => {
		addItemToCart(item);
	};
	const decrease = () => {
		removeItemFromCart(item);
	};
	const remove = () => {
		clearItemFromCart(item);
	};
	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img
					src={imageUrl}
					alt={`${name}`}
				/>
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<span
					className='arrow'
					onClick={decrease}
				>
					-
				</span>
				<span className='value'>{quantity}</span>
				<span
					className='arrow'
					onClick={increase}
				>
					+
				</span>
			</span>
			<span className='price' >{price}</span>
			<div className='remove-button'>{price * quantity}</div>
			{/* <span className='remove-button'><button onClick={remove}>x</button></span> */}
		</div>
	);
};
export default CheckoutItem;
