import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/categories.types';

import { CART_ACTION_TYPES, CartItem } from './cart.types';

const addItem = (cartItems: CartItem[], itemToAdd: CategoryItem) => {
	if (cartItems.find((product) => product.id === itemToAdd.id))
		return cartItems.map((product) =>
			product.id === itemToAdd.id
				? { ...itemToAdd, quantity: product.quantity + 1 }
				: product
		);
	else return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const clearItem = (cartItems: CartItem[], itemToClear: CartItem) =>
	cartItems.filter((product) => product.id !== itemToClear.id);

const removeItem = (cartItems: CartItem[], itemToRemove: CartItem) => {
	const existingItem = cartItems.find(
		(product) => product.id === itemToRemove.id
	);
	if (existingItem && existingItem.quantity > 1)
		return cartItems.map((product) =>
			product.id === itemToRemove.id
				? { ...itemToRemove, quantity: product.quantity - 1 }
				: product
		);
	else return clearItem(cartItems, itemToRemove);
};

export type SetCartOpen = ActionWithPayload<
	CART_ACTION_TYPES.SET_CART_OPEN,
	boolean
>;

export type SetCartItems = ActionWithPayload<
	CART_ACTION_TYPES.SET_CART_ITEMS,
	CartItem[]
>;

export const setCartOpen = withMatcher(
	(isOpen: boolean): SetCartOpen =>
		createAction(CART_ACTION_TYPES.SET_CART_OPEN, isOpen)
);

export const setCartItems = withMatcher(
	(newCartItems: CartItem[]): SetCartItems =>
		createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
);

export const addItemToCart = (cartItems: CartItem[], item: CategoryItem) => {
	const newCartItems = addItem(cartItems, item);
	return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], item: CartItem) => {
	const newCartItems = removeItem(cartItems, item);
	return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], item: CartItem) => {
	const newCartItems = clearItem(cartItems, item);
	return setCartItems(newCartItems);
};
