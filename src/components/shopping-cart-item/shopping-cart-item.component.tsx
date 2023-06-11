import { CartItem } from '../../store/cart/cart.types';
import {
	CartItemContainer,
	ItemDetails,
	Name,
} from './shopping-cart-item.styles';

type CartItemProps = { product: CartItem };
const ShoppingCartItem = ({ product }: CartItemProps) => {
	const { name, quantity, price, imageUrl } = product;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<Name>{name}</Name>
				<span>
					{quantity} x {price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};
export default ShoppingCartItem;
