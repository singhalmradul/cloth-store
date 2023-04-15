import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {
	const { cartItems, grandTotal } = useContext(CartContext);
	console.log(cartItems);
	return (
		<div class='checkout-container'>
			<h1>checkout</h1>
			<div className='checkout-header'>
				<div className='header-block'>product</div>
				<div className='header-block'>name</div>
				<div className='header-block'>quantity</div>
				<div className='header-block'>price</div>
				<div className='header-block'>total</div>
			</div>
			{cartItems.map(item => (
				<CheckoutItem
					item={item}
					key={item.id}
				/>
			))}
			<span className='total'>grand total: {grandTotal}</span>
		</div>
	);
};
export default Checkout;
