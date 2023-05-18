import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectCartReducer = (state: RootState) => state.cart;

export const selectIsCartOpen = createSelector(
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
