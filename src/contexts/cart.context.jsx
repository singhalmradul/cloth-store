import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

export const CartContext = createContext({
	isCartOpen: false,
	setCartOpen: () => null,
	cartItems: null,
	addItemToCart: () => null,
	removeItemFromCart: () => null,
	clearItemFromCart: () => null,
	itemCount: 0,
	grandTotal: 0,
});
export const CART_ACTION_TYPES = {
	SET_CART_OPEN: 'SET_CART_OPEN',
	SET_CART_ITEMS: 'SET_CART_ITEMS',
};
const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	itemCount: 0,
	grandTotal: 0,
};
const cartReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPES.SET_CART_OPEN:
			return { ...state, isCartOpen: payload };
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return { ...state, ...payload };
		default:
			throw new Error(`unhandled type of ${type} in cartReducer`);
	}
};
const addItem = (cartItems, itemToAdd) => {
	if (cartItems.find(product => product.id === itemToAdd.id))
		return cartItems.map(product =>
			product.id === itemToAdd.id
				? { ...itemToAdd, quantity: product.quantity + 1 }
				: product
		);
	else return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
const clearItem = (cartItems, itemToClear) =>
	cartItems.filter(product => product.id !== itemToClear.id);
const removeItem = (cartItems, itemToRemove) => {
	const existingItem = cartItems.find(
		product => product.id === itemToRemove.id
	);
	if (existingItem.quantity > 1)
		return cartItems.map(product =>
			product.id === itemToRemove.id
				? { ...itemToRemove, quantity: product.quantity - 1 }
				: product
		);
	else return clearItem(cartItems, itemToRemove);
};
export const CartProvider = ({ children }) => {
	const [{ isCartOpen, cartItems, itemCount, grandTotal }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);
	const setCartOpen = bool => {
		dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool));
	};
	const updateCartItemsReducer = cartItems => {
		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems,
				itemCount: cartItems.reduce(
					(acc, product) => acc + product.quantity,
					0
				),
				grandTotal: cartItems.reduce(
					(acc, product) => acc + product.quantity * product.price,
					0
				),
			})
		);
	};
	const addItemToCart = item => {
		const newCartItems = addItem(cartItems, item);
		updateCartItemsReducer(newCartItems);
	};
	const removeItemFromCart = item => {
		const newCartItems = removeItem(cartItems, item);
		updateCartItemsReducer(newCartItems);
	};
	const clearItemFromCart = item => {
		const newCartItems = clearItem(cartItems, item);
		updateCartItemsReducer(newCartItems);
	};
	const value = {
		isCartOpen,
		setCartOpen,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		itemCount,
		grandTotal,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
