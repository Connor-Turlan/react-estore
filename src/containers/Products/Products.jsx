import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Loading from "../../components/Loading/Loading";
import StoreGrid from "../StoreGrid/StoreGrid";
/* import styles from "./Products.module.scss"; */

function Products(props) {
	const { isLoading, products } = useContext(ProductContext);

	// scroll to top on mount.
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<h1>All Products</h1>
			{isLoading && <Loading />}
			<StoreGrid
				items={products.sort((a, b) => a.name.localeCompare(b.name))}
			/>
		</>
	);
}

export default Products;
