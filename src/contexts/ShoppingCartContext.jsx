import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";

export const ShoppingCart = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [cartItems, setCart] = useState([]);

	const context = {};

	return (
		<ShoppingCart.Provider value={context}>
			{children}
		</ShoppingCart.Provider>
	);
};

export default ShoppingCartProvider;
