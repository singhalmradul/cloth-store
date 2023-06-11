import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
	FormContainer,
	PaymentButton,
	PaymentFormContainer,
} from './payment-form.styles';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { StripeCardElement } from '@stripe/stripe-js';
import { FormEvent, useState } from 'react';
const isValidCardElement = (
	card: StripeCardElement | null
): card is StripeCardElement => card !== null;
const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
	const paymentHandler = async (event: FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (!stripe || !elements) return;
		const card = elements.getElement(CardElement);
		console.log(card,'hooooi');
		console.log(!isValidCardElement(card));
		if (!isValidCardElement(card)) return;
		console.log(card);
		setIsPaymentProcessing(true);
		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((res) => res.json());
		console.log(response);
		const {
			paymentIntent: { client_secret },
		} = response;
		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card,
				billing_details: {
					name: currentUser ? currentUser.displayName : 'guest',
				},
			},
		});
		setIsPaymentProcessing(false);
		if (paymentResult.error) alert(paymentResult.error);
		else if (paymentResult.paymentIntent.status === 'succeeded')
			alert('payment successful');
	};
	return (
		<PaymentFormContainer>
			<FormContainer>
				<h2>credit card payment:</h2>
				<CardElement />
				<PaymentButton
					onClick={paymentHandler}
					isLoading={isPaymentProcessing}
					buttonType={BUTTON_TYPE_CLASSES.inverted}
				>
					pay now
				</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
