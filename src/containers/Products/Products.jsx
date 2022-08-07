import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/Products";
import Loading from "../../components/Loading/Loading";
import StoreGrid from "../StoreGrid/StoreGrid";
import styles from "./Products.module.scss";

function Products(props) {
	const { isLoading, products, fetchProducts } = useContext(ProductContext);

	useEffect(fetchProducts, []);

	return (
		<>
			<h1>All Products</h1>
			{isLoading && <Loading />}
			<StoreGrid items={products} />
		</>
	);
}

export default Products;
