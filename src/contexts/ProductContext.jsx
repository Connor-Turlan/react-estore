import { createContext, useState, useEffect } from "react";
import { getProducts, updateProductStock } from "../services/api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [isLoading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	const fetchProducts = async (event) => {
		setLoading(true);

		const promise = getProducts();
		promise.then(setProducts).finally(setLoading(false));

		return promise;
	};

	const updateStock = async (productID, newQuantity) => {
		await updateProductStock(productID, newQuantity);
		return fetchProducts();
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const context = {
		isLoading,
		setLoading,
		products,
		setProducts,
		fetchProducts,
		updateStock,
	};

	return (
		<ProductContext.Provider value={context}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
