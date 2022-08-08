import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [isLoading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	const fetchProducts = (event) => {
		setLoading(true);

		getProducts()
			.then((data) => setProducts(data))
			.finally(setLoading(false));
	};

	useEffect(fetchProducts, []);

	const context = {
		isLoading,
		setLoading,
		products,
		setProducts,
		fetchProducts,
	};

	return (
		<ProductContext.Provider value={context}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
