import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
	CheckoutContainer,
	CheckoutHeader,
	GrandTotal,
	HeaderBlock,
} from './checkout.styles';
import { useSelector } from 'react-redux';
import {
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
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
				<CheckoutItem item={item} key={item.id} />
			))}
			<GrandTotal>grand total: {cartTotal}</GrandTotal>
			<PaymentForm />
		</CheckoutContainer>
	);
};
export default Checkout;
