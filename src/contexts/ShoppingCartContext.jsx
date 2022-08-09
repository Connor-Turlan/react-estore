import { createContext, useState, useEffect, useRef } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { getProducts } from "../services/api";

export const ShoppingCart = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [cartItems, setCart] = useState({});
	const [cartID, setCartID] = useState("");
	const [cookies, setCookie, removeCookie] = useCookies();

	useEffect(() => {}, []);

	const context = { cartItems, setCart, cookies };

	return (
		<CookiesProvider>
			<ShoppingCart.Provider value={context}>
				{children}
			</ShoppingCart.Provider>
		</CookiesProvider>
	);
};

export default ShoppingCartProvider;
