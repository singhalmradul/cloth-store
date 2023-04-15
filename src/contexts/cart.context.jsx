import { createContext, useState, useEffect } from 'react';

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

export const CartProvider = ({ children }) => {
	const [isCartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [itemCount, setItemCount] = useState(0);
	const [grandTotal, setGrandTotal] = useState(0);
	useEffect(
		() =>
			setItemCount(
				cartItems.reduce((acc, product) => acc + product.quantity, 0)
			),
		[cartItems]
	);
	useEffect(
		() =>
			setGrandTotal(
				cartItems.reduce(
					(acc, product) => acc + product.quantity * product.price,
					0
				)
			),
		[cartItems]
	);
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
	};
	const removeItemFromCart = item => {
		const existingItem = cartItems.find(product => product.id === item.id);
		if (existingItem.quantity > 1)
			setCartItems(
				cartItems.map(product =>
					product.id === item.id
						? { ...item, quantity: product.quantity - 1 }
						: product
				)
			);
		else setCartItems(cartItems.filter(product => product.id !== item.id));
	};
	const clearItemFromCart = item => {
		setCartItems(cartItems.filter(product => product.id !== item.id));
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
