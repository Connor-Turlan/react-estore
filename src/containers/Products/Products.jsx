import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Loading from "../../components/Loading/Loading";
import StoreGrid from "../StoreGrid/StoreGrid";
import styles from "./Products.module.scss";

function Products(props) {
	const { isLoading, products } = useContext(ProductContext);

	return (
		<>
			<h1>All Products</h1>
			{isLoading && <Loading />}
			<StoreGrid items={products} />
		</>
	);
}

export default Products;
