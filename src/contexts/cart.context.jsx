import { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: false,
	setCartOpen: () => null,
	cartItems: null,
	addItemToCart: () => null,
	itemCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [itemCount, setItemCount] = useState(0);
	const addItemToCart = item => {
		if (cartItems.find(product => product.id === item.id))
			setCartItems(
				cartItems.map(product =>
					product.id === item.id
						? { ...item, quantity: product.quantity + 1 }
						: product
				)
			);
		else setCartItems([...cartItems, { ...item, quantity: 1 }]);
		setItemCount(itemCount + 1);
	};
	const value = { isCartOpen, setCartOpen, cartItems, addItemToCart,itemCount };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
