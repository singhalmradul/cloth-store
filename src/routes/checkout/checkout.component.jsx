import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer, CheckoutHeader, GrandTotal, HeaderBlock } from './checkout.styles';

const Checkout = () => {
	const { cartItems, grandTotal } = useContext(CartContext);
	return (
		<CheckoutContainer>
			<h1>checkout</h1>
			<CheckoutHeader>
				<HeaderBlock>product</HeaderBlock>
				<HeaderBlock>name</HeaderBlock>
				<HeaderBlock>quantity</HeaderBlock>
				<HeaderBlock>price</HeaderBlock>
				<HeaderBlock>total</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map(item => (
				<CheckoutItem
					item={item}
					key={item.id}
				/>
			))}
			<GrandTotal>grand total: {grandTotal}</GrandTotal>
		</CheckoutContainer>
	);
};
export default Checkout;
