import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';

const selectCartReducer = (state):CartState => state.cart;

export const isCartOpenSelector = createSelector(
	[selectCartReducer],
	(selectCartReducer) => selectCartReducer.isCartOpen
);

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);
export const selectCartItemCount = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce((acc, product) => acc + product.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, product) => acc + product.quantity * product.price, 0)
);
