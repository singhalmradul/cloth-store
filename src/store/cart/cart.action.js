import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addItem = (cartItems, itemToAdd) => {
	if (cartItems.find((product) => product.id === itemToAdd.id))
		return cartItems.map((product) =>
			product.id === itemToAdd.id
				? { ...itemToAdd, quantity: product.quantity + 1 }
				: product
		);
	else return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
const clearItem = (cartItems, itemToClear) =>
	cartItems.filter((product) => product.id !== itemToClear.id);
const removeItem = (cartItems, itemToRemove) => {
	const existingItem = cartItems.find(
		(product) => product.id === itemToRemove.id
	);
	if (existingItem.quantity > 1)
		return cartItems.map((product) =>
			product.id === itemToRemove.id
				? { ...itemToRemove, quantity: product.quantity - 1 }
				: product
		);
	else return clearItem(cartItems, itemToRemove);
};
export const setCartOpen = (isOpen) =>
	createAction(CART_ACTION_TYPES.SET_CART_OPEN, isOpen);
export const addItemToCart = (cartItems, item) => {
	const newCartItems = addItem(cartItems, item);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, item) => {
	const newCartItems = removeItem(cartItems, item);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, item) => {
	const newCartItems = clearItem(cartItems, item);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
