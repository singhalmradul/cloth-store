import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ChangeQuantity, CheckoutItemContainer, Image, Name, Price, Quantity, Total, Value } from './checkout-item.styles';
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
	// const remove = () => {
	// 	clearItemFromCart(item);
	// };
	return (
		<CheckoutItemContainer>
			<Image>
				<img
					src={imageUrl}
					alt={`${name}`}
				/>
			</Image>
			<Name>{name}</Name>
			<Quantity>
				<ChangeQuantity	onClick={decrease}>
					-
				</ChangeQuantity>
				<Value>{quantity}</Value>
				<ChangeQuantity
					onClick={increase}
				>
					+
				</ChangeQuantity>
			</Quantity>
			<Price>{price}</Price>
			<Total>{price * quantity}</Total>
			{/* <span className='remove-button'><button onClick={remove}>x</button></span> */}
		</CheckoutItemContainer>
	);
};
export default CheckoutItem;
