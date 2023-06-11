import {
	ChangeQuantity,
	CheckoutItemContainer,
	Image,
	Name,
	Price,
	Quantity,
	Total,
	Value,
} from './checkout-item.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
	addItemToCart,
	// clearItemFromCart,
	removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
type CheckoutItemProps = { item: CartItem };
const CheckoutItem = ({ item }: CheckoutItemProps) => {
	const { name, quantity, price, imageUrl } = item;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const increase = () => {
		dispatch(addItemToCart(cartItems, item));
	};
	const decrease = () => {
		dispatch(removeItemFromCart(cartItems, item));
	};
	// const remove = () => {
	// 	dispatch(clearItemFromCart(cartItems, item));
	// };
	return (
		<CheckoutItemContainer>
			<Image>
				<img src={imageUrl} alt={`${name}`} />
			</Image>
			<Name>{name}</Name>
			<Quantity>
				<ChangeQuantity onClick={decrease}>-</ChangeQuantity>
				<Value>{quantity}</Value>
				<ChangeQuantity onClick={increase}>+</ChangeQuantity>
			</Quantity>
			<Price>{price}</Price>
			<Total>{price * quantity}</Total>
			{/* <span className='remove-button'><button onClick={remove}>x</button></span> */}
		</CheckoutItemContainer>
	);
};
export default CheckoutItem;
