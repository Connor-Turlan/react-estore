import { createContext, useState } from "react";
import { getProducts } from "../services/api";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [isLoading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

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
