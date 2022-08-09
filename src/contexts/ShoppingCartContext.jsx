import { createContext, useState, useEffect } from "react";
import { CookiesProvider } from "react-cookie";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [cartItems, setCart] = useState({});

	useEffect(() => {}, []);

	const context = { cartItems, setCart };

	return (
		<CookiesProvider>
			<ShoppingCartContext.Provider value={context}>
				{children}
			</ShoppingCartContext.Provider>
		</CookiesProvider>
	);
};

export default ShoppingCartProvider;
