import { AnyAction } from 'redux';
import { CartItem } from './cart.types';
import { setCartItems, setCartOpen } from './cart.action';

export type CartState = { isCartOpen: boolean; cartItems: CartItem[] };
const INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
	if (setCartOpen.match(action))
		return { ...state, isCartOpen: action.payload };
	if (setCartItems.match(action))
		return { ...state, cartItems: action.payload };
	return state;
};
