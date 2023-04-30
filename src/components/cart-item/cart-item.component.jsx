import { CartItemContainer, ItemDetails, Name } from './cart-item.styles';

const CartItem = ({ product }) => {
	const { name, quantity, price, imageUrl } = product;
	return (
		<CartItemContainer>
			<img
				src={imageUrl}
				alt={`${name}`}
			/>
			<ItemDetails>
				<Name>{name}</Name>
				<span>
					{quantity} x {price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};
export default CartItem;
